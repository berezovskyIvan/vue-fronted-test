import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/pages/MainPage'
import Login from '@/pages/Login'
import Dashboard from '@/pages/Dashboard';
import PageNotFound from '@/pages/PageNotFound'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'main',
      path: '/',
      component: MainPage
    },
    {
      name: 'page-not-found',
      path: '*',
      component: PageNotFound
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      component: Dashboard
    }
  ]
})
