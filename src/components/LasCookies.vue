<template>
  <div class="LasCookies">
    <a :href="`${url}/cookies`">¿Y las cookies? 🍪</a>
  </div>
</template>

<script>
export default {
  name: 'LasCookies',
  props: ['url']
}
</script>

<style lang="scss" scoped>
@import 'src/style/settings/responsive';

.LasCookies {
    position: absolute;
    bottom: -2em;
    right: 4em;
}

@media (max-width: $bah-laptop__min-width) {
    .LasCookies {
        display: none;
    }
}
</style>
