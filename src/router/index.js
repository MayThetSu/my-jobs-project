import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Job from '../views/jobs/Job.vue'
import Details from '../views/jobs/Details.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/company/aboutus',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    name: 'Job',
    component: Job
  },
  {
    path:'/jobDetails/:id',
    name:'JobDetail',
    component:Details,
    props:true
  },
  {
    path:'/all-jobs',
    redirect:'/jobs'
  },
  {
    path:'/:catchAll(.*)',
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
