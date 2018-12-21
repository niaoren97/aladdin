<template lang='pug'>
  <div @click="$emit('click')" class="check">
    <span class="select" v-if="!checked"></span>
    <img v-if="checked" src="../../assets/cart-img/duihao.png" alt>
  </div>
</template>
<script>
export default {
  props: ["checked"]
};
</script>
<style lang="stylus" scoped>
.select
  display inline-block
  width 0.25rem
  height 0.25rem
  border-radius 50%
  border 1px solid

img
  width 0.25rem
  height 0.25rem
  vertical-align middle
</style>





