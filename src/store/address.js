import axios from 'axios'
import Vue from 'vue'
import { createAddress, http } from '@/utils'
// const addr = createAddress()
// const addr2 = createAddress({ isDefault: true })

export default {
  namespaced: true,
  state: {
    addresses: {
      // [addr.id]: addr,
      // [addr2.id]: addr2,
    },
  },
  mutations: {
    addAddress(state, addr) {
      if ('length' in addr) {
        addr.forEach((a) => Vue.set(state.addresses, a.id, a))
      } else Vue.set(state.addresses, addr.id, addr)
    },
  },
  actions: {
    fetchAddresses({ rootState, commit }) {
      http
        .withToken(rootState)
        .post('/api/v1/user/address')
        .then((res) => {
          commit('addAddress', res.data)
        })
    },
    addAddress({ commit, rootState }, { address, cb }) {
      axios
        .post(
          '/api/v1/user/address/create',
          { address },
          {
            headers: {
              Authorization: `Bearer ${rootState.user.me.token}`,
            },
          }
        )
        .then((res) => {
          cb()
          commit('addAddress', res.data)
        })
    },
  },
}
