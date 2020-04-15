<template>
  <main class="PostsContainer">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'PostsContainer'
}
</script>

<style lang="scss" scoped>
@import 'src/style/settings/responsive';

.PostsContainer {
  display: flex;
  padding: 4em;
  border-top: .5em solid var(--bah--third-color);
}

@media (max-width: $bah-laptop__min-width) {
  .PostsContainer {
    padding: 2em;
  }
}
</style>
