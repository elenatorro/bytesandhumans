<template>
  <li
    class="PostListItem"
    :style="this.style">
    <a
      class="PostListItem__Link"
      :href="post.url">
      <p class="PostListItem__Title">{{post.title}}</p>

      <p>{{post.excerpt}}</p>
    </a>
  </li>
</template>

<script>
export default {
  name: 'PostListItem',
  props: ['post', 'index'],
  /*
  post: {
    image: '',
    url: '',
    title: '',
    excerpt: ''
  }
  */
  data() {
    return {
      image: new Image(),
      loaded: false
    }
  },
  computed: {
    src() {
      return `assets/img/posts/${this.post.image}`
    },
    style() {
      return this.loaded
        ? {'background-image': `url('${this.src}')`}
        : {'background-color': 'inherit'}
    }
  },
  methods: {
    connectInteractionObserver() {
      this.observer = new IntersectionObserver((items) => {
        const item = items[0]

        if (item.isIntersecting) {
          this.$emit('postIntersecting', this.index)
          this.observer.disconnect()
        }
      })

      this.observer.observe(this.$el)
    }
  },
  beforeMount() {
    this.image.onload = () => {
      this.loaded = true
    }
    this.image.src = this.src
  },

  mounted () {
    this.connectInteractionObserver()
  },

  beforeDestroy () {
    this.observer.disconnect()
  }
}
</script>

<style lang="scss" scoped>
.PostListItem {
  height: 16em;
  box-sizing: border-box;
  border: .5em solid var(--bah--primary-color);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: var(--bah--primary-color);
  box-shadow: .5em .5em 0px var(--bah--black-color);

  &:hover {
    transform: translateY(-1em);
    box-shadow: .5em 1.5em 0px var(--bah--black-color);
  }
}

.PostListItem__Link {
  position: relative;
  display: flex;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 1em;
  align-items: flex-end;
  color: var(--bah--white-color);
}

.PostListItem__Title {
    position: absolute;
    top: 1em;
    right: -2em;
    color: var(--bah--primary-color);
    background-color: var(--bah--secondary-color-dark);
    padding: 1em;
}
</style>
