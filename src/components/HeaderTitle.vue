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
@import 'src/style/settings/responsive';

.HeaderTitle {
  font-size: 4rem;
  color: var(--bah--primary-color-dark);
}

@media (max-width: $bah-laptop__min-width) {
  .HeaderTitle {
    font-size: 3.25rem;
    line-height: 1;
  }
}
</style>
