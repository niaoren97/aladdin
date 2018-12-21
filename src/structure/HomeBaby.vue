<template lang="pug">
.container
  swiper
    swiper-slide(v-for="slide in slides") 
      img.slide(:src="slide")
  section-block(:extraStyle="{paddingTop:'0.2rem' }")
    section-divider(title="奶粉专区")
    product-group(:products="milkpowder")

  section-block(:extraStyle="{paddingTop:'0.2rem' }")
    section-divider(title="纸尿裤专区")
    product-group(:products="diaper")
  section-block(:extraStyle="{paddingTop:'0.2rem' }")
    section-divider(title="猜你喜欢")
    product-group(:products="guess")
</template>
<script>
import ProductShow  from '@/components/ProductShow'
import ProductGroup  from '@/components/ProductGroup'
import {createProduct, fakeImage} from '@/utils'
import _ from 'lodash'

export default {
  name: 'HomeBaby',
  components: {
    ProductShow,
    ProductGroup,
  },
  data() {
    return {
      slides: _.range(0,4).map(() => fakeImage(720,300)),
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

