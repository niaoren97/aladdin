<template>
  <div class="single-page">
    <navigation-bar title="商品详情"></navigation-bar>
    <div class="content">
      <!-- 顶部轮播图 -->
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="slide" :key="item.id" v-for="item in product.images">
          <img :src="item.src" alt>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="qiang">
        <div class="bargain">
          抢购价:￥
          <span class="price">{{(product.price*product.bargain).toFixed(2)}}</span>
        </div>
        <div class="time">
          今天{{product.saletime}}开抢
          <span class="ti">提醒我</span>
        </div>
      </div>
      <!-- 商品简介 -->
      <div class="des">
        <div class="top">
          <div class="logo">
            <img src="/static/duan/uk.png" alt>
          </div>
          <div class="txt">
            <span class="country">{{product.country}}</span>
            {{product.des}}
          </div>
        </div>
        <div class="bottom">
          <div class="money">{{product.price}}</div>
          <div class="taix">
            关税: ￥
            <span>{{(product.price*product.bargain*product.tariff).toFixed(2)}}</span>
            <span @click="toggleTaix()">详情 ></span>
          </div>
          <div class="postage">
            邮费: ￥
            <span>{{product.posttage}}</span>
          </div>
        </div>
      </div>
      <!-- 积分购 -->
      <jifengou></jifengou>
      <!-- 退换货 -->

      <tui @toggle="toggleService()"></tui>
      <lafen></lafen>
      <pinpai></pinpai>
      <product></product>
      <myuse></myuse>
      <productimg></productimg>
      <lafenbuy></lafenbuy>
      <promise></promise>
      <tips></tips>
      <bottom class="btm"></bottom>
      <taix @back="toggleTaix()" v-if="taixShow"></taix>
      <service  @back="toggleService()" v-if="serviceShow"></service>
    </div>
  </div>
</template>

<script>
import myheader from "@/components/duan/Header.vue";
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
import service from "@/components/duan/DesService.vue";
import taix from "@/components/duan/DesTaix.vue";

function gettime(date) {
  return `${date.getHours()}:${date.getMinutes()}`;
}
export default {
  name: "datails",
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
    service: service,
    taix: taix
  },
  data() {
    return {
      serviceShow: false,
      taixShow: false,
      swiperOption: {
        autoplay: 1000,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true
      },

      product: {
        bargain: 0.8,
        price: 198.09,
        tariff: 0.12,
        postage: 50,
        saletime: gettime(new Date()),
        country: "英国直邮",
        des: "焕彩萃璨花蕊唇彩4.8g焕彩萃璨花 蕊唇彩4.8g 焕彩萃璨花蕊唇彩4.8g",
        images: [
          { id: 1, src: "/static/duan/1.png" },
          { id: 2, src: "/static/duan/2.png" },
          { id: 3, src: "/static/duan/3.png" }
        ]
      }
    };
  },
  props:[],
  methods: {
    toggleTaix() {
      this.taixShow=!this.taixShow;
    },
    toggleService() {
      this.serviceShow = !this.serviceShow;
    }
  }
};
</script>

<style lang="stylus" scoped>
.btn 
  display fixed 
  bottom 0
// 顶部轮播图
.content, .swiper
  background-color #fff
.content
  margin-bottom 3rem
.page
  padding-top 1rem

.slide
  text-align center
  height 4rem
  padding 0.6rem 0 0

.slide > img
  height 2.5rem

// 抢购提醒
.qiang
  height 1rem
  display flex
  justify-content space-between
  align-items center
  background-color #e53e42
  padding 0 0.2rem

.bargain
  color #fff
  font-size 0.26rem
  text-align left

.time
  color #fff
  font-size 0.26rem
  text-align right
  display flex
  justify-content space-between
  align-items center

.price
  color #fff
  font-size 0.26rem

.ti
  color #e53e42
  font-size 0.26rem
  display inline-block
  width 1.2rem
  border-radius 0.2rem
  background-color #fff
  text-align center
  margin-left 0.2rem

// 商品简介
.des
  background-color #fff
  padding 0.2rem

.top
  display flex
  justify-content space-between
  align-items center
  flex 1

.logo
  padding 0.1rem
  border 1px solid #cccccc
  font-size 0
  align-self flex-start

.logo img
  width 0.2rem
  height 0.15rem

.txt
  font-size 0.3rem
  text-align left
  margin-left 0.22rem

.country
  font-size 0.3rem
  color #e53e42
  margin-right 0.22rem

.bottom
  margin-top 0.3rem

.bottom div
  text-align left

.money
  color #e53e42
  font-size 0.3rem

.taix, .postage
  font-size 0.2rem
  color #4d4d4d

.taix span:last-child
  display inline-block
  width 0.7rem
  color #ff0000
  border 1px solid #ff0000
  border-radius 2px
  padding 0 2px
  margin-left 0.1rem
</style>



