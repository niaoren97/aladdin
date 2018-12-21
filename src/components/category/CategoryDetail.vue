<template lang="pug">
div
  img.feature(:src="featuredImage", @click="goDetail")
  .products
    .product(v-for="p in products", :key="p.id")
      img(:src="p.images[0]")
      span {{p.title}}
</template>
<script>
import { range } from 'lodash'
import faker from 'faker'
const createProduct = () => ({
  id: faker.random.uuid(),
  title: faker.random.word(),
  images: [],
})
export default {
  name: 'CategoryDetail',
  props: ['category'],
  data() {
    return {
      featuredImage: 'http://dummyimage.com/500x200',
      products: range(0, 12).map(() => createProduct()),
    }
  },
  beforeUpdate() {
    console.log(this.category);
  },
  methods: {
    goDetail() {
      this.$navigator.push('CategorySearch', { category: this.category })
    },
  },
}
</script>
<style lang="stylus" scoped>
.feature
  display block
  margin auto
  width 5rem
  height 2rem
  margin-top 20px

.products
  display flex
  justify-content space-around
  flex-wrap wrap

  .product
    width 30%
    display flex
    flex-direction column
    align-items center

    img
      width 100%
</style>