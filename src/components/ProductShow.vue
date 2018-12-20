<template lang="pug">
.show
  img(:src="product.images[0]")
  .title {{product.title}}
  .price ¥ {{product.price}}
  slot
</template>
<script>
export default {
  name: "ProductShow",
  props: ['product'],

}
</script>
<style lang="stylus" scoped>
.show
  text-align center
  width 33.3333%
  img
    width 2rem
    height 2rem
    border-right solid 1px lightgray
  &:last-child > img
    border-right none
  .price
    color red
</style>
