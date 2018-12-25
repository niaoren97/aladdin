<template lang="pug">
.container
  .header
    check-box(:checked="allChecked", @click="toggleAll")
    span.group {{group}}
  .items
    cart-item(v-for="item in items", :key="item.id",
      :item="item", :editing="editing")
  .line
    span 商品总额
    span ¥{{totalPrice}}
  .line
    span 综合税总额
    span ¥{{totalTax}}
  .line
    span 应付总金额
    span ¥{{payPrice}}
  .line
    button.checkout(:disabled="totalQuantity<=0",@click="checkout") 结算({{totalQuantity}})
</template>
<script>
import CartItem from './CartItem'
import { mapState, mapMutations, mapActions } from 'vuex'

import _ from 'lodash'
import faker from 'faker'
function createItem(opts) {
  return {
    id: faker.random.uuid(),
    title: faker.lorem.word(),
    spec: faker.lorem.word(),
    tariff: _.random(0, 0.2, true).toFixed(4) * 100 + '%',
    price: _.random(20, 200),
    count: 1,
    checked: false,
    ...opts,
  }
}

export default {
  name: 'CartBill',
  components: {
    CartItem,
  },
  props: ['items', 'group', 'editing'],
  data() {
    return {
      // items: _.range
    }
  },
  computed: {
    allChecked() {
      return this.items.find((i) => i.checked === false) ? false : true
    },
    totalPrice() {
      return this.items.reduce(
        (sum, i) => sum + i.quantity * this.products[i.product].price,
        0
      ).toFixed(2)
    },
    totalTax() {
      return this.items.reduce(
        (sum, i) =>
          sum +
          i.quantity *
            this.products[i.product].price *
            this.products[i.product].tariff,
        0
      ).toFixed(2)
    },
    payPrice() {
      return (this.totalPrice - this.totalTax).toFixed(2)
    },
    totalQuantity() {
      return this.items.reduce((sum, i) => sum + i.quantity, 0)
    },
    ...mapState({ products: (s) => s.product.products }),
  },
  methods: {
    ...mapMutations({
      toggleItem: 'cart/toggleItem',
    }),
    getProduct(id) {},
    toggleAll() {
      this.toggleItem({
        items: this.items.map((x) => x.id),
        checked: !this.allChecked,
      })
    },
    checkout() {
      this.$navigator.push('ConfirmOrder', {group: this.group })
    },
  },
}
</script>
<style lang="stylus" scoped>
$primary = #E53E42 
.container
  margin-bottom 0.2rem
  background-color #fff

.header
  height 0.8rem
  padding 0.2rem
  display flex
  align-items center
  border-bottom solid 1px lightgray

  .group
    margin-left 0.2rem
.line
  padding 0.2rem
  padding-left 0.6rem
  border-bottom solid 1px lightgray
  display flex
  color #333
  justify-content space-between
  span:nth-child(2)
    color $primary
  .checkout
    height 0.5rem
    margin-left auto
    background-color $primary
    border-radius 0.25rem
    color #fff
    line-height 0.5rem
    padding 0 0.2rem
    border none
    outline none
    &:disabled
      background-color gray
</style>