import axios from 'axios'
import Vue from 'vue'

export default {
  state: {
    orders: {},
  },
  mutations: {
    addOrders(state, payload) {
      if ('length' in payload) {
        payload.forEach((order) => Vue.set(state.orders, order.id, order))
      } else {
        Vue.set(state.orders, payload.id, payload)
      }
    },
  },
  actions: {},
}
