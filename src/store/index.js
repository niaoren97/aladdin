import Vue from 'vue';
import Vuex from 'vuex';
import CartModule from './cart';
import SearchModule from './search';
import UserModule from './user';


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart: CartModule,
    user: UserModule,
    search: SearchModule,
  },
  state: {},
  mutations: {},
  actions: {},
})
