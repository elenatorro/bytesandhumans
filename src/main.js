import Vue from 'vue'
import HeaderTitle from './components/HeaderTitle'
import NavBar from './components/NavBar'
import './style/main.scss';

Vue.component('headerTitle', HeaderTitle)
Vue.component('navBar', NavBar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  delimiters: ['{!' , '!}']
})
