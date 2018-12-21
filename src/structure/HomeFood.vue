<template lang="pug">
div
  swiper
    swiper-slide.slide(v-for="slide in slides" )
      img.slide(:src="slide")
  section-block
    section-divider(title="热销类目")
    .categories
      .category(v-for="c in categories",:key="c.id")
        img(:src="c.image")
        span {{c.title}}
  section-block
    section-divider(title="爆品推荐")
    product-group(:cols="2",:products="products")
</template>
<script>
import ProductGroup from '@/components/ProductGroup'
import { createProduct, fakeImage } from '@/utils'
import faker from 'faker'
import _ from 'lodash'
const cs = ['糖果', '膨化', '方便面', '巧克力']

export default {
  name: 'HomeFood',
  components: {
    ProductGroup,
  },
  data() {
    return {
      slides: _.range(0, 4).map(() => fakeImage(720, 300)),
      categories: _.range(0, 4).map((x) => ({
        id: faker.random.uuid(),
        title: cs[x],
        image: fakeImage(100, 100)
      })),
      products: _.range(0,4).map(() => createProduct())
    }
  },
}
</script>

<style lang="stylus" scoped>
.categories
  display flex
  padding 0.4rem 0
  justify-content space-between
  align-items center
  .category
    display flex
    flex-direction column
    align-items center
    text-align center
    img 
      width 100%
</style>
