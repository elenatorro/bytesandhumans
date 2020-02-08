<template>
  <ul class="PostList">
    <li
      class="PostList__ListItem"
      v-for="(post, index) in posts"
      :key="index"
      :page="post"
      :style="{'background-image': `url('assets/img/posts/${post.image}')`}">
      <a class="PostList__Link"
        :href="post.url">
        <p class="PostList__Title">{{post.title}}</p>

        <p>{{post.excerpt}}</p>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PostList',
  props: ['posts'],
  method: {
    rotation() {
      const MAX = 6
      const MIN = -6

      return Math.floor(Math.random() * MAX) + MIN
    }
  }
}
</script>

<style lang="scss" scoped>
.PostList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  margin: 0;
}

.PostList__ListItem {
  height: 16em;
  box-sizing: border-box;
  border: .5em solid var(--bah--primary-color);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: .5em .5em 0px var(--bah--black-color);

  &:hover {
    transform: translateY(-1em);
    box-shadow: .5em 1.5em 0px var(--bah--black-color);
  }
}

.PostList__Link {
  position: relative;
  display: flex;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 1em;
  align-items: self-end;
  color: var(--bah--white-color);
}

.PostList__Title {
    position: absolute;
    top: 1em;
    right: -2em;
    color: var(--bah--primary-color);
    background-color: var(--bah--secondary-color-dark);
    padding: 1em;
}
</style>
