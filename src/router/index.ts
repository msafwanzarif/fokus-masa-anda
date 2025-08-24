import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IdleView from '../views/IdleView.vue'

const routes: RouteRecordRaw[] = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/idle',
      name: 'idle',
      component: IdleView
    }
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
