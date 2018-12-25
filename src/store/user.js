import axios from 'axios'
import { remove } from 'lodash'
const dfs = {
  name: '',
  nickname: '',
  token: '',
  addresses: [], // 地址
  refunds: [], // 返金
  orders: [], // 订单
  money: 0, // 余额
  lampPoints: 0, // 神灯值
  redeemPoints: 0, // 兑换积分
  coupons: [], // 卡券
  reviews: [], // 心得
  messages: [],
  idVerified: false, // 实名认证
}
export default {
  namespaced: true,
  state: {
    authing: false,
    authMessage: {},
    loggedIn: false,
    registerSuccess: false,
    me: {
      name: '',
      nickname: '',
      token: '',
      addresses: [], // 地址
      refunds: [], // 返金
      orders: [], // 订单
      money: 0, // 余额
      lampPoints: 0, // 神灯值
      redeemPoints: 0, // 兑换积分
      coupons: [], // 卡券
      reviews: [], // 心得
      messages: [],
      idVerified: false, // 实名认证
    },
  },
  mutations: {
    login(state, payload) {
      Object.keys(payload).forEach((k) => {
        state.me[k] = payload[k]
      })
      state.loggedIn = true
      // const {
      //   token,
      //   name,
      //   nickname,
      //   lampPoints,
      //   points,
      //   couponCount,
      //   experienceCount,
      //   addressCount,
      //   orders,
      // } = payload
      // state.name = name;
      // state.loggedIn = true;
      // state.nickname = nickname;
      // state.token = token;
      // state.lampPoints = lampPoints;
      // state.couponCount = couponCount;
      // state.experienceCount = experienceCount;
      // state.points
    },
    logout(state) {
      state.loggedIn = false
      Object.keys(state.me).forEach((k) => (state.me[k] = dfs[k]))
    },
    addOrders(state, payload) {
      if ('length' in payload) {
        payload.forEach((o) => state.orders.unshift(o))
      } else {
        state.orders.unshift(payload)
      }
    },
    addAddress(state, payload) {
      state.addAddress.push(payload)
    },
    /**
     * An address lives in Address table,
     * so also has an ID
     * @param {*} state
     * @param {*} payload
     */
    removeAddress(state, payload) {
      remove(state.addresses, (a) => a.id === payload.id)
    },
    alterPoints(state, payload) {
      const { diff } = payload
      state.points += diff
    },

    alterLampPoints(state, payload) {
      const { diff } = payload
      state.lampPoints += diff
    },

    alterMoney(state, payload) {
      const { diff } = payload
      state.money += diff
    },
    addCoupon(state, payload) {
      state.coupons.push(payload)
    },
    removeCoupon(state, payload) {
      const { id } = payload
      remove(state.me.coupons, (a) => a.id === id)
    },

    addReview(state, payload) {
      payload.forEach((id) => {
        if (!state.me.reviews.includes(id)) {
          state.me.reviews.push(id)
        }
      })
    },
    removeReview(state, payload) {
      const { id } = payload
      remove(state.me.reviews, (a) => a.id === id)
    },
    updateProfile(state, { field, value }) {
      state.me[field] = value
    },
  },
  actions: {
    login({ commit, state }, { name, password }) {
      state.authing = true
      axios
        .post('/api/v1/user/login', {
          name,
          password,
        })
        .then((res) => {
          state.authing = false
          if (res.error) {
            state.authMessage = res.message
          } else {
            commit('login', res.data)
          }
        })
    },
    logout() {
      axios.post('/api/v1/user/logout', {}).then(({ commit }) => {
        commit('logout')
      })
    },
    register({ state }, { name, password }) {
      axios.post('/api/v1/user/register', { name, password }).then(() => {
        state.registerSuccess = true
      })
    },
    fetchMessages({ state }) {
      axios
        .get('/api/v1/user/message', {
          headers: { Authorization: `Bearer ${state.me.token}` },
        })
        .then((res) => (state.me.messages = res.data))
    },
    updateProfile({ commit, state }, { field, value }) {
      commit('updateProfile', { field, value })
      const oldValue = state.me[field]
      axios
        .post('/api/v1/user/update', { field, value, token: state.me.token })
        .then((res) => {
          if (res.status !== 200) {
            // revert back
            commit('updateProfile', { field, value: oldValue })
          } else {
            // TODO: ???
          }
        })
    },
    fetchOrders({ state, commit }) {
      axios
        .post('/api/v1/user/order', { token: state.me.token })
        .then((res) => {
          commit('order/addOrders', res.data, { root: true })
          state.me.orders = res.data.map((x) => x.id)
        })
    },
  },
}
