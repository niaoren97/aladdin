// this repo contains category and tags
import axios from 'axios'

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
    setTags({ state }, { cid, tags }) {
      state.categories[cid].tags = tags
    },
  },
  actions: {
    getCategories(state) {
      axios.get('/api/v1/category/all').then((res) => {
        state.categories = res.data
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
