import Vue from 'vue'

import NavBar from './components/NavBar'
import HeaderContainer from './components/HeaderContainer'
import HeaderTitle from './components/HeaderTitle'
import PostList from './components/PostList'
import PostContainer from './components/PostContainer'
import './style/main.scss'

import * as moment from 'vue-moment'

Vue.component('navBar', NavBar)
Vue.component('headerContainer', HeaderContainer)
Vue.component('headerTitle', HeaderTitle)
Vue.component('postList', PostList)
Vue.component('postContainer', PostContainer)

Vue.use(moment)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  delimiters: ['{$' , '$}']
})
