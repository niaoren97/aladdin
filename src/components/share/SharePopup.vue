<template lang="pug">
.popup
  .shares
    .share(v-for="share in shares", :key="share") {{share}}
  button.cancel(@click="cancel") 取消
</template>
<script>
export default {
  data() {
    return {shares: ['wechat', 'qq', 'weibo',
    'qzone', 'friend', 'copylink']}
  },
  methods: {
    cancel() {
      this.$navigator.dismissModal()
    }
  }  
}
</script>

<style lang="stylus" scoped>
.popup
  position fixed
  bottom 0
  left 0
  width 100vw
  background-color #fff
.shares
  display flex
  flex-wrap wrap
  padding 0.4rem
  justify-content space-between
  .share
    width 33.333vw
    height 1.8rem
    display flex
    justify-content center
    align-items center
.cancel
  border none
  outline none
  background red
  border-radius 5px
  color #fff
</style>
