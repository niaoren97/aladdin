<template lang="pug">
.container
  img(:src="product.images[0]")
  .info
    .title {{product.title}}
    .spec 规格: {{product.spec}}
    div.check
      span.price ¥{{product.price}}
      span X{{quantity}}件

</template>
<script>
// for 订单确认页中的产品列表项
export default {
  name: "OrderItem",
  props: ['product', 'quantity']
}
</script>
<style lang="stylus" scoped>
.container
  background-color #fff
  padding 0.2rem
  display flex
  border-bottom solid 1px lightgray
  img 
    width 1.5rem
    height 1.5rem
    margin-right 0.4rem
  .info
    flex 1
    align-self stretch
    display flex
    flex-direction column
    .check
      width 50%
      display flex
      margin-top auto
      justify-content space-between
      color gray
      .price
        color #E53E42
        margin-top auto
</style>