import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'bar',
        component: "Bar",
        // a meta field
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/about',
    meta: {
      layout: 'auth'
    },
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
