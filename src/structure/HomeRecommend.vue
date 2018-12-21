<template lang="pug">
div
  swiper
    swiper-slide
      img(src="http://dummyimage.com/640x320")
    swiper-slide
      img(src="http://dummyimage.com/640x320")
    swiper-slide
      img(src="http://dummyimage.com/640x320")
  exhibition
    booth-header(title="新品上市, 促销大庆")
    template(slot="left")
      img(style="width: 100%",src="http://dummyimage.com/320x320")
    template(slot="right-top")
    template(slot="right-bottom")

  div.section(v-for="(g, k) in groups", :key="k")
    booth-header(:title="g.title")
    img.feature(src="http://dummyimage.com/720x300")
    product-group(:products="g.products.slice(0,3)")
    img.feature(src="http://dummyimage.com/720x300")
    product-group(:products="g.products.slice(3,6)")
  //- booth
  //-   booth-header(title="今日推荐")
  //- booth
  //- booth
  //-   booth-header(title="美食")
  //- booth
  //- booth
  //-   booth-header(title="美妆")
  //- booth
  //- booth
  //-   booth-header(title="今日推荐")
  //- booth
</template>
<script>
import BoothHeader from '@/components/BoothHeader.vue'
import Booth from '@/components/Booth.vue'
import Exhibition from '@/components/layouts/Exhibition.vue'
import { mapState, mapActions, mapMutations } from 'vuex'
import ProductGroup from '@/components/ProductGroup'
import { createProduct } from '@/utils'
import { range } from 'lodash'

import 'swiper/dist/css/swiper.css'

export default {
  name: 'HomeRecommend',
  data() {
    return {
      groups: {
        today: {
          title: '今日推荐',
          products: range(0, 6).map(() => createProduct()),
        },
        food: {
          title: '美食推荐',
          products: range(0, 6).map(() => createProduct()),
        },
      },
    }
  },
  computed: {},
  methods: {
    navigate() {
      this.$navigator.push('ProductDetail', { id: 3 })
    },
  },
  components: {
    Booth,
    BoothHeader,
    // swiper,
    // swiperSlide,
    Exhibition,
    ProductGroup,
  },
}
</script>

<style lang="stylus" scoped>
.section
  background-color #fff
  margin-bottom 0.2rem
  box-shadow 0 1px 3px rgba(30,30,30,0.3)
.feature
  width 100vw
  height 41.666vw
</style>
