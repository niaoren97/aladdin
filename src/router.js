import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import Cart from './components/Cart.vue'
import ConfirmOrder from './components/ConfirmOrder.vue'
import CorderDetail from './components/CorderDetail.vue'
import CartHave from './components/CartHave.vue'
import One from './components/Duan/One.vue'
import Detail from './components/Duan/Detail.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    },
    {
      path:'/confirmorder',
      name:'confirmorder',
      component:ConfirmOrder
    },
    {
      path:'/orderdetail',
      name:'orderdetail',
      component:CorderDetail
    },
    {
      path:'/carthave',
      name:'carthave',
      component:CartHave
    },
    {
      path:'/duan',
      name:'duan',
      component:One
    },
    {
      path:'/detail',
      name:'detail',
      component:Detail
    }
  ],
})
