import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Front from '../views/Front.vue'
import Back from '../views/Back.vue'
import Other from '../views/Other.vue'
import Skills from '../views/Skills.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/front',
    name: 'Front',
    component: Front
  },
  {
    path: '/back',
    name: 'Back',
    component: Back
  },
  {
    path: '/other',
    name: 'Other',
    component: Other
  },
  {
    path: '/skills/:side/:id',
    name: 'Skills',
    component: Skills
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
