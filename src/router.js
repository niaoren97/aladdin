import Vue from 'vue'
import Router from 'vue-router'
import RootPage from './views/RootPage.vue'
import HomePage from './views/HomePage.vue'
import CategoryPage from './views/CategoryPage.vue'
import StockPage from './views/StockPage.vue'
import CartPage from './views/CartPage.vue'
import UserCenter from './views/user/UserCenter'

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
