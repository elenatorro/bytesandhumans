<template>
  <section class="PageContainer">
    <div class="PageContent">
      <slot :class="[ loaded ? 'loaded' : '', 'SlotContainer']" name="content"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageContainer',
  data () {
    return {
      loaded: false
    }
  },
  beforeMount () {
      window.addEventListener('load', () => {
        this.loaded = false
      })
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/settings/responsive';

.PageContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 2em 0;
  line-height: 1.5;
  box-sizing: border-box;
  border-top: .5em solid var(--bah--third-color);
}

.PageContent {
  width: 100%;
  max-width: 800px;
}

.SlotContainer {
  display: none;

  &.loaded {
    display: block;
  }
}

@media (max-width: $bah-laptop__min-width) {
  .PageContainer {
    max-width: 100%;
    padding: 1em;
  }
}
</style>
