<template>
  <section class="PostContainer">
    <aside :class="[ hasLeftAsideSlot ? 'PostContainer__Aside PostContainer__Aside--left' : '' ]">
      <slot name="left-content"></slot>
    </aside>
    <section class="PostContainer__Center">
      <header class="PostContainer__Header">
        <div class="PostContainer__Header--title">
          <p class="PostContainer__Date">🗓️ {{ parsedDate | moment('DD/MM/YYYY') }}</p>
          <h1 class="PostContainer__Title" v-if="title" :data-title="title">{{ title }}</h1>
        </div>
        <img class="PostContainer__Image" v-if="image" :src="imagePath" />
      </header>
      <div class="PostContainer__Content">
        <slot name="content"></slot>
      </div>
    </section>
    <aside :class="[ hasRightAsideSlot ? 'PostContainer__Aside PostContainer__Aside--right' : '' ]">
      <slot name="right-content"></slot>
    </aside>
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
    },
    hasLeftAsideSlot() {
      return !!this.$slots['left-content']
    },
    hasRightAsideSlot() {
      return !!this.$slots['right-content']
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/settings/responsive';

.PostContainer {
  padding-top: 4em;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 1em;
  border-top: .5em solid var(--bah--third-color);
}

.PostContainer__Aside {
  padding: 2em;
}

.PostContainer__Center {
  p {
    margin: 2em 0;
  }
}

.PostContainer__Header {
  position: relative;
  height: 25em;
  z-index: 1;
  display: flex;
  justify-content: center;
}

.PostContainer__Header--title {
  z-index: 1;
}

.PostContainer__Image {
  position: absolute;
  top: 1em;
  min-height: 15em;
  height: 100%;
  z-index: -1;
  border: .5em solid var(--bah--third-color);
  box-shadow: .5em .5em 0px var(--bah--dark-color);
  box-sizing: border-box;
}

.PostContainer__Title {
  transform: rotate(-5deg);
  position: relative;
  background-color: var(--bah--third-color);
  color: transparent;
  margin: 0;

  &::before {
    color: black;
    position: absolute;
    content: attr(data-title);
    color: var(--bah--dark-color);
    left: .5em;
    top: -.5em;
  }
}

p.PostContainer__Date {
  transform: rotate(-5deg);
  margin-top: .5em;
  max-width: 35vw;
  margin: 1em;
}

.PostContainer__Content {
  padding: 4em 0;
  line-height: 1.5;
  box-sizing: border-box;
}

@media (max-width: $bah-laptop__min-width) {
  .PostContainer {
    display: flex;
    flex-direction: column;
  }

  .PostContainer__Header {
    height: 16em;
  }

  .PostContainer__Title {
    max-width: 100vw;
    font-size: 2.5em;
    margin-top: 0em;
    margin-bottom: -1em;
  }

  p.PostContainer__Date {
    margin: .5em;
  }

  .PostContainer__Image {
    left: 6em;
    top: 3em;
  }

  .PostContainer__Content {
    max-width: 100%;
    padding: 1em;
  }
}
</style>
