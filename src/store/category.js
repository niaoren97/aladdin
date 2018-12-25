// this repo contains category and tags
import axios from 'axios'
import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    categories: {
      1: {
        id: 1,
        title: 'example',
        tags: [],
      },
    },
  },
  mutations: {
    addTags(state, { cid, tags }) {
      Vue.set(state.categories[cid], 'tags', tags)
      // state.categories[cid].tags = tags
    },
    addCateogries(state, payload) {
      payload.forEach((cat) => {
        Vue.set(state.categories, cat.id, cat)
      })
    },
  },
  actions: {
    fetchCategories({ commit }) {
      axios.get('/api/v1/category/all').then((res) => {
        // state.categories = res.data
        commit('cateogry/addTags', res.data, {root: true})
      })
    },
    /**
     * get all tags in a category
     * @param {*} param0
     * @param {*} payload
     */
    getTags({ state }, cid) {
      if (
        state.categories[cid].tags.length === 0 ||
        typeof state.categories[cid].tags[0] === 'string'
      ) {
        axios
          .get('/api/v1/category/tags', { cid })
          .then((res) => (state.categories[cid].tags = res.data))
      }
    },
  },
}
