<template>
  <div class="page">
    <myheader :title="title"></myheader>
    <div class="w">
      <post></post>
      <div class="goods">
        <goods @click="push"></goods>
        <goods @click="push"></goods>
        <goods @click="push"></goods>
      </div>
      <post></post>
      <div class="goods">
        <goods @click="push"></goods>
        <goods @click="push"></goods>
        <goods @click="push"></goods>
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
.w {
  padding-top : 1rem;
}

.goods {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  border-bottom: 0.2rem solid #f2f2f2;
}
</style>

