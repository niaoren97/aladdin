import Vue from 'vue'
import Vuex from 'vuex'
import CartModule from './cart'
import SearchModule from './search'
import UserModule from './user'
import AppModule from './app'
import CateogryModule from './category'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart: CartModule,
    user: UserModule,
    search: SearchModule,
    app: AppModule,
    category: CateogryModule,
  },
  state: {},
  mutations: {},
  actions: {},
})
