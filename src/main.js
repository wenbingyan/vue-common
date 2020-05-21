import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/plugin/assets/scss/index.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Ross from '@/plugin'
Vue.use(ElementUI)
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
