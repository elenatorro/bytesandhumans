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
  height: 50vh;
  padding: 4em;
  background-color: var(--bah--secondary-color-dark);
  border-bottom: .25em solid var(--bah--black-color);

  p {
    margin: 1em 0;
  }
}
</style>
