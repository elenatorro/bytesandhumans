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
  border-top: .5em solid var(--bah--third-color);
}

@media (max-width: $bah-laptop__min-width) {
  .MainContainer {
    display: flex;
    flex-direction: column-reverse;
    padding: 2em;
  }
}
</style>
