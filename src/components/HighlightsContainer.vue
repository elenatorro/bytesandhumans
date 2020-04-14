<template>
  <section class="HighlightsContainer">
    <ul class="HighlightsList" v-for="(highlight, index) in highlights" :key="index">
      <li class="HighlightsList__ListItem">
        <h3>{{ highlight.title }}</h3>
        <ul>
          <li v-for="(item, index) in highlight.items" :key="index">
            <div class="HighlightsList_Container">
              <p>{{ item.name }}</p>
              <img v-if="item.image" :src="`assets/img/${item.image}`" />
            </div>
            <p class="HighlightsDescription">{{ item.description }}</p>
            <a class="HighlightsLink" v-if="item.url" :href="`${item.url}`">Ir →</a>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'HighlightsContainer',
  props: ['highlights']
}
</script>

<style lang="scss" scoped>
.HighlightsContainer {
  display: flex;
  flex-direction: column;
}

.HighlightsList {
  border: .5em solid var(--bah--contrast-color);
  color: var(--bah--contrast-color);
  padding: 1em;
}

.HighlightsList__ListItem {
  ul > li {
    margin: 1em 0;
  }
}

.HighlightsList_Container {
  display: flex;
  padding: 1em 0;
  align-items: center;
  position: absolute;
  left: -3.5em;
  background-color: var(--bah--secondary-color);
  border: .5em solid var(--bah--contrast-color);
  color: var(--bah--contrast-color);
  padding: 1em;
  padding: 0;
  height: 80px;
  width: 280px;

  img {
    height: 80px;
  }

  p {
    margin: 0 0 0 1em;
    width: 200px;
  }
}

.HighlightsDescription {
  padding-top: 7em;
}

.HighlightsLink {
  padding: 1em 0 0 0;
  display: block;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  position: relative;
}
</style>
