<template lang="pug">
.tabbar
  slot
</template>
<script>
// import TabBarItem from '@/components/TabBarItem.vue'

export default {
  props: [],
}
</script>

<style lang="stylus" scoped>
@import '../style/vars.styl';
.tabbar
  position fixed
  bottom 0
  left 0
  width 100vw
  height 1rem
  display flex
  align-items center
  justify-content space-around
  background-color #fff
  box-shadow 0 0px 3px rgba(30,30,30,0.2)
  z-index $tabbar-level
</style>
