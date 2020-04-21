import { createRouter, createWebHistory } from 'vue-router'
import Manifest from '../views/Manifest.vue'

const routes = [
  {
    path: '/',
    component: Manifest
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
