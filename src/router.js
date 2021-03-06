import Vue from 'vue'
import Router from 'vue-router'
import RootPage from './views/RootPage.vue'
import HomePage from './views/HomePage.vue'
import CategoryPage from './views/category/CategoryPage.vue'
import StockPage from './views/StockPage.vue'
import CartPage from './views/CartPage.vue'
import UserCenter from './views/user/UserCenter'

import Cart from '@/views/cart/Cart.vue'
import ConfirmOrder from '@/views/cart/ConfirmOrder.vue'
import CorderDetail from '@/views/cart/CorderDetail.vue'
import CartHave from '@/views/cart/CartHave.vue'
import StockHome from '@/views/stock/StockHome.vue'
import StockProductDetail from '@/views/stock/StockProductDetail.vue'
import BrandDetail from '@/views/stock/BrandDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: RootPage,
      children: [
        { path: 'home', component: HomePage },
        { path: 'category', component: CategoryPage },
        { path: 'stock', component: StockPage },
        { path: 'cart', component: CartPage },
        { path: 'user', component: UserCenter },
      ],
    },
  ],
})
