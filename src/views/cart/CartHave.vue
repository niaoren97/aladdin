<template>
  <div class="single-page">
    <title-bar :title="'购物车'"></title-bar>
    <div class="content">
      <post></post>
      <from></from>
      <hgoods></hgoods>
      <!-- 金额计算*************************** -->
      <money></money>

      <!-- 失效商品 -->
      <div class="shixiao">
        <div class="shi">清除失效商品</div>
      </div>
      <!-- 猜你喜欢 -->
      <div class="guess">
        <div class="top">
          <p class="line"></p>
          <span>猜你喜欢</span>
          <p class="line"></p>
        </div>
        <cgoods ></cgoods>
        <cgoods></cgoods>
        <cgoods></cgoods>
        <cgoods></cgoods>
        <cgoods></cgoods>
        <cgoods></cgoods>
        <cgoods></cgoods>
        <cgoods></cgoods>
      </div>
    </div>
  </div>
</template>

<script>
import myheader from "@/components/cart/Header.vue";
import post from "@/components/cart/Post.vue";
import from from "@/components/cart/From.vue";
import hgoods from "@/components/cart/Hgoods.vue";
import money from "@/components/cart/Money.vue";
import cgoods from "@/components/cart/Cgoods.vue";
export default {
  name: "orderdetail",
  data() {
    return {};
  },
  components: {
    post: post,
    from: from,
    hgoods: hgoods,
    money: money,
    cgoods:cgoods
  },
  methods: {},
  props: {
  }
};
</script>

<style lang="stylus" scoped>
.shixiao {
  background-color #fff
  padding 0.1rem
  margin-bottom 0.2rem
}
.shi {
  width: 3rem;
  border: 1px solid ;
  border-radius 30px
  padding 0.1rem .2rem
  font-size 0.3rem
  text-align center
  margin auto
}
.guess {
  background-color #fff
  display flex
  flex-wrap wrap
  justify-content space-between
  align-items center
}
.top {
  background #fff
  display flex
  justify-content center
  align-items center
  padding 0.2rem 0
  width 100%
}
.line {
  width 0.8rem
  border-bottom 1px solid #000
}
.top span {
  font-size 0.3rem
  margin 0 0.2rem
}
</style>

