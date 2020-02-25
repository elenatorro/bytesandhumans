<template>
  <section class="PostContainer">
    <aside :class="[ hasLeftAsideSlot ? 'PostContainer__Aside PostContainer__Aside--left' : '' ]">
      <slot name="left-content"></slot>
    </aside>
    <section class="PostContainer__Center">
      <header class="PostContainer__Header">
        <h1 class="PostContainer__Title" v-if="title" :data-title="title">{{ title }}</h1>
        <img class="PostContainer__Image" v-if="image" :src="imagePath" />
        <p class="PostContainer__Date">🗓️ {{ parsedDate | moment('DD/MM/YYYY') }}</p>
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
  overflow: hidden;
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
  flex-direction: column;
  margin: 4em 0 0 0;
}

.PostContainer__Image {
  position: absolute;
  height: 100%;
  top: 0;
  z-index: -1;
  border: .5em solid var(--bah--third-color);
  box-shadow: .5em .5em 0px var(--bah--dark-color);
  box-sizing: border-box;
}

.PostContainer__Title {
  transform: rotate(-10deg);
  position: absolute;
  color: var(--bah--dark-color);
  background-color: var(--bah--third-color);
  padding: .5em 1em;
  left: -2em;
  top: -1em;
}

p.PostContainer__Date {
  position: absolute;
  margin: 1em 0;
  bottom: -4em;
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

  .PostContainer__Title {
    font-size: 2.5em;
    left: 0;
  }

  .PostContainer__Image {
    min-height: 20em;
    margin: 1em;
  }

  p.PostContainer__Date {
    position: absolute;
    margin: 0 1em;
    bottom: 1em;
  }

  .PostContainer__Content {
    max-width: 100%;
    padding: 1em;
  }
}
</style>
