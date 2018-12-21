<template lang="pug">
.container
  .products(v-if="products.length > 0")
    product-show(v-for="p in products", :key="p.id", :product="p", :cols="cols")
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
  props: ['products', 'cols']
}
</script>
<style lang="stylus" scoped>
.container
  padding 0.2rem 0.3rem
.products
  display flex
  flex-wrap wrap  
  justify-content space-between
  
</style>