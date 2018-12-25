import Vue from 'vue'
import axios from 'axios'

export default {
  namespaced: true,
  state: {
    tags: {},
  },
  mutations: {
    addTags(state, payload) {
      payload.forEach((t) => Vue.set(state.tags, t.id, t))
    },
  },
  actions: {
    fetchTags({ commit }, { cid }) {
      axios.get('/api/v1/category/tags', { cid }).then((res) => {
        const tags = res.data
        const tids = tags.map((t) => t.id)
        commit('addTags', tags)
        commit('cateogry/addTags', { cid, tags: tids }, { root: true })
      })
    },
  },
}
