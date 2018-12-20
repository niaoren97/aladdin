<template lang="pug">
.container
  swiper
    swiper-slide 
      img.slide(src="http://dummyimage.com/640x320")
    swiper-slide 
      img.slide(src="http://dummyimage.com/640x320")
  section-block
    section-divider(title="奶粉专区")
    product-group(:products="milkpowder")

  section-block
    section-divider(title="纸尿裤专区")
    product-group(:products="diaper")
  section-block
    section-divider(title="猜你喜欢")
    product-group(:products="guess")
</template>
<script>
import ProductShow  from '@/components/ProductShow'
import ProductGroup  from '@/components/ProductGroup'
import {createProduct} from '@/utils'

export default {
  name: 'HomeBaby',
  components: {
    ProductShow,
    ProductGroup,
  },
  data() {
    return {
      milkpowder: _.range(0,3).map(() => createProduct()),
      diaper: _.range(0,3).map(() => createProduct()),
      guess: _.range(0,3).map(() => createProduct()),
    }
  }
}
</script>
<style lang="stylus" scoped>
.slide
  width 100vw
  height 42vw
.main
  padding 0.1rem 0.3rem
</style>

