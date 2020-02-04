<template>
  <nav class="NavBar">
    <ul class="NavBar__List">
      <li class="NavBar__ListItem"
        v-for="(page, index) in pages"
        :key="index"
        :page="page">
        <a :href="page.path">{{page.name}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['pages']
}
</script>

<style lang="scss" scoped>
.NavBar__List {
  display: flex;
  justify-content: flex-end;
  background-color: var(--bah--secondary-color-dark);
  margin: 0;
  padding: 2rem;
}

.NavBar__ListItem {
  padding: 0 2rem;

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
