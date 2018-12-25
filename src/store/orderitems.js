import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    items: {},
  },
  mutations: {
    addItems(state, items) {
      items.forEach((i) => Vue.set(state.items, i.id, i))
    },
  },
}
