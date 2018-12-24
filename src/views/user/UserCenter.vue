<template lang="pug">
.page
  title-bar(title="个人中心")
    template(slot="left")
        img(src="../../assets/user/message-circle.png")
    template(slot="right")
        img(src="../../assets/tabs/message.png")
        img(src="../../assets/user/cog.png")
  .content
    .header
      .top
        img.avatar(:src="me.avatar", alt="", @click="goto('UserInfo')")
        span {{me.nickname}}
      .bottom
        button.cash(@click="goCash") 账户提现
    section-block
      list
        .list-head
          span 我的订单
          span(@click="goto('OrderStatusPage')") 查看所有订单 &gt;
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
            span {{me.footprintCount || 0}}
            span 我的足迹
          .info(@click="goto('MyCoupon')")
            span {{me.couponCount || 0}}
            span 我的优惠券
          .info(@click="goto('MyReview')")
            span {{me.reviewCount || 0}}
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
.header
  height 2.4rem
  // display flex
  // justify-content space-between
  background center/cover url('https://picsum.photos/720/240'), // picsum.photos/720/240
    #fff;
  background-color #fff
  .top
    height 1.6rem
    display flex
    padding-left 0.25rem
    align-items center
    color #fff
    .avatar
      width 1rem
      height 1rem
      border-radius 50%
      margin-right 0.2rem
  .bottom
    padding-right 0.5rem
    display flex
    justify-content flex-end
    button.cash
      height 0.4rem     
      line-height 0.4rem
      border-radius 0.2rem
      background-color rgba(30,30,30,0.6)
      color #fff
.list-head
  display flex
  justify-content space-between
  padding 0.2rem
  border-bottom solid   1px lightgray

.info
  display flex
  flex-direction column
  justify-content center
  align-items center

  span:first-child
    color red
  img
    width 0.5rem
    height 0.5rem
    margin-bottom 0.1rem
</style>
