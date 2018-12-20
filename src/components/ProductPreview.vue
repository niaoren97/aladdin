<template lang="pug">
.section
  img(:src="product.images[0]")
  div
    div {{product.title}}
    div {{product.subtitle}}
    .info
      span 🇯🇵 海外直邮
      span.price {{product.price}}
</template>
<script>
import faker from 'faker'
import _ from 'lodash'
import {fakeImage} from '@/utils'

export default {
  name: "ProductPreview",
  props: ['product'],
  data() {
    return {
      // product: {
      //   title: faker.lorem.words(3),
      //   images: [fakeImage(120,120)],
      //   subtitle: faker.lorem.sentence(),
      //   price: _.random(20,200, true).toFixed(2),
      //   country: faker.random.arrayElement(['japan', 'america', 'english'])
      // }
    }
  }
}
</script>
<style lang="stylus" scoped>
.section
  margin-bottom 0.2rem
  box-shadow 0 1px 3px rgba(30,30,30,0.3)
  background-color #fff
  display flex
  align-items center
  padding 0.2rem
  img 
    width 1.6rem
    height 1.6rem
    margin-bottom 0.2rem
.info
  display flex
  justify-content space-between
  .price
    color red
    font-size 0.2rem
    font-weight lighter

</style>