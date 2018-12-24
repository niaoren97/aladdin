import Vue from 'vue'
import Vuex from 'vuex'
import AddressModule from './address'
import AppModule from './app'
import CartModule from './cart'
import CateogryModule from './category'
import OrderModule from './order'
import ProductModule from './product'
import ReviewModule from './review'
import SearchModule from './search'
import UserModule from './user'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    address: AddressModule,
    app: AppModule,
    cart: CartModule,
    category: CateogryModule,
    order: OrderModule,
    product: ProductModule,
    review: ReviewModule,
    search: SearchModule,
    user: UserModule,
  },
  state: {},
  mutations: {},
  actions: {},
})
