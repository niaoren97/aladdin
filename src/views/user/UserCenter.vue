<template lang="pug">
.page
  title-bar(title="个人中心")
    template(slot="left")
      navigation-bar-item
        img(src="../../assets/user/message-circle.png")
    template(slot="right")
      navigation-bar-item
        img(src="../../assets/tabs/message.png")
      navigation-bar-item
        img(src="../../assets/user/cog.png")
  .content
    .header
      .left
        img.avatar(:src="me.avatar", alt="")
        span {{me.nickname}}
      .right
        button.cash(@click="goCash") 账户提现
    section-block
      list
        list-item
          span 我的订单
          span(@click="goto('OrderStatusPage')") 查看所有订单
        list-item
          .info(@click="goto('OrderStatusPage', {status: 'toPay'})")
            img(src='/static/user/to-pay.png')
            span 待支付
          .info(@click="goto('OrderStatusPage', {status: 'toShip'})")
            img(src='/static/user/to-ship.png')
            span 待发货
          .info(@click="goto('OrderStatusPage', {status: 'toConfirm'})")
            img(src='/static/user/to-confirm.png')
            span 待收货
          .info(@click="goto('OrderStatusPage', {status: 'finished'})")
            img(src='/static/user/finished.png')
            span 已完成
    section-block
      list
        list-item
          span 我的返金
          span TODO
    section-block
      list
        list-item
          .info(@click="goto('MyLamp')")
            span {{me.lampPoints}}
            span 我的神灯值
          .info(@click="goto('Footprint')")
            span {{me.footprintCount}}
            span 我的足迹
          .info(@click="goto('MyCoupon')")
            span {{me.couponCount}}
            span 我的优惠券
          .info(@click="goto('MyReview')")
            span {{me.reviewCount}}
            span 我的心得
        list-item
          .info(@click="goto('MyIdentity')")
            img(src="/static/user/id-verify.png")
            span 实名认证
          .info(@click="goto('MyAddress')")
            img(src="/static/user/address.png")
            span 收货地址
          .info(@click="followMe")
            img(src="/static/user/gongzhonghao.png")
            span 关注公众号
          .info
            img(@click="goto('ClientService')",src="/static/user/service.png")
            span 客服与反馈


</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      // showLogin: false
    }
  },
  computed: {
    ...mapState({
      authing: (state) => state.user.authing,
      loggedIn: (state) => state.user.loggedIn,
      authMessage: (state) => state.user.authMessage,
      me: (state) => state.user.me,
      tab(state) {
        const tab = state.app.tab
        // README: 我们需要在用户切换到 用户中心 页面时,检查用户当前是否登录,
        // 由于此组件一直存在(keep-alive), 所以不能再 created 生命周期里判断,
        // 利用 state.app 中的 tab 来判断是否切换到当前页.
        return tab
      },
    }),
  },
  created() {
    this.onAppear()
  },
  watch: {
    tab(n, o) {
      this.onAppear()
    },
    loggedIn(n,o) {
      if(n === true && this.tab === 4) {
        // this.showLogin = false
        this.$navigator.pop()
      }
    }
  },
  methods: {
    goCash() {
      // TODO:
      this.$navigator.push('')
    },
    onAppear(){
      console.log('tab in user center: ', this.tab);
      
      if (this.tab === 4 && !this.loggedIn ) {
        this.$navigator.push('LoginOrRegister', {}, false)
        // this.showLogin = true
      }

    },
    goto(cid) {
      this.$navigator.push(cid)
    },
    followMe() {
      console.log('follow me')
    },
  },
}
</script>

<style lang="stylus" scoped>
.hidden
  display none

.header
  height 2.4rem
  display flex
  justify-content space-between
  background-image cover url('https://picsum.photos/720/240') // picsum.photos/720/240)
  background-color #fff
  // .left

.info
  display flex
  flex-direction column
  justify-content center
  align-items center

  span:first-child
    color red
</style>
