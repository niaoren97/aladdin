<template>
  <div class="bottom">
    <div class="left" @click="jump('HumanService')">
      <img src="/static/duan/lianxikefu.png" alt>
      <span>在线客服</span>
    </div>
    <div class="right">加入购物车</div>
  </div>
</template>

<script>
export default {
  dsta() {
    return {};
  },
  methods: {
    jump() {}
  }
};
</script>

<style lang="stylus" scoped>
.bottom
  width 100%
  background-color #fff
  position fixed
  bottom 0

.left
  display inline-block
  height 0.97rem
  line-height 0.97rem
  font-size 0.27rem
  width 50%
  vertical-align middle
  text-align center

.left img
  width 0.4rem
  height 0.3rem
  vertical-align middle
  margin 0 0.1rem

.right
  display inline-block
  height 0.97rem
  width 50%
  background-color #e53e42
  color #fff
  font-size 0.27rem
  line-height 0.97rem
  text-align center
</style>
