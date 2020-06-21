import Vue from 'vue'

import App from './App'
import NavBar from './components/NavBar'
import HeaderContainer from './components/HeaderContainer'
import HeaderTitle from './components/HeaderTitle'
import MainContainer from './components/MainContainer'
import PostsContainer from './components/PostsContainer'
import AsideContainer from './components/AsideContainer'
import HighlightsContainer from './components/HighlightsContainer'
import PostList from './components/PostList'
import PostListItem from './components/PostListItem'
import PostContainer from './components/PostContainer'
import PageContainer from './components/PageContainer'
import LasCookies from './components/LasCookies'
import * as moment from 'vue-moment'
import './style/main.scss'

Vue.component('app', App)
Vue.component('navBar', NavBar)
Vue.component('headerContainer', HeaderContainer)
Vue.component('mainContainer', MainContainer)
Vue.component('postsContainer', PostsContainer)
Vue.component('asideContainer', AsideContainer)
Vue.component('highlightsContainer', HighlightsContainer)
Vue.component('headerTitle', HeaderTitle)
Vue.component('postList', PostList)
Vue.component('postListItem', PostListItem)
Vue.component('postContainer', PostContainer)
Vue.component('pageContainer', PageContainer)
Vue.component('lasCookies', LasCookies)

Vue.use(moment)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  delimiters: ['{$' , '$}'],
  data() {
    return {
      loaded: false
    }
  },
  beforeMount () {
      window.addEventListener('load', () => {
        this.loaded = true
      })
  }
}).$mount("#app");
