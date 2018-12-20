<template lang="pug">
.single-page
  navigation-bar(title="全部订单")
    template(slot="right")
      span(@click="edit") 编辑
  .content
    .tabs
      .tab(:class="{active: activeTab==='all'}") 全部订单
      .tab(:class="{active: activeTab==='all'}") 待支付
      .tab(:class="{active: activeTab==='all'}") 待发货
      .tab(:class="{active: activeTab==='all'}") 待收货
      .tab(:class="{active: activeTab==='all'}") 交易关闭
      .tab(:class="{active: activeTab==='all'}") 交易完成
    .orders
      order-preview(v-for="order in filteredOrders", :key="order.id"
        :order="order")

</template>
<script>
import OrderPreview from '@/components/OrderPreview'
import { createOrder } from '@/utils'

export default {
  name: 'OrderStatusPage',
  props: ['status'],
  data() {
    return {
      orders: [],
      filter: '',
      activeTab: ''
    }
  },
  created() {
    this.activeTab = this.status || 
  },
  computed: {
    filteredOrders() {
      const ss = [
        'toPay',
        'closed',
        'finished',
        'cancelled',
        'toShip',
        'toConfirm',
      ]
      if (ss.includes(this.filter)) return this.orders.filter((o) => o.status === this.filter)
      return this.orders
    },
  },
  components: {
    OrderPreview,
  },
}
</script>
<style lang="stylus" scoped>
</style>