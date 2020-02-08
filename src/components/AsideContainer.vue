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
.AsideContainer {
  border: 0.5em solid var(--bah--contrast-color);
  color: var(--bah--contrast-color);
  padding: 2em;
}
</style>
