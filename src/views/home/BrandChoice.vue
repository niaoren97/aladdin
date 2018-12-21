<template lang="pug">
.single-page
  navigation-bar(title="品牌精选")
    template(slot="right")
      img(src="/static/icons/share.png", @click="showModal=true")
  .content
    div(v-for="(brand,index) in brands", :key="index")
      img.feature(:src="brand.feature")
      .products
        .product(v-for="p in brand.products", :key="p.id")
          img(:src="p.images[0]")
          .info
            span.title {{p.title}}
            span.price {{p.price}}

  .modal(v-if="showModal",@click.self="showModal=false")
    share-popup(@cancel="showModal=false")
</template>
<script>
import SharePopup from '@/components/SharePopup'
import { range } from 'lodash'
import { createProduct, fakeImage } from '@/utils'

export default {
  name: 'BrandChoice',
  data() {
    return {
      showModal: false,
      brands: [
        {
          feature: fakeImage(750, 312),
          products: range(0, 3).map(() => createProduct()),
        },
        {
          feature: fakeImage(750, 312),
          products: range(0, 3).map(() => createProduct()),
        },
      ],
    }
  },
  components: {
    SharePopup,
  },
}
</script>
<style lang="stylus" scoped>
.feature
  width 100vw
  height 41vw
  box-shadow 0 1px 3px rgba(30, 30, 30, 0.1)

.products
  padding 0.2rem
  display flex
  justify-content space-around

.product
  width 30vw

  .info
    font-weight lighter
    font-size 0.2rem
    background-color #fff
    display flex
    flex-direction column
    align-items flex-start
    padding 0.1rem
    white-space nowrap
    overflow hidden
    text-overflow ellipsis

    .price
      color red

  img
    width 100%
    height 30vw
    box-shadow 0 1px 2px rgba(20, 20, 20, 0.1)
    margin-bottom 0.1rem

.modal
  position fixed
  width 100vw
  height 100vh
  top 0
  left 0
  background-color rgba(30, 30, 30, 0.3)
</style>