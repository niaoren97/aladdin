import axios from 'axios'
import { remove } from 'lodash'

export default {
  namespaced: true,
  state: {
    name: '',
    nickname: '',
    token: '',
    loggedIn: false,
    addresses: [], // 地址
    refunds: [], // 返金
    orders: [], // 订单
    money: 0, // 余额
    lampPoints: 0, // 神灯值
    redeemPoints: 0, // 兑换积分
    coupons: [], // 卡券
    experiences: [], // 心得

    idVerified: false, // 实名认证
  },
  mutations: {
    login(state, payload) {
      Object.keys(payload).forEach((k) => {
        state[k] = payload[k]
      })
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
      state.token = ''
      state.loggedIn = false
      state.addresses = []
      state.refunds = []
      state.orders = []
      state.money = 0
      state.lampPoints = 0
      state.coupons = []
      state.experiences = []
      state.isVerified = false
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
      remove(state.coupons, (a) => a.id === id)
    },

    addExperience(state, payload) {
      state.experiences.push(payload)
    },
    removeExperience(state, payload) {
      const { id } = payload
      remove(state.experiences, (a) => a.id === id)
    },
  },
  actions: {
    login(/* {commit, state} */) {
      axios.post('/api/account/login', {}).then(() => {})
    },
    logout() {
      axios.post('/api/account/logout', {}).then(() => {})
    },
  },
}
