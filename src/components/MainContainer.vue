<template>
  <main class="MainContainer">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'MainContainer'
}
</script>

<style lang="scss" scoped>
@import 'src/style/settings/responsive';

.MainContainer {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 2em;
  padding: 4em;
  overflow-x: hidden;
}

@media (max-width: $bah-laptop__min-width) {
  .MainContainer {
    grid-template-columns: none;
    padding: 2em;
  }
}
</style>
