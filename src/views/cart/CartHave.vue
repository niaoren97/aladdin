<template>
  <div Serveriv class="wrap">
    <myheader :title="title"></myheader>
    <post></post>
    <from></from>
    <hgoods></hgoods>
  </div>
</template>

<script>
import myheader from "@/components/cart/Header.vue";
import post from "@/components/cart/Post.vue";
import from from "@/components/cart/From.vue";
import hgoods from '@/components/cart/Hgoods.vue';
export default {
  name: "orderdetail",
  data() {
    return {
      title: "购物车"
    };
  },
  components: {
    myheader: myheader,
    post:post,
    from:from,
    hgoods:hgoods
  },
  methods: {},
  props: {}
};
</script>

<style lang="stylus" scoped>
</style>

