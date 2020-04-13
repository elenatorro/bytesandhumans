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
  background-color: var(--bah--dark-color);

  p {
    font-size: 1.25em;
    margin: -1.5em 0 0 4.25em;
    line-height: 1.25;
  }
}

@media (max-width: $bah-laptop__min-width) {
  .HeaderContainer {
    padding: 2em;

    p {
      font-size: 1.2em;
      margin: 1em 0 0 0;
    }
  }
}
</style>
