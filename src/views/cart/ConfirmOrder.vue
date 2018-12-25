<template lang="pug">
.single-page
  navigation-bar(title="确认订单")
  .content
    .hint
      | 海关要求
      | Ipsum quia illum dignissimos. Ea maxime consequuntur rem quia eos consequatur. Rerum voluptas assumenda ad facilis quos consequatur ducimus quo.
    .top(v-if="!address")
      .rb
      .address
        img(@click='push()', src='../../assets/cart-img/add.png', alt='')
        span 添加收货地址
      .rb
    .address(v-else)
      .left
        div {{address.receiver}}
        span {{address.phone}}
        div {{fullAddress}}
      .right
        button(@click="editAddress") 修改地址
    .header 海外直邮订单
    .products(v-if="showMore")
      order-item(v-for="i in groupItems", :key="i.id", :product="findProduct(i.product)",
        :quantity="i.quantity")
    order-item(v-else, :product="findProduct(groupItems[0].product)", :quantity="groupItems[0].quantity")
    .line.bar(@click="toggleMore")
      span(v-if="showMore") ↑收起
      span(v-else) 
        span(v-if="totalQuantity <=1") 共{{totalQuantity}}件
        span(v-else) ↓ 展开(共{{totalQuantity}}件)
    .line 
      span 商品金额
      span {{price}}
    .line
      span 订单邮费
      span {{postFee}}
    .line 
      span 关税
      span {{tax}}
    .line 
      span 订单金额
      span {{totalPrice}}
    .line.warn
      span.alert 安全提醒
      span Nesciunt ducimus dolor eum sapiente sequi eos.
    .line.block
      span 配送方式
      span {{group}}
    .line
      span 共{{totalQuantity}}件商品
      span 应付: ¥{{totalPrice}}
    .line.agree
      check-box(:checked="agreed", @click="agreed = !agreed")
      | 本人同意...      
    button.confirm(:disabled="!agreed") 确认
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ProductPreview from '@/components/ProductPreview'
import OrderItem from '@/components/cart/OrderItem'
String.prototype.toFloat = function() {
  return parseFloat(this)
}
export default {
  name: 'ConfirmOrder',
  props: ['group'],
  data() {
    return {
      agreed: true,
      showMore: false,
    }
  },
  components: {
    ProductPreview,
    OrderItem,
  },
  methods: {
    toggleMore(){
      this.showMore = !this.showMore
    },
    push() {
      this.$navigator.push('AddAddress')
    },
    findProduct(id) {
      return this.products[id]
    },
    editAddress() {},
  },
  computed: {
    ...mapState({
      addresses: (s) => s.address.addresses,
      products: (s) => s.product.products,
      items: (s) => s.cart.items,
    }),
    price() {
      return this.groupItems
        .reduce(
          (sum, i) => sum + this.products[i.product].price * i.quantity,
          0
        )
        .toFixed(2)
        .toFloat()
    },
    postFee() {
      return this.groupItems
        .reduce((sum, i) => sum + this.products[i.product].postage, 0)
        .toFixed(2)
        .toFloat()
    },
    tax() {
      return this.groupItems
        .reduce((sum, i) => {
          const p = this.products[i.product]
          return sum + p.price * p.tariff
        }, 0)
        .toFixed(2)
        .toFloat()
    },
    totalPrice() {
      return (this.price + this.postFee + this.tax).toFixed(2).toFloat()
    },
    totalQuantity() {
      return this.groupItems.reduce((sum, i) => sum + i.quantity, 0)
    },
    groupItems() {
      return Object.values(this.items).filter(
        (i) => this.products[i.product].country === this.group && i.checked
      )
    },
    address() {
      return Object.values(this.addresses).find((a) => a.isDefault)
    },
    fullAddress() {
      const a = this.address
      return `${a.province}${a.area}${a.county}${a.detail}; 邮编:${a.zipCode}`
    },
  },
}
</script>

<style scoped lang='stylus'>
$primary = #E03C41

.hint
  background-color gray
  padding 0.2rem
  color #fff

.address
  display flex
  justify-content space-between
  // background linear-gradient( #E53E42 0%, white 40%, #38A2EC 60%)
  border solid 10px
  border-image repeating-linear-gradient(45deg, #E53E42 0, #E53E42 10px, white 10px, white 14px, #38A2EC 14px, #38A2EC 24px, white 24px, white 28px) 10 / 10px 0 round
  background white
  margin 0.2rem 0
  padding 0.2rem 0

.line
  height 0.8rem
  background #fff
  display flex
  justify-content space-between
  padding 0.2rem
  border-bottom solid 1px lightgray
  span:nth-child(2)
    color $primary
.bar
  margin-bottom 0.2rem
  span
    margin auto
.block
  margin 0.2rem 0
.top
  border-top 0.1rem solid #f2f2f2

.top .rb
  width 100%
  height 0.1rem
  background-image url('../../assets/cart-img/r&b.png')

.top .address
  background-color #fff
  display flex
  justify-content left
  align-items center
  padding 0.2rem

.address img
  width 0.5rem
  margin 0 0.3rem

.starts
  width 100%
  height 0.1rem
  background-image url('../../assets/cart-img/starts.png')
.agree
  justify-content center
.confirm
  display block
  border none
  outline none
  height 0.5rem
  width 80vw
  margin 0.2rem auto
  background-color $primary
  border-radius 0.25rem
  color #fff
  &:disabled
    background-color gray
</style>




