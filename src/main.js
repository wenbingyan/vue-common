import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/plugin/assets/scss/index.scss'
import Ross from '@/plugin'
Vue.use(Ross)

import '@/assets/css/base.css'

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
})
