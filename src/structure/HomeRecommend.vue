<template lang="pug">
div
  swiper
    swiper-slide(v-for="s in slides", :key="s.id")
      img.slide(:src="s.feature")
  exhibition
    booth-header(title="新品上市, 促销大庆")
    template(slot="left")
      img(@click="goto('TimeSelling')" ,style="width: 100%",src="http://dummyimage.com/320x320")
    template(slot="right-top")
      img(@click="goto('BrandChoice')", src="http://dummyimage.com/400x150")
    template(slot="right-bottom")
      img(@click="goto('ExcellentChoice')", src="http://dummyimage.com/400x150")

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
import { createProduct, fakeImage } from '@/utils'
import faker from 'faker'
import { range } from 'lodash'

import 'swiper/dist/css/swiper.css'

export default {
  name: 'HomeRecommend',
  data() {
    return {
      slides: [{
        id: faker.random.uuid(),
        ...createProduct(),
        feature: fakeImage(750, 312),
      }],
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
    goto(cid) {
      this.$navigator.push(cid)
    }
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
.slide
  width 100vw
  height 41vw
.section
  background-color #fff
  margin-bottom 0.2rem
  box-shadow 0 1px 3px rgba(30,30,30,0.3)
.feature
  width 100vw
  height 41.666vw
</style>
