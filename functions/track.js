const fetch = require('node-fetch')
const FormData = require('form-data')

const {
  TINYBIRD_TOKEN,
  TINYBIRD_API,
  TINYBIRD_DATASOURCE_NAME
} = process.env

exports.handler = function (event) {
  const row = JSON.parse(event.body)
  const csv = toCSV(row)
  const formData = new FormData()
  const url = `${TINYBIRD_API}?name=${TINYBIRD_DATASOURCE_NAME}&mode=append`

  formData.append('csv', csv)

  const request = {
    method: 'POST',
    body: formData,
    headers: {
      'Authorization': `Bearer ${TINYBIRD_TOKEN}`
    }
  }

  return fetch(url, request)
    .then(response => response.json())
    .then(onSuccess)
    .catch(onError)
}

function onSuccess(res) {
  return {
    statusCode: 200,
    body: JSON.stringify(res)
  }
}

function onError(error) {
  return {
    statusCode: 422,
    body: JSON.stringify(error)
  }
}

function toCSV(data) {
  const escapeQuotes = (str = '') => str.replace(/\"/g, '""')

  return data.map(item => {
    return item.map(field => {
      if (typeof (field) === 'string') {
        field = escapeQuotes(field)
        if (field[0] !== '"' || field[field.length - 1] !== '"') {
          field = '"' + field + '"'
        }
        return field
      }
      return field
    }).join(',')
  }).join('\n')
}