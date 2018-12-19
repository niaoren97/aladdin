<template lang="pug">
div
  .header
    span 订单编号 {{order.id}}
    span.status {{order.status}}
  .detail(v-if="order.items.length === 1")

  .detail.more(v-else)
    img(v-for="item in order.items", :src="item.image")

  .footer(v-if="status==='toPay'")
    .left 应付款: {{order.total}}
    .right 倒计时: {{hours}}:{{minutes}}:{{seconds}}
      button(@click="goPay(order.id)") 去付款
  .footer(v-else-if="status==='toShip'")
    p 共{{productCount}} 件商品 合计: {{order.total}}(含运费: {{postfee}})
    .actions
      button(@click="urgeOrder(order.id)") 催单
      button(@click="cancelOrder(order.id)") 取消订单
  .footer(v-else-if="status==='toConfirm'")
    .left 实付: {{order.total}}
    .right 
      button(@click="confirmOrder(order.id)") 确认收货
  .footer(v-else-if="status==='closed'")
    div 应付: {{order.total}}
  .footer(v-else-if="status==='cancelled'")
    div 应付: {{order.total}}
  .footer(v-else-if="status==='finished'")
    .left 实付: {{order.total}}
    .right 
      button(@click="writeReview(order.id)") 发表心得

</template>
<script>
import faker from 'faker'
import {fakeImage} from '@/utils'
export default {
  name: "OrderPreview",
  // props: ['order'],
  data() {
    const d = new Date()
    d.setHours(d.getHours -2)
    return {
      order: {

      id: faker.random.uuid(),
      status: faker.random.arrayElement(['toPay',
      'closed', 'finished', 'cancelled', 'toShip', 'toConfirm']),
      items: [{
        price: 20,
        image:fakeImage(120,120),
        title: faker.lorem.words(3),
        spec: '20',
        count: 1,
      }],
      total: 200,
      postfee: 2,
      createAt: d,
      },
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  },
  computed: {
    productCount() {
      return this.order.items.reduce((sum, i) => sum + i.count, 0)
    }
  },
  methods: {
    goPay(id) {

    },
    urgeOrder(id) {

    },
    cancelOrder(id) {

    },
    confirmOrder(id) {

    },
    writeReview(id) {

    }
  }
}
</script>
<style lang="stylus" scoped>
.header
  display flex
  justify-content space-around
  padding 0 0.2rem
  border-bottom solid 1px lightgray
  .status
    color red
.footer
  padding 0 0.2rem
  display flex
  justify-content space-between
  align-items center
  .left
    text-align-last left
  .right
    text-align right
</style>