import Vue from 'vue'
import Router from 'vue-router'
import Layout from "@/examples/components/layout"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Layout,
      children:[
        {
          path: '/table',
          component: () => import('@/examples/page/Table'),
        },
        {
          path: '/filtertable',
          component: () => import('@/examples/page/FilterTable'),
        },
        {
          path: '/imgcard',
          component: () => import('@/examples/page/ImgCard'),
        },
        {
          path: '/infolayout',
          component: () => import('@/examples/page/InfoLayout'),
        },
        {
          path: '/infolist',
          component: () => import('@/examples/page/InfoList'),
        },
        {
          path: '/searchfilter',
          component: () => import('@/examples/page/SearchFilter'),
        },
        {
          path: '/tabsbar',
          component: () => import('@/examples/page/Tabsbar'),
        },
        {
          path: '/titleline',
          component: () => import('@/examples/page/TitleLine'),
        }
      ]
    }
  ]
})
