<template lang="pug">
.single-page
  navigation-bar(title="我的足迹")
    template(slot="right")
      span(@click="clearFootprint") 清空
      span(@click="editFootprint") 编辑
  //- TODO: shoule group by day, and use `PROPS`
  .content
    product-preview(v-for="footprint in footprints", :key="footprint.id",
      :product="footprint")


</template>
<script>
import ProductPreview from '@/components/ProductPreview'
import {createProduct} from '@/utils'

export default {
  name: "Footprint",
  data() {
    return {
      footprints: [
        createProduct(),
        createProduct(),
        createProduct(),
      ]
    }
  },
  components: {
    ProductPreview,
  }
}
</script>
<style lang="stylus" scoped>
</style>