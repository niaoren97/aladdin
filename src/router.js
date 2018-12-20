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

import OneClassifyTow from './views/classify/OneClassifyTow'
import Mianbuhuli from './views/classify/Mianbuhuli'
import Tab1 from './views/classify/Tab1'
import TJCKGD from './views/classify/TJCKGD'
import Aabb from './components/Aabb'
import FenLeisx from './views/classify/FenLeisx'

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
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/confirmorder',
      name: 'confirmorder',
      component: ConfirmOrder,
    },
    {
      path: '/orderdetail',
      name: 'orderdetail',
      component: CorderDetail,
    },
    {
      path: '/carthave',
      name: 'carthave',
      component: CartHave,
    },
    {
      path: '/duan',
      name: 'duan',
      component: StockHome,
    },
    {
      path: '/detail',
      name: 'detail',
      component: StockProductDetail,
    },
    {
      path: '/oneclassifytow',
      redirect: '/tab1',
      name: 'OneClassifyTow',
      component: OneClassifyTow,
      children: [
        {
          path: '/tab1',
          name: 'Tab1',
          component: Tab1,
        },
        {
          path: '/mianbuhuli',
          name: 'Mianbuhuli',
          component: Mianbuhuli,
        },
      ],
    },
    {
      path: '/tjckgd',
      name: 'TJCKGD',
      component: TJCKGD,
      children: [
        {
          path: 'fenleisx',
          name: 'FenLeisx',
          component: FenLeisx,
        },
      ],
    },
    {
      path: '/aabb',
      name: 'Aabb',
      component: Aabb,
    },
    {
      path: '/brand',
      name: 'brand',
      component: BrandDetail,
    },
  ],
})
