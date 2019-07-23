import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/chat',
      name: 'login',
      component: () => import('@/views/login.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('@/views/chat.vue')
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('@/views/error.vue')
    },
    {
      path: '*',
      component: () => import('@/views/error.vue')
    }
  ]
})
