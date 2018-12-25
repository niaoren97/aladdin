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
        // const 
        Vue.set(state.orders, payload.id, payload)
      }
    },
  },
  actions: {
    createOrder({ commit, rootState }, { items, cb }) {
      axios
        .post(
          '/api/v1/order/create',
          { items },
          {
            headers: {
              Authorization: `Bearer ${rootState.user.me.token}`,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            // order should populate order-items
            const order = res.data
            commit('addOrders', order)
            commit('orderItem/addItems', order.items ,{root: true})
            cb(order.id)
          }
        })
    },
  },
}
