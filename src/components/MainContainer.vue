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
.MainContainer {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 2em;
  padding: 4em;
}
</style>
