<template lang="pug">
div
  slot
  .zones
    .left
      slot(name="left")
    .right
      slot(name="right-top")
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
.left
  width 3.1rem
.right
  flex 1
  flex-direction column
  *
    flex 1
</style>

