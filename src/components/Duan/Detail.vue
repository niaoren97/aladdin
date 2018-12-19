<template>
  <div class="wrap page">
    <myheader :title="title"></myheader>
    <!-- <swiper :options="swiperOption"> -->
      <!-- <swiper-slide > <img :key="item.key" v-for="item in data" :src="item.src" alt=""></swiper-slide>
       <swiper-slide > <img :key="item.key" v-for="item in data" :src="item.src" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div> -->
    <!-- </swiper> -->
    
    <jifengou></jifengou>
    <tui></tui>
    <lafen></lafen>
  </div>
</template>

<script>
import Vue from "vue";
import myheader from "./duan/header.vue";
import VueAwesomeSwiper from "vue-awesome-swiper";

import jifengou from './duan/jifengou.vue'
import tui from './duan/tui.vue'
import lafen from './duan/lafen.vue'

Vue.use(VueAwesomeSwiper);

export default {
  name: "datails",
  data() {
    return {
      title: "商品详情",
      // swiperOption: {
      //   autoplay: 3500,
      //   setWrapperSize: true,
      //   pagination: ".swiper-pagination",
      //   paginationClickable: true,
      //   mousewheelControl: true,
      //   observeParents: true
      // },
      // data: [
      //   {src:'/static/duan/1.png'},
      // ]
    };
  },
  // mounted() {
  //   setInterval(() => {
  //     console.log("simulate async data");
  //     let swiperSlides = this.swiperSlides;
  //     // if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1);
  //   }, 3000);
  // },
  methods: {},
  components: {
    myheader: myheader,
    jifengou:jifengou,
    tui:tui,
    lafen:lafen
  }
};
</script>

<style lang="stylus" scoped>
.page {
  padding-top 1rem
}
img {
  // border 1px solid 
}

</style>



