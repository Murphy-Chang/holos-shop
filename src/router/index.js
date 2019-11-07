import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/index/home')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/login')
  },
  {
    path: '/callback',
    name: 'Callback',
    component: () => import('@/views/login/callback')
  }
]

const router = new VueRouter({
  routes
})

export default router
