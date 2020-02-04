<template>
  <section class="PostContainer">
    <div class="PostContainer__Content">
      <h1 v-if="title" >{{ title }}</h1>
      <p>{{ parsedDate | moment('DD/MM/YYYY') }}</p>
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PostContainer',
  props: [
    'title',
    'url',
    'date'
  ],
  computed: {
    parsedDate() {
      return new Date(this.date.split(' ')[0])
    }
  }
}
</script>

<style lang="scss" scoped>
.PostContainer {
  margin: 4em;
}
</style>
