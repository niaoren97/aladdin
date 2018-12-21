<template lang="pug">
.single-page
  navigation-bar(title="限时断货")
    template(slot="")
  .content
    product-preview(v-for="p in products",:key="p.id", :product="p")
</template>
<script>
import {createProduct} from '@/utils'
import {range} from 'lodash'
import ProductPreview from '@/components/ProductPreview'

export default {
  name: "TimeSelling",
  data() {
    return {
      products: range(0,6).map(() => createProduct())
    }
  },
  components: {
    ProductPreview
  }
}
</script>
<style lang="stylus" scoped>
</style>