import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import LoadStripe from '../views/LoadStripe.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/stripe',
    component: LoadStripe
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
