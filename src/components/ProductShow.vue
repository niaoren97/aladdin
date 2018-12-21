<template lang="pug">
//- .show
//-   img(:src="product.images[0]")
//-   .title {{product.title}}
//-   .price ¥ {{product.price}}
//-   slot
.show(:class="cls")
  .decoration
    slot(name="decoration")
  img(:src="product.images[0]")
  .title {{product.title}}
  .price ¥ {{product.price}}
  slot

</template>
<script>
export default {
  name: 'ProductShow',
  props: ['product', 'cols'],
  computed: {
    cls() {
      const clss = { 2: 'double', 3: 'triple', 4: 'mega' }
      return clss[this.cols || 3]
    },
  },
}
</script>
<style lang="stylus" scoped>
.show
  position relative
  display flex
  flex-direction column
  justify-content space-between
  align-items center
  text-align center
  width 33.3333%
  margin-bottom 0.2rem
  .decoration
    position absolute
    top 0
    left 0
  img
    max-width 100%
    height 2rem

  &:last-child > img
    border-right none

  .price
    color #E83D40
.double
  width 45%
  box-shadow 0px 0px 1px lightgray
.triple
  width 30vw
  img 
    border-right solid 1px lightgray
    &:nth-child(3n)
      border-right none
.mega
  width 22vw
</style>