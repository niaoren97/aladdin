<template lang="pug">
.single-page
  navigation-bar(title="限时断货")
    template(slot="right")
      img(@click="showModal=true",src="/static/icons/share-white.png")
  .content
    product-preview(v-for="p in products",:key="p.id", :product="p")
  .modal(v-if="showModal", @click.self="showModal=false")
    share-popup(@cancel="showModal=false")
</template>
<script>
import {createProduct} from '@/utils'
import {range} from 'lodash'
import ProductPreview from '@/components/ProductPreview'
import SharePopup from '@/components/SharePopup'

export default {
  name: "TimeSelling",
  data() {
    return {
      products: range(0,6).map(() => createProduct()),
      showModal: false

    }
  },
  methods: {

  },
  components: {
    ProductPreview,
    SharePopup,
  }
}
</script>
<style lang="stylus" scoped>
.modal
  position fixed
  width 100vw
  height 100vh
  background-color rgba(30,30,30,0.3)
  top 0
  left 0
</style>