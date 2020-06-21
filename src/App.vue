<template>
    <div id="app-container" :class="[ loaded ? 'loaded' : '', 'App']">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      loaded: false
    }
  },
  beforeMount () {
      window.addEventListener('load', () => {
        this.loaded = true
      })
  }
}
</script>

<style lang="scss">
.App {
  display: none;

  &.loaded {
    display: block;
  }
}
</style>