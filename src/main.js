import Vue from 'vue'

import NavBar from './components/NavBar'
import HeaderContainer from './components/HeaderContainer'
import HeaderTitle from './components/HeaderTitle'
import MainContainer from './components/MainContainer'
import AsideContainer from './components/AsideContainer'
import HighlightsContainer from './components/HighlightsContainer'
import PostList from './components/PostList'
import PostListItem from './components/PostListItem'
import PostContainer from './components/PostContainer'
import './style/main.scss'

import * as moment from 'vue-moment'

Vue.component('navBar', NavBar)
Vue.component('headerContainer', HeaderContainer)
Vue.component('mainContainer', MainContainer)
Vue.component('asideContainer', AsideContainer)
Vue.component('highlightsContainer', HighlightsContainer)
Vue.component('headerTitle', HeaderTitle)
Vue.component('postList', PostList)
Vue.component('postListItem', PostListItem)
Vue.component('postContainer', PostContainer)

Vue.use(moment)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  delimiters: ['{$' , '$}']
})
