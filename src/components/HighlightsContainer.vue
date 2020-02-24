<template>
  <section class="HighlightsContainer">
    <h3>Highlights</h3>
    <p>Coming soon!</p>
  </section>
</template>

<script>
export default {
  name: 'HighlightsContainer',
  props: ['highlights']
}
</script>

<style lang="scss" scoped>
.HighlightsContainer {
  border: 0.5em solid var(--bah--contrast-color);
  color: var(--bah--contrast-color);
  padding: 2em;
}

h3 {
  margin-bottom: 1em;
}
</style>
