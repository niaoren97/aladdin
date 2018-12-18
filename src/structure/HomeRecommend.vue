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

  booth
    booth-header(title="今日推荐")
  booth
  booth
    booth-header(title="美食")
  booth
  booth
    booth-header(title="美妆")
  booth
  booth
    booth-header(title="今日推荐")
  booth
</template>
<script>
import ProductDetail from '@/views/ProductDetail.vue'
import BoothHeader from '@/components/BoothHeader.vue'
import Booth from '@/components/Booth.vue'
import Exhibition from '@/components/layouts/Exhibition.vue'
import {mapState, mapActions, mapMutations} from 'vuex'

import 'swiper/dist/css/swiper.css';

export default {
  name: 'HomeRecommend',
  data() {
    return {}
  },
  computed: {

  },
  methods: {
    navigate() {
      this.$navigator.push('ProductDetail', {id: 3})
    }
  },
  components: {
    ProductDetail,
    Booth,
    BoothHeader,
    // swiper,
    // swiperSlide,
    Exhibition,
  }
}
</script>
