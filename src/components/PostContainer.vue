<template>
  <section class="PostContainer">
    <div class="PostContainer__Content">
      <h1 class="PostContainer__Title" v-if="title" :data-title="title">{{ title }}</h1>
      <p class="PostContainer__Date">🗓️ {{ parsedDate | moment('DD/MM/YYYY') }}</p>
      <div class="PostContainer__InnerContent">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PostContainer',
  props: [
    'title',
    'url',
    'date'
  ],
  computed: {
    parsedDate() {
      return new Date(this.date.split(' ')[0])
    }
  }
}
</script>

<style lang="scss" scoped>
.PostContainer {
  margin: 4em;
}

.PostContainer__Title {
  transform: rotate(-5deg);
  margin-top: 3em;
  position: relative;
  background-color: yellow;
  color: transparent;
  max-width: 35vw;


  &::before {
    color: black;
    position: absolute;
    content: attr(data-title);
    left: .5em;
    top: -.5em;
  }
}

.PostContainer__Date {
  transform: rotate(-5deg);
  margin-top: .5em;
  max-width: 35vw;
}

.PostContainer__InnerContent {
  padding: 4em 0;
}
</style>
