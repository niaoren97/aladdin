<template>
  <div class="wrap page">
    <myheader :title="title"></myheader>

    <swiper :options="swiperOption">
      <swiper-slide class="slide" :key="item.key" v-for="item in data">
        <img :src="item.src" alt>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="qiang">
      <div class="bargain">抢购价： ￥<span class="price">192.08</span></div>
      <div class="time">今天15:00开抢<span class="ti">提醒我</span></div>
    </div>

    <des></des> 
    <jifengou></jifengou>
    <tui></tui>
    <lafen></lafen>
    <pinpai></pinpai>
    <product></product>
    <myuse></myuse>
    <productimg></productimg>
    <lafenbuy></lafenbuy>
    <promise></promise>
    <tips></tips>
    <bottom></bottom>
  </div>
</template>

<script>
// import Vue from "vue";

import myheader from "@/components/duan/Header.vue";
import des from '@/components/duan/Des.vue';
import jifengou from "@/components/duan/Jifengou.vue";
import tui from "@/components/duan/Tui.vue";
import lafen from "@/components/duan/Lafen.vue";
import pinpai from "@/components/duan/Pinpai.vue";
import productdetail from "@/components/duan/Productdetail.vue";
import myuse from "@/components/duan/Use.vue";
import productimg from "@/components/duan/Productimg.vue";
import lafenbuy from "@/components/duan/Lafenbuy.vue";
import promise from "@/components/duan/Promise.vue";
import tips from "@/components/duan/Tips.vue";
import bottom from "@/components/duan/Bottom.vue";

export default {
  name: "datails",
  data() {
    return {
      title: "商品详情",
      swiperOption: {
        autoplay: 1000,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true
      },
      data: [
        { src: "/static/duan/1.png" },
        { src: "/static/duan/2.png" },
        { src: "/static/duan/3.png" }
      ]
    };
  },
  methods: {},
  components: {
    myheader: myheader,
    jifengou: jifengou,
    tui: tui,
    lafen: lafen,
    pinpai: pinpai,
    product: productdetail,
    myuse: myuse,
    productimg: productimg,
    lafenbuy: lafenbuy,
    promise: promise,
    tips: tips,
    bottom: bottom,
    des:des
  }
};
</script>

<style lang="stylus" scoped>
.page {
  padding-top: 1rem;
}

img {
  // border 1px solid
}

.slide {
  height 4rem
  padding: 0.6rem 0 0;
}

.slide > img {
  height: 2.5rem;
}
.qiang {
  height 1rem
  display flex
  justify-content space-between
  align-items center
  background-color #e53e42
}
.bargain{
  width 50%
  color #fff
  font-size 0.26rem
  text-align left 
  margin-left 0.2rem
}
.time {
  width 50%
  color #fff
  font-size 0.26rem
  text-align right 
  margin-right 0.2rem
}
.price{
  color #fff
  font-size 0.26rem
}
.ti {
  color #e53e42
  font-size 0.26rem
  display inline-block
  width 1.2rem
  border-radius 0.2rem
  background-color #fff
  text-align center
  margin-left 0.2rem
}
</style>



