<template>
  <div class="wrap page" >
    <myheader :title="title"></myheader>
    <post></post>
    <div class="goods">
      <goods></goods>
      <goods></goods>
      <goods></goods>
    </div>
    <post></post>
    <div class="goods">
      <goods></goods>
      <goods></goods>
      <goods></goods>
    </div>
  </div>
</template>

<script>
import myheader from "@/components/duan/Header.vue";
import post from "@/components/duan/Post.vue";
import goods from "@/components/duan/Goods.vue";

export default {
  name: "one",
  data() {
    return {
      title: '这些都是"断货王"...'
    };
  },
  methods: {},
  components: {
    myheader: myheader,
    post: post,
    goods: goods
  }
};
</script>

<style lang="stylus" scoped>
.page {
  padding-top 1rem
}
.goods {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  border-bottom 0.2rem solid #f2f2f2
}
</style>

