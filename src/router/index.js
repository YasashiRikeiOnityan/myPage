import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/fst-home.vue'
import Activation from '../views/my-activation.vue'
import Intro from '../views/intro-test.vue'
import StudyEntranceExam from '../views/studay-entrance-exam.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/my-activation',
    name: 'activation',
    component: Activation
  },
  {
    path: '/intro-test',
    name: 'intro',
    component: Intro
  },
  {
    path: '/studay-entrance-exam',
    name: 'studay-entrance-exam',
    component: StudyEntranceExam
  }
]

const router = new VueRouter({
  routes
})

export default router
