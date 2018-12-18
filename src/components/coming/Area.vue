<template lang="pug">
.area 
  coming-title(v-if="title", :title="title")
  .products
    coming-product(v-for="product in products", :key="product.id",
      v-bind="product")
</template>
<script>
import ComingProduct from './Product.vue'
import ComingTitle from './Title.vue'
import {fakeImage} from '@/utils'
import faker from 'faker'
import _ from 'lodash'

function createProduct() {
  return {
    id: faker.random.uuid(),
    title: faker.lorem.word(),
    image: fakeImage(240, 240),
    time: faker.date.future(),
    tag: faker.random.arrayElement(['热品', '爆款']),
  }
}
export default {
  name: 'ComingArea',
  props: ['title'],
  data() {
    return {products: _.range(0, 6).map(() => createProduct())}
  },
  components: {
    ComingProduct,
    ComingTitle,
  }
}
</script>

<style lang="stylus" scoped>
.area
  padding-top 20px
.products
  display flex
  justify-content space-around
  flex-wrap wrap
</style>
