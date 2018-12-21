<template lang="pug">
.popup
  .shares
    .share(v-for="way in shares", :key="way.title")
      img(:src="way.icon")
      span {{way.title}}
  button(@click="$emit('cancel')") 取消
</template>
<script>
export default {
  name: 'SharePopup',
  props: ['link'],
  data() {
    return {
      shares: [
        {
          icon: '/static/tabs/QQ.png',
          title: 'qq',
        },
        {
          icon: '/static/tabs/pengyouquan.png',
          title: '朋友圈',
        },
        {
          icon: '/static/tabs/QQkongjian.png',
          title: 'qq空间',
        },
        {
          icon: '/static/tabs/weixin.png',
          title: '微信',
        },
        {
          icon: '/static/tabs/weibo.png',
          title: '微博',
        },
        {
          icon: '/static/tabs/copylink.png',
          title: '复制链接',
        },
      ],
    }
  },
}
</script>
<style lang="stylus" scoped>
.popup
  width 100%
  background-color #fff
  padding 20px 0
  text-align center
  position absolute
  left 0
  bottom 0
.shares
  display flex
  flex-wrap wrap
  .share
    width 33.3vw
    height 20vw
    display flex
    flex-direction column
    justify-content center
    align-items center
    img
      width 10vw
      height 10vw
button
  background-color  #E53E42
  color #fff
  border none
  outline none
</style>