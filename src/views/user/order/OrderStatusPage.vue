<template lang="pug">
.single-page
  navigation-bar(title="全部订单")
    template(slot="right")
      span(@click="edit") 编辑
  .content
    .tabs
      .tab(@click="setFilter('all')", :class="{active: filter==='all'}") 全部订单
      .tab(@click="setFilter('toPay')", :class="{active: filter==='toPay'}") 待支付
      .tab(@click="setFilter('toShip')", :class="{active: filter==='toShip'}") 待发货
      .tab(@click="setFilter('toConfirm')", :class="{active: filter==='toConfirm'}") 待收货
      .tab(@click="setFilter('closed')", :class="{active: filter==='closed'}") 交易关闭
      .tab(:@click="setFilter('finished')", class="{active: filter==='finished'}") 交易完成
    .orders
      order-preview(v-for="order in filteredOrders", :key="order.id"
        :order="order")

</template>
<script>
import OrderPreview from '@/components/OrderPreview'
import { createOrder } from '@/utils'
import {range} from 'lodash'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'OrderStatusPage',
  props: ['status'],
  data() {
    return {
      // orders: range(0,10).map(() => createOrder()),
      filter: '',
      activeTab: ''
    }
  },
  created() {
    this.filter = this.status || 'all'
    if(this.orders.lenght === 0) {
      this.fetchOrders()
    }
  },
  computed: {
    orders() {
      return this.$store.state.order.orders
    },
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
  methods: {
    setStatus(s) {
      this.filter = s
    },
    ...mapActions({fetchOrders: 'user/fetchOrders'})
  }
}
</script>
<style lang="stylus" scoped>
</style>