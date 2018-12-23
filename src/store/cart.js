import { remove } from "lodash";
import axios from "axios";

// The `add product` and `
// TODO: when to communicate with server?
// the product only has {id, count}
export default {
  namespaced: true,
  state: {
    items: []
  },
  mutations: {
    addProduct(state, { id, quantity }) {
      state.items.push({ product: id, quantity, checked: true });
    },
    removeProduct(state, id) {
      remove(state.items, item => item.product === id);
    },
    toggleProduct(state, { id, checked }) {
      const item = state.items.find(i => i.product === id);
      if (checked === undefined) {
        item.checked = !item.checked;
      } else {
        item.checked = checked;
      }
    },
    alterQuantity(state, payload) {
      const { id, diff } = payload;
      const prod = state.items.find(p => p.product === id);
      if (prod.quantity === 0 && diff < 0) return;
      prod.quantity += diff;
      if (prod.quantity < 0) prod.quantity = 0;
    }
  },
  actions: {
    addProduct({ commit, state, rootState }, payload) {
      if (rootState.user.token) {
        const { id } = payload;
        const uid = rootState.user.id;
        axios.post(`/api/v1/user/${uid}/cart/add`, { id }).then(res => {
          const { data } = res;
          commit("addProduct");
        });
      }
    }
  }
};
