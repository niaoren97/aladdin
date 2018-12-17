import axios from 'axios'
import {remove} from 'lodash'  
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
      const { name } = payload
      const exist = state.history.find((h) => h.name === name)
      if (!exist) {
        state.history.push(payload)
      }
    },
    removeHistory(state, payload) {
      const { name } = payload
      remove(state.history, (h) => h.name === name)
    },
    removeAllHistory(state) {
      state.history = []
    },
    addHots(state, payload /* array */) {
      state.hot = [...state.hot, ...payload]
    },
  },
  actions: {
    fetchHots({ commit }) {
      axios.get('/api/search/hots').then((res) => commit('addHots', res.data))
    },
  },
}
