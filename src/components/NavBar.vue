<template>
  <nav class="NavBar">
    <ul class="NavBar__List">
      <li class="NavBar__ListItem"
        v-for="(page, index) in parsedPages"
        :key="index"
        :page="page">
        <a :href="`${url}/${page.path}`">{{page.name}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['url', 'pages'],
  computed: {
    parsedPages() {
      return this.pages.map((page) => {
        const newPage = {}
        for (let prop in page) {
          newPage[prop] = decodeURI(page[prop])
        }
        return newPage
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/settings/responsive';

.NavBar__List {
  display: flex;
  justify-content: flex-end;
  background-color: var(--bah--dark-color);
  margin: 0;
  padding: 0;
  padding-right: 4em;
}

.NavBar__ListItem {
  list-style: none;
  padding: 0;
  margin: 0;
  padding: 2em;

  a {
    color: var(--bah--secondary-color-dark);
    text-decoration: none;

    &:visited,
    &:focus {
      color: var(--bah--secondary-color-dark);
    }
  }
}

@media (max-width: $bah-laptop__min-width) {
  .NavBar__List {
    justify-content: flex-start;
    padding-right: 0;
  }

  .NavBar__ListItem {
    padding: 2em 0em 2em 2em;
  }
}
</style>
