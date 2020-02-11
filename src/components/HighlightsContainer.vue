<template>
  <section class="HighlightsContainer">
    <h3>Highlights</h3>
    <ul>
      <li>Higlight 1</li>
      <li>Higlight 2</li>
      <li>Higlight 3</li>
      <li>Higlight 4</li>
      <li>Higlight 5</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'HighlightsContainer',
  props: ['highlights']
}
</script>

<style lang="scss" scoped>
.HighlightsContainer {}
</style>
