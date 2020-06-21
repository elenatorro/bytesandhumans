<template>
  <div class="HeaderTitle">
    <h1 class="bah-text-gradient">{{ title }}</h1>
    <p class="bah-text-gradient">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: ['title', 'description']
}
</script>

<style lang="scss" scoped>
@import 'src/style/settings/responsive';

.HeaderTitle {
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 4rem;
    font-family: 'Open Sans';
    color: var(--bah--primary-color-dark);
  }

  p {
    font-size: 1.25em;
    margin: -1.5em 0 0 4.25em;
    line-height: 1.25;
  }
}

@media (max-width: $bah-laptop__min-width) {
  .HeaderTitle {

    h1 {
      font-size: 3.5rem;
      line-height: 1;
    }

    p {
      font-size: 1.2em;
      margin: 1em 0 0 0;
    }
  }
}
</style>
