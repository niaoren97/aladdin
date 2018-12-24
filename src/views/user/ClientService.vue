<template lang="pug">
.single-page  
  navigation-bar(title="客服与反馈")
    template(slot="right")
      navigation-item
        span(@click="feedback") 反馈
  .content
    .warn
      | 安全提醒:
    .call
      span 联系客服
      span 工作时间: 
        span.alert 9:00 ~ 24:00
    item(title="订单咨询", subtitle="订单修改,订单查询,取消订单",
      @click="goto('OrderService')")
    item(title="物流咨询", subtitle="物流信息查询, 催物流",
      @click="goto('ExpressService')")
    item(title="售后咨询", subtitle="商品质疑,退换货,投诉与建议",
      @click="goto('OrderService')")
    item(title="其他咨询", @click="goto('OtherAdvisory')")
    .call 常见问题
    span TODO

</template>
<script>
import Item from './Item.vue'
export default {
  name: 'ClientService',
  methods: {
    feedback() {
      this.$navigator.push()
    },
    goto(cid) {
      this.$navigator.push(cid)
    }
  },
  components: {
    Item,
  }
}
</script>

<style lang="stylus" scoped>
.warn
  padding 0.2rem
  background #F9D3D4
  height 60px
.call 
  display flex
  justify-content space-around
  .alert
    color red
</style>

