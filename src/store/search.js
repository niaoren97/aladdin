import axios from 'axios'
import { remove } from 'lodash'
// history item has such interface
// - name: String
// - date: Date

export default {
  namespaced: true,
  state: {
    history: [],
    hot: [],
  },
  mutations: {
    addHistory(state, payload) {
      // const { name } = payload
      const exist = state.history.indexOf(payload)
      if (!exist) {
        state.history.push(payload)
      }
    },
    clearHistory(state) {
      state.history = []
    },
    removeHistory(state, payload) {
      const { name } = payload
      remove(state.history, (h) => h.name === name)
    },
    removeAllHistory(state) {
      state.history = []
    },
    addHots(state, payload /* array */) {
      state.hot = payload //[...state.hot, ...payload]
    },
  },
  actions: {
    fetchHots({ commit }) {
      axios
        .get('/api/v1/search/hots')
        .then((res) => commit('addHots', res.data))
    },
  },
}
