<template lang="pug">
div.booth  
  slot
  img.featured(:src="featured")
  .stage
    .product(v-for="product in products")
      img(:src="product.images[0]")
      p.title {{product.title}}
      p.price {{product.price}}
</template>

<script>
// a featured image, with 3 show
import {fakeImage} from '@/utils'
import faker from 'faker'
import _ from 'lodash'
function createProduct() {
  return {
    images: [fakeImage(240, 240)],
    title: faker.lorem.word(),
    price: _.random(10, 200, true).toFixed(1),
  }
}
export default {
  name: 'Booth',
  data() {
    return {
      featured: fakeImage(640,320),
      products: _.range(0, 3).map(() => createProduct()) 
    }
  }
}
</script>
<style lang="stylus" scoped>
.booth
  margin 0.1rem 0
  box-shadow 0 1px 3px rgba(30,30,30, 0.1)
.featured
  width 100%
  vertical-align bottom
.stage
  display flex
  .product
    flex 1
    display flex
    flex-direction column
    justify-content center
    align-items center
    &:last-child > image::after
      width 0
    p
      margin 0
    img
      width 100%
      position relative
      &::after
        content: ''
        position absolute
        width 1px
        height 100%
        background-color lightgray
        top 0
        right 0
        
    .price
      color red
</style>

