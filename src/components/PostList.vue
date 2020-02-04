<template>
  <ul class="PostList">
    <li class="PostList__ListItem"
      v-for="(post, index) in posts"
      :key="index"
      :page="post">
      <a :href="post.url">
        <p>{{post.title}}</p>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PostList',
  props: ['posts']
}
</script>

<style lang="scss" scoped>
.PostList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
  margin: 4rem;
  position: relative;
}

.PostList__ListItem {
  height: 200px;
  background-color: var(--bah--primary-color);
  box-sizing: border-box;

  a {
    position: absolute;
    top: 1em;
    left: -2em;
    background-color: var(--bah--secondary-color-dark);
    padding: 1em;
  }
}
</style>
