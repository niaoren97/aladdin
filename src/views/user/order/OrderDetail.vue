<template lang="pug">
.single-page
  navigation-bar(title="订单详情")
  .content
    .status
      span {{order.status}}
      section-block
        p {{order.address.reciever}}  {{order.address.phone}}
        p {{fullAddress}}
      section-block
        h3 实名信息
        p {{order.identity.name}} {{order.identity.number}}
        div
          img(:src="order.identity.portrait")
          img(:src="order.identity.back")
      section-block
        h2 TODO
</template>
<script>
import {createAddress,createIdentity, createOrder} from '@/utils'

export default {
  name: "OrderDetail",
  data() {
    return {
      order: {
        address: createAddress(),
        identity: createIdentity(),
      }
    }
  },
  computed: {
    fullAddress() {
      const a = this.order.address
      return `${a.province}${a.detail} ${a.zipCode}`
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>