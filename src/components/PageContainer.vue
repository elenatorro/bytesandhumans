<template>
  <section class="PageContainer">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'PageContainer'
}
</script>

<style lang="scss" scoped>
@import 'src/style/settings/responsive';

.PageContainer {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 4em 0;
  line-height: 1.5;
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
}

@media (max-width: $bah-laptop__min-width) {
  .PageContainer {
    max-width: 100%;
    padding: 1em;
  }
}
</style>
