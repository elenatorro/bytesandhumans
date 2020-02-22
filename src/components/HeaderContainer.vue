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
@import 'src/style/settings/responsive';

.HeaderContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 6em 4em;
  background-color: var(--bah--secondary-color-dark);
  border-bottom: .5em solid var(--bah--third-color);

  p {
    margin: 1em 0;
  }
}

@media (max-width: $bah-laptop__min-width) {
  .HeaderContainer {
    padding: 2em;
  }
}
</style>
