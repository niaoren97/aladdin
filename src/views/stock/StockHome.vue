<template>
  <div class="page">
    <title-bar title="'这些都是断货王...'"></title-bar>
    <div class="content">
      <post></post>
      <div class="goods">
        <goods class="item" @click="push"></goods>
        <goods class="item" @click="push"></goods>
        <goods class="item" @click="push"></goods>
      </div>
      <post></post>
      <div class="goods"> 
        <goods class="item" @click="push"></goods>
        <goods class="item" @click="push"></goods>
        <goods class="item" @click="push"></goods>
      </div>
    </div>
  </div>
</template>

<script>
import myheader from "@/components/duan/Header.vue";
import post from "@/components/duan/Post.vue";
import goods from "@/components/duan/Goods.vue";
import StockProductDetailVue from "./StockProductDetail.vue";

export default {
  name: "one",
  data() {
    return {
      title: '这些都是"断货王"...'
    };
  },
  methods: {
    push() {
      this.$navigator.push("StockProductDetail");
    }
  },
  components: {
    myheader: myheader,
    post: post,
    goods: goods
  }
};
</script>

<style lang="stylus" scoped>

.goods {
  width 100%
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  padding 0.1rem
  border-bottom: 0.2rem solid #f2f2f2;
}
.item {
  width 33%
}
</style>

