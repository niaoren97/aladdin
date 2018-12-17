import { remove } from 'lodash'
import axios from 'axios'

// The `add product` and `
// TODO: when to communicate with server?

export default {
  namespaced: true,
  state: {
    products: [],
  },
  mutations: {
    addProduct(state, { product }) {
      if (!product.hasOwnProperty('count')) {
        product.count = 0
      }
      state.products.push(product)
    },
    removeProduct(state, payload) {
      remove(state.products, (p) => p.id === payload.id)
    },
    alterCount(state, payload) {
      const { id, diff } = payload
      const prod = state.products.find((p) => p.id === id)
      prod.count += diff
    },
  },
  actions: {},
}
