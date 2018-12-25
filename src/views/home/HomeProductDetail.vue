<template lang="pug">
.single-page
  navigation-bar(title="商品详情")
    template(slot="right")
      img(src="/static/icons/cart-white.png")
      img(src="/static/icons/share-white.png")
      img(src="/static/icons/home-white.png")
  .content.loader(v-if="!product")
    loader
  .content(v-else)
    swiper
      swiper-slide(v-for="(image, index) in product.images", :key="index")
        img.slide(:src="image")
    
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: "HomeProductDetail",
  props: ['pid'],
  computed: {
    product() {
      return this.products[this.pid]
    },
    ...mapState({product: s => s.product.products})
  },
  created() {
    if(!this.product) this.fetchProduct({id: this.pid})
  },
  methods: {
    ...mapActions({fetchProduct: 'product/fetchBy'}),
    onShare(){
      this.$navigator.presentModal('SharePopup' )
    }
  }
}
</script>
<style lang="stylus" scoped>
.loader
  height 100%
  display flex
  justify-content center
  align-items center
</style>