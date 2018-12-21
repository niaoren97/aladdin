<template lang="pug">
div
  slot
  .zones
    .left
      slot(name="left")
    .right
      .top
        slot(name="right-top")
      .bottom
        slot(name="right-bottom")
</template>
<style lang="stylus" scoped>
.zones
  display flex
  height 3.1rem
.left, .right
  display flex
  justify-content center
  align-items center
  img 
    width 100%
    height 100%
.left
  width 3.1rem
.right
  flex 1
  flex-direction column
  *
    flex 1
</style>

