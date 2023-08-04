import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/fst-home.vue'
import Intro from '../views/intro-test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/fst-about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/fst-about.vue')
  },
  {
    path: '/intro-test',
    name: 'intro',
    component: Intro
  }
]

const router = new VueRouter({
  routes
})

export default router
