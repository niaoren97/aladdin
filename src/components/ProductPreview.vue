<template lang="pug">
section-block
  img(:src="product.images[0]")
  div
    span {{product.title}}
    span {{product.subtitle}}
    div
      span 海外直邮
      span {{product.price}}
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
</style>