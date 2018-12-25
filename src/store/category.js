// this repo contains category and tags
import axios from 'axios'
import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    categories: {
      // 1: {
      //   id: 1,
      //   title: 'example',
      //   tags: [],
      // },
    },
  },
  mutations: {
    addTags(state, { cid, tags }) {
      Vue.set(state.categories[cid], 'tags', tags)
      // state.categories[cid].tags = tags
    },
    addCategories(state, payload) {
      payload.forEach((cat) => {
        Vue.set(state.categories, cat.id, { tags: [], ...cat })
      })
    },
  },
  actions: {
    fetchCategories({ commit }) {
      axios.get('/api/v1/category/all').then((res) => {
        // state.categories = res.data
        commit('addCategories', res.data)
      })
    },
    /**
     * get all tags in a category
     * @param {*} param0
     * @param {*} payload
     */
    fetchTags({ state, commit }, cid) {
      if (
        state.categories[cid].tags.length === 0 ||
        typeof state.categories[cid].tags[0] === 'string'
      ) {
        axios.get('/api/v1/category/tags', { params: { cid } }).then((res) => {
          // the tags should only contain tag id.
          // (state.categories[cid].tags = res.data)
          state.categories[cid].tags = res.data.map((t) => t.id)
          commit('tag/addTags', res.data, { root: true })
        })
      }
    },
  },
}
