<template>
  <h1 class="HeaderTitle">{{ title }}</h1>
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: ['title']
}
</script>

<style lang="scss" scoped>
.HeaderTitle {
  font-size: 4rem;
  color: var(--bah--primary-color-dark);
}
</style>
