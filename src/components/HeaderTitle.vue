<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: ['title']
}
</script>

<style lang="scss" scoped>
h1 {
  padding: 1em;
  font-size: 4rem;
  color: var(--bah--primary-color-dark);
}
</style>
