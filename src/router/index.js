import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/pages/Home.vue'
import BugDetail from '../components/bugs/BugDetail.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/bugdetail/:id',
    name: 'BugDetail',
    component: BugDetail
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/pages/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
