import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/index/home')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/login')
  },
  {
    path: '/authorize',
    name: 'Authorize',
    component: () => import('@/views/login/authorize')
  },
  {
    path: '/callback',
    name: 'Callback',
    component: () => import('@/views/login/callback')
  },
]

const router = new VueRouter({
  routes
})

export default router
