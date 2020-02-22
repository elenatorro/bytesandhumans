<template>
  <section class="PostContainer">
    <header class="PostContainer__Header">
      <div class="PostContainer__Header--title">
        <h1 class="PostContainer__Title" v-if="title" :data-title="title">{{ title }}</h1>
        <p class="PostContainer__Date">🗓️ {{ parsedDate | moment('DD/MM/YYYY') }}</p>
      </div>
      <img class="PostContainer__Image" v-if="image" :src="imagePath" />
    </header>
    <div class="PostContainer__Content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PostContainer',
  props: [
    'title',
    'url',
    'date',
    'image'
  ],
  computed: {
    imagePath() {
      return `/assets/img/posts/${this.image}`
    },
    parsedDate() {
      return new Date(this.date.split(' ')[0])
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/settings/responsive';

.PostContainer {
  margin: 0;
}

.PostContainer__Header {
  position: relative;
  height: 25em;
  z-index: 1;
}

.PostContainer__Header--title {
  z-index: 1;
}

.PostContainer__Image {
  position: absolute;
  left: 8em;
  max-height: 20em;
  height: 20em;
  top: 2em;
  z-index: -1;
  border: .5em solid var(--bah--third-color);
  transform: rotate(5deg);
  box-sizing: border-box;
}

.PostContainer__Title {
  transform: rotate(-5deg);
  margin-top: 1em;
  position: relative;
  background-color: var(--bah--third-color);
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

.PostContainer__Content {
  padding: 4em 0;
  line-height: 1.5;
}

@media (max-width: $bah-laptop__min-width) {
  .PostContainer__Header {
    height: 16em;
  }

  .PostContainer__Title {
    max-width: 100vw;
    font-size: 1.5em;
  }

  .PostContainer__Date {
    margin-top: 1em;
  }

  .PostContainer__Image {
    left: 0em;
    max-height: 12em;
    height: 12em;
    top: 4em;
  }
}
</style>
