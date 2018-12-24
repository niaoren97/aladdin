import axios from 'axios'
import Vue from 'vue'

export default{
  namespaced:true,
  state:{
    addresses:{
      1:{
        id:1,
        sheng:'',
        shi:'',
        xian:''
      }
    }
  },
  mutations:{             
    addAddress(state,address) {
      Vue.set(state.addresses, address.id, address)
    }
  },
  actions:{
    addAddress({ commit,rootState },address){
     axios.post('/api/v1/user/address/creat',{address},{headers:{Authorization:`Bearer ${rootState.user.me.token}`
    }}).then(res => {
      commit('addAddress', res.data)
    })
    }
  }
}