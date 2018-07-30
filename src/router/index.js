import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  model: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/index')
    },
    {
      path: '/reg',
      name: 'reg',
      component: () => import('@/views/Registered/index')
    }
  ]
})
