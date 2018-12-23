<template lang="pug">
.section
  img(:src="product.images[0]")
  div.info
    div {{product.title}}
    div {{product.subtitle}}
    .footer
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
  align-items stretch
  padding 0.2rem
  img 
    align-self center
    width 1.6rem
    height 1.6rem
    margin-bottom 0.2rem
.info
  flex 1
  display flex
  flex-direction column
  padding-left 0.2rem
.footer
  margin-top auto
  display flex
  justify-content space-between
  align-items flex-end
  .price
    color red
    font-size 0.3rem
    font-weight lighter

</style>