import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import Cart from '@/views/cart/Cart.vue'
import ConfirmOrder from '@/views/cart/ConfirmOrder.vue'
import CorderDetail from '@/views/cart/CorderDetail.vue'
import CartHave from '@/views/cart/CartHave.vue'
import StockHome from '@/views/stock/StockHome.vue'
import StockProductDetail from '@/views/stock/StockProductDetail.vue'


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
      component:StockHome
    },
    {
      path:'/detail',
      name:'detail',
      component:StockProductDetail
    }
  ],
})
