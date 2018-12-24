<template>
  <div class="wrap">
    <div class="from">
      <check @click="$emit('click')" :checked="checked"></check>
      <img class="feiji" src="../../assets/cart-img/feiji.png" alt>
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
import check from "@/components/cart/Check.vue";
export default {
  components: {
    check: check
  },
  props:['title','checked']
};
</script>

<style lang="stylus" scoped>
.from
  display flex
  justify-content left
  align-items center
  background-color #fff
  text-align left
  padding 0.2rem 0.25rem

.from span
  vertical-align middle

img
  width 25px
  vertical-align middle

.feiji
  margin-left 0.2rem
  margin-right 0.1rem
</style>
