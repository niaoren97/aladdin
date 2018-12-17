<template lang="pug">
.tabbar(:class="class", :style="style")
  slot
</template>
<script>
// import TabBarItem from '@/components/TabBarItem.vue'

export default {
  props: ['class', 'style', ''] 
}
</script>

<style lang="stylus" scoped>
.tabbar
  position fixed
  bottom 0
  left 0
  width 100%
  height 56px
  display flex
  align-items center
  justify-content space-around
  background-color #fff
</style>
