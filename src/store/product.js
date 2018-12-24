import Vue from 'vue'
import axios from 'axios'
import _ from 'lodash'
import { createProduct } from '@/utils'

// the products should be an object with:
// {id: product}
// products contains all the products details,
// so it is an normlized record store.
// X---And other groups only contain product id.--
const ps = _.range(10)
  .map((x) => {
    return createProduct({ id: x })
  })
  .reduce((p, x) => {
    p[x.id] = x
    return p
  }, {})
export default {
  namespaced: true,
  state: {
    // products: {},
    products: ps,
  },
  mutations: {
    addProduct(state, product) {
      Vue.set(state.products, product.id, product)
    },
  },
  actions: {
    getCategory({ commit }, payload) {
      axios.get('/api/v1/product/category')
    },
    getProduct({ commit }, payload) {
      const { id } = payload
      axios.get('/api/v1/product/byid', { id }).then((res) => {
        const { data } = res
        commit('addProduct', data)
      })
    },
  },
}
