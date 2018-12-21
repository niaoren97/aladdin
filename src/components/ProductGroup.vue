<template lang="pug">
.container
  .products(v-if="products.length > 0")
    product-show(v-for="p in products", :key="p.id", :product="p")
  .products(v-else)
    slot
</template>
<script>
import ProductShow from './ProductShow'
export default {
  name: "ProductGroup",
  components: {
    ProductShow
  },
  props: ['products']
}
</script>
<style lang="stylus" scoped>
.container
  padding 0.2rem 0.3rem
.products
  display flex
    
</style>