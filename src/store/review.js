import Vue from 'vue'
import axios from 'axios'

export default {
  namespaced: true,
  state: {
    reviews: {
      // 1: {
      //   id: 1,
      //   pic: '',
      //   ni: '',
      //   comment: '',
      //   picture: '',
      // },
    },
  },
  mutations: {
    addReview(state, reviews) {
      reviews.forEach((review) => {
        Vue.set(state.reviews, review.id, review)
      })
    },
  },
  actions: {
    fetchReview({ commit, rootState }) {
      const token = rootState.user.me.token
      axios
        .post(
          '/api/v1/user/review',
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          commit('addReview', res.data)
          commit('user/addReview', res.data.map((r) => r.id), { root: true })
        })
    },
  },
}
