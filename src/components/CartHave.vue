<template>
  <div class="wrap">
    <myheader :title="title"></myheader>
    <post></post>
    <from></from>
    <hgoods></hgoods>
  </div>
</template>

<script>
import myheader from "./cart/header.vue";
import post from "./cart/post.vue";
import from from "./cart/from.vue";
import hgoods from './cart/hgoods.vue';
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

