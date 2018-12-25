import axios from 'axios'
import Vue from 'vue'
import { createAddress } from '@/utils'
const addr = createAddress()
const addr2 = createAddress({ isDefault: true })

export default {
  namespaced: true,
  state: {
    addresses: {
      [addr.id]: addr,
      [addr2.id]: addr2,
    },
  },
  mutations: {
    addAddress(state, addr) {
      Vue.set(state.addresses, addr.id, addr)
    },
  },
  actions: {
    addAddress({ dispatch, commit, rootState }, address) {
      axios.post('/api/v1/address/create', { address })
    },
  },
}
