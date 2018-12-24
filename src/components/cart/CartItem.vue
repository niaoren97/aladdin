<template lang="pug">
.item
  check-box(:checked="item.checked", @click="toggle({id: item.id})")
  img.image(:src="product.images[0]")
  .detail
    .info
      div {{product.title}}
      div 规格: {{product.spec}}
    .action
      .price {{product.price}}
      .buttons(v-if="!editing")
        .button.inc(disabled="item.quantity <= 0" ,@click="alter({id:item.id,diff:-1})") -
        span {{item.quantity}}
        .button.dec(@click="alter({id:item.id,diff:1})") +
  .remove(@click="onRemove(item.id)", v-if="editing") 删除
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  // the item is just :
  // {product: pid, quantity: 3, checked}
  props: ['item', 'editing'],
  name: 'CartItem',
  computed: {
    ...mapState({ products: (state) => state.product.products }),
    product() {
      return this.products[this.item.product]
    },
  },
  methods: {
    ...mapMutations({
      toggle: 'cart/toggleItem',
      alter: 'cart/alterQuantity',
      remove: 'cart/removeItem',
    }),
    onRemove(id) {
      console.log(id);
      this.remove(id)
    }
  },
}
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
    flex 1
    display flex
    flex-direction column
    justify-content space-between
    align-self stretch
    .action
      display flex
      justify-content space-between
      align-items flex-end
      .price
        color #E53E43

  .remove
    background-color #E53E43
    color #fff
    width 1rem
    margin -0.2rem
    align-self stretch
    display flex
    align-items center
    justify-content center


.buttons
  width 1.6rem
  height 0.5rem
  border solid 1px lightgray
  border-radius 0.25rem
  display flex
  justify-content space-between
  align-items center
  padding 0.04rem

  .button
    border-radius 50%
    border solid 1px lightgray
    width 0.42rem
    height 0.42rem
    display flex
    justify-content center
    align-items center
    padding 0 0.2rem
</style>