<template>
  <aside class="AsideContainer">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'AsideContainer'
}
</script>

<style lang="scss" scoped>
@import 'src/style/settings/responsive';

.AsideContainer {
  margin-left: 1em;
}

@media (max-width: $bah-laptop__min-width) {
  .AsideContainer {
    margin-left: 0;
    margin-bottom: 2em;
  }
}
</style>
