<template>
  <nav class="NavBar">
    <ul class="NavBar__List">
      <li class="NavBar__ListItem"
        v-for="(page, index) in pages"
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
  props: ['url', 'pages']
}
</script>

<style lang="scss" scoped>
.NavBar__List {
  display: flex;
  justify-content: flex-end;
  background-color: var(--bah--secondary-color-dark);
  margin: 0;
  padding-right: 4em;
}

.NavBar__ListItem {
  padding: 2em;

  a {
    color: var(--bah--primary-color-dark);
    text-decoration: none;

    &:visited,
    &:focus {
      color: var(--bah--primary-color-dark);
    }
  }
}
</style>
