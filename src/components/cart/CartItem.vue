<template lang="pug">
.item
  check-box(:checked="item.checked", @click="toggle({id: product.id})")
  img.image(:src="product.images[0]")
  .detail
    .info
      span {{product.title}}
      span 规格: {{product.spec}}
    .action
      .price {{product.price}}
      .buttons(v-if="!editing")
        .inc(disabled="item.quantity <= 0" ,@click="alter({id:product.id,diff:-1})") -
        span {{item.quantity}}
        .dec(@click="alter({id:product.id,diff:1})") +
  .remove(@click="remove(product.id)", v-if="editing") 删除
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  // the item is just :
  // {product: pid, quantity: 3, checked}
  props: ["item", "editing"],
  name: "CartItem",
  computed: {
    ...mapState({products: (state) => state.product.products}),
    product() {
      return this.products[this.item.product]
    }
  },
  methods: {
    ...mapMutations({
      toggle: 'cart/toggleProduct',
      alter: 'cart/alterQuantity',
      remove: 'cart/removeProduct',
    })
  }
};
</script>
<style lang="stylus" scoped>
.item
  padding 0.2rem
  display flex
  align-items center
  border-bottom solid 1px lightgray
  img
    margin-left 0.2rem
    width 1.2rem
    height 1.2rem
  .detail
    .action
      display flex
      justify-content space-between
      .price
        color #E53E43
  .remove
    background-color #E53E43
    color #fff
    height 100%
    width 1rem
</style>