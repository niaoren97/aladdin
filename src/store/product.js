import Vue from 'vue'
import axios from 'axios'
// import _ from 'lodash'

// the products should be an object with:
// {id: product}
// products contains all the products details,
// so it is an normlized record store.
// X---And other groups only contain product id.--

export default {
  namespaced: true,
  state: {
    products: {},

  },
  mutations: {
    addProduct(state, product) {
      Vue.set(state.products, product.id, product)
    },
  },
  actions: {
    getCategory({commit}, payload) {
      axios.get(`/api/v1/product/category`)
    },
    getProduct({ commit }, payload) {
      const { id } = payload
      axios.get(`/api/v1/product/byid`, { id }).then((res) => {
        const { data } = res
        commit('addProduct', data)
      })
    },
  },
}
