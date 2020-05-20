import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/examples/Index"
import Layout from "@/examples/components/layout"
import Button from "@/examples/Button"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Layout,
      children:[
        {
          path: '/button',
          component: () => import('@/examples/Button'),
        },
        {
          path: '/table',
          component: () => import('@/examples/table'),
        }
      ]
    }
  ]
})
