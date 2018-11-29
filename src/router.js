import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home/Home.vue'
import Classify from './pages/Classify/Classify.vue'
import ShopCar from './pages/ShopCar/ShopCar.vue'
import User from './pages/User/User.vue'
import ProDetails from './pages/ProDetails/ProDetails.vue'
import Payment from './pages/Payment/Payment.vue'

 
import SearchPage from './pages/SearchPage.vue'
import login from './pages/login.vue'
import register from './pages/register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/ShopCar',
      name: 'ShopCar',
      component: ShopCar
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/ProDetails',
	  name: 'ProDetails',
	  component: ProDetails
    },
    {
      path: '/Payment',
	  name: 'Payment',
	  component: Payment
    },
    {
      path: '/SearchPage',
      name: 'SearchPage',
      component: SearchPage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
