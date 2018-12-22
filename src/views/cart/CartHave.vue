<template>
  <div class="single-page">
    <title-bar :title="'购物车'"></title-bar>
    <div class="content">
      <post></post>
      <!-- <from @click="toggleAll" :title="'日本直邮'"  :checked=""></from> -->
      <hgoods></hgoods><hgoods></hgoods>
      <!-- 金额计算*************************** -->
      <money></money>

      <!-- 失效商品 -->
      <div v-if="num==1" class="shixiao">
        <div class="lose">
          <img src="/static/cart-img/shi.png" alt>失效商品
        </div>
        <div class="shigoods">
          <img :src="src" alt>
          <div class="des">
            <div class="tit">会呼吸的丝滑蜜粉</div>
            <div class="guige">规格：蜜粉</div>
            <div class="price">￥166.06</div>
          </div>
        </div>
        <div class="clear">
          <div class="shi" @click="clear()">清除失效商品</div>
        </div>
      </div>
      <!-- 猜你喜欢 -->
      <div class="guess">
        <div class="top">
          <p class="line"></p>
          <span>猜你喜欢</span>
          <p class="line"></p>
        </div>
        <cgoods></cgoods>
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
import faker from "faker";
import myheader from "@/components/cart/Header.vue";
import post from "@/components/cart/Post.vue";
import from from "@/components/cart/From.vue";
import hgoods from "@/components/cart/Hgoods.vue";
import money from "@/components/cart/Money.vue";
import cgoods from "@/components/cart/Cgoods.vue";
export default {
  name: "orderdetail",
  data() {
    return {
      src: faker.image.avatar(),
      num:1
    };
  },
  components: {
    post: post,
    from: from,
    hgoods: hgoods,
    money: money,
    cgoods: cgoods
  },
  methods: {
    clear(){
      this.num=0
    }
  },
  props: {}
};
</script>

<style lang="stylus" scoped>
.shixiao {
  background-color: #fff;
  padding: 0.1rem;
  margin-bottom: 0.2rem;
}

.shigoods {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem;
  border-top: 1px #f2f2f2 solid;
  border-bottom: 1px #f2f2f2 solid;
}

.shigoods img {
  margin-right: 0.2rem;
}

.shi {
  width: 3rem;
  border: 1px solid;
  border-radius: 30px;
  padding: 0.1rem 0.2rem;
  font-size: 0.3rem;
  text-align: center;
  margin: auto;
}

.lose {
  font-size: 0.3rem;
  background-color: #fff;
  padding: 0.2rem;
  vertical-align: middle;
}

.lose img {
  width: 0.4rem;
  height: 0.4rem;
  margin-right: 0.2rem;
  vertical-align: middle;
}

.clear {
  background-color: #fff;
  padding: 0.2rem;
}

.guess {
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.top {
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0;
  width: 100%;
}

.line {
  width: 0.8rem;
  border-bottom: 1px solid #000;
}

.top span {
  font-size: 0.3rem;
  margin: 0 0.2rem;
}
</style>

