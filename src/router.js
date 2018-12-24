import Vue from 'vue'
import Router from 'vue-router'
import RootPage from './views/RootPage.vue'
import HomePage from './views/HomePage.vue'
import CategoryPage from './views/CategoryPage.vue'
import UserCenter from './views/user/UserCenter'

import Cart from '@/views/cart/Cart.vue'
import StockHome from '@/views/stock/StockHome.vue'

// 测试路由接口
import order from '@/views/cart/ConfirmOrder.vue'

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
        { path: 'stock', component: StockHome },
        { path: 'cart', component: Cart },
        { path: 'user', component: UserCenter },
      ],
    },
    {
    path:'/o',
      component:order
    }

  ],
})
