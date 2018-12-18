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
        img.avatar(src="", alt="")
        span {{user.nickname}}
      .right
        button.cash(@click="goCash") 账户提现
    section-block
      list
        list-item
          span 我的订单
          span 查看所有订单
        list-item
          .info
            img(src='/static/user/to-pay.png')
            span 待支付
          .info
            img(src='/static/user/to-ship.png')
            span 待发货
          .info
            img(src='/static/user/to-confirm.png')
            span 待收货
          .info
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
          .info
            span {{user.lampPoints}}
            span 我的神灯值
          .info
            span {{user.points}}
            span 我的积分
          .info
            span {{user.couponCount}}
            span 我的优惠券
          .info
            span {{user.reviewCount}}
            span 我的心得
        list-item
          .info
            img(src="/static/user/id-verify.png")
            span 实名认证
          .info
            img(src="/static/user/address.png")
            span 收货地址
          .info
            img(src="/static/user/gongzhonghao.png")
            span 关注公众号
          .info
            img(src="/static/user/service.png")
            span 客服与反馈


</template>
<script>
export default {
  data() {
    return {user: {
      nickname: 'dd',
      lampPoints: 20,
      points: 10,
      reviewCount: 2,
      couponCount: 3,
    }}
  },
  computed: {

  },
  methods: {
    goCash() {
      // TODO:
      this.$navigator.push('')
    }
  },
}
</script>

<style lang="stylus" scoped>
.header
  height 2.4rem
  display flex
  justify-content space-between
.info
  display flex
  flex-direction column
  justify-content center
  align-items center
  span:first-child
    color red
</style>
