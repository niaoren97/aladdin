import Vue from 'vue'
import _, { remove } from 'lodash'
import axios from 'axios'

// The `add product` and `
// TODO: when to communicate with server?
// the product only has {product, quantity}
export default {
  namespaced: true,
  state: {
    items: {
      1: {
        id: 1,
        product: 0,
        quantity: 1,
        checked: true,
      },
      2: {
        id: 2,
        product: 1,
        quantity: 3,
        checked: false,
      },
      3: {
        id: 3,
        product: 2,
        quantity: 1,
        checked: true,
      },
      4: {
        id: 4,
        product: 3,
        quantity: 1,
        checked: true,
      },
      5: {
        id: 5,
        product: 4,
        quantity: 2,
        checked: true,
      },
    },
  },
  mutations: {
    /**
     * this should generate a new item ,
     * when add a product into cart.
     * @param {*} state
     * @param {*} param1
     */
    addItem(state, { id, quantity }) {
      state.items.push({ product: id, quantity, checked: true })
    },
    removeItem(state, id) {
      // remove(state.items, (item) => item.product === id)
      Vue.delete(state.items, id)
    },
    toggleItem(state, payload) {
      if (payload.items) {
        // {items, checked}
        let { items, checked } = payload
        if (_.isUndefined(checked)) {
          items.forEach(
            (i) => (state.items[i].checked = !state.items[i].checked)
          )
        } else {
          items.forEach((i) => (state.items[i].checked = checked))
        }
      } else {
        let { id, checked } = payload
        if (_.isUndefined(checked)) {
          state.items[id].checked = !state.items[id].checked
        } else {
          state.items[id].checked = checked
        }
      }
    },
    alterQuantity(state, payload) {
      const { id, diff } = payload
      const item = state.items[id]
      if (item.quantity === 0 && diff < 0) return
      item.quantity += diff
      if (item.quantity < 0) item.quantity = 0
    },
  },
  actions: {
    addProduct({ commit, rootState }, payload) {
      if (rootState.user.token) {
        const { id } = payload
        const uid = rootState.user.id
        axios.post(`/api/v1/user/${uid}/cart/add`, { id }).then((res) => {
          const { data } = res
          commit('addProduct', data)
        })
      }
    },
  },
}
