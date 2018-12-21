<template lang="pug">
.head-tab-bar  
  slot
</template>
<script>

export default {
  
}
</script>

<style lang="stylus" scoped>
.head-tab-bar
  display flex
  position sticky
  background #fff
  z-index 9999
  border-bottom: solid 1px orange
  justify-content space-around
  align-items center
  height 0.6rem
</style>

