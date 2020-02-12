<template>
  <header class="HeaderContainer">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'HeaderContainer'
}
</script>

<style lang="scss" scoped>
.HeaderContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 6em 2em;
  background-color: var(--bah--secondary-color-dark);
  border-bottom: .5em solid var(--bah--third-color);

  p {
    margin: 1em 0;
  }
}
</style>
