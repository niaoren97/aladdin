<template>
  <div class="single-page">
    <navigation-bar :title="'品牌详情'"></navigation-bar>
    <div class="content">
      <div class="post">
        <img src="/static/duan/brand.png" alt>
      </div>
      <div class="top">
        <img class="logo" src="/static/duan/brandlogo.png" alt>
        <div class="brandname">
          <div class="name">欧力威蓝</div>
          <div class="from">源自美国加州</div>
        </div>
      </div>
      <div class="line"></div>
      <div class="des">品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌</div>
      <div class="jiantou" @click="open()">
        <img src="/static/duan/jiantouxia.png" alt>
      </div>
      <!-- 全部商品 -->
      <div class="all">全部商品</div>
      <brand-goods :key="item.id" :product="item" v-for="item in products" class="product"></brand-goods>
    </div>
  </div>
</template>

<script>
import BrandGoods from "@/components/duan/BrandGoods.vue";
export default {
  data() {
    return {
      products: [
        { id: 1, image: "/static/duan/1.png" },
        { id: 2, image: "/static/duan/2.png" },
        { id: 3, image: "/static/duan/3.png" },
        { id: 4, image: "/static/duan/1.png" },
        { id: 5, image: "/static/duan/3.png" },
        { id: 6, image: "/static/duan/1.png" },
        { id: 7, image: "/static/duan/2.png" },
        { id: 8, image: "/static/duan/3.png" },
        { id: 9, image: "/static/duan/1.png" },
        { id: 10, image: "/static/duan/3.png" }
      ]
    };
  },
  methods: {
    open() {}
  },
  components: {
    BrandGoods
  }
};
</script>

<style lang="stylus" scoped>
.brand
  background-color #f2f2f2

.post, .top, .logo, .brandname, .des, .jiantou, .all
  background-color #fff

.top
  position relative

.post
  height 3rem

.post img
  height 3rem

.logo
  position absolute
  top -0.2rem
  left 0.2rem
  // transform translateY(-0.2rem)
  width 1rem
  height 1rem

.brandname
  margin-left 1.5rem
  padding 0.16rem
  // margin-top 0.16rem

.name
  font-size 0.3rem
  color #333333
  margin-bottom 0.05rem
  font-weight 500

.from
  font-size 0.2rem
  color #4d4d4d

.line
  border-bottom 1px solid #f2f2f2

.des
  font-size 0.15rem
  letter-spacing 0.01rem
  color #4d4d4d
  padding 0.1rem 0.2rem
  line-height 0.2rem
  text-align left

.jiantou
  border-bottom 0.1rem solid #f2f2f2
  display flex
  justify-content center
  padding 0.1rem 0

.jiantou img
  width 0.21rem
  height 0.13rem
  margin-bottom 0.1rem

.all
  border-bottom 1px solid #f2f2f2
  text-align left
  font-size 0.3rem
  font-weight 500
  color #4d4d4d
  padding 0.25rem 0.2rem
</style>

