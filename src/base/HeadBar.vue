<template lang="pug">
.head-bar  
  .left
    slot(name="left")
  .center
    slot(name="center")
  .right
    slot(name="right")
</template>
<style lang="stylus" scoped>
.head-bar
  position fixed
  top 0
  left 0
  width 100%
  background-color #E53E42
  color #f6f6f6
  height 1rem
  font-size 0.4rem
  display flex
  align-items center
  box-shadow 0 0 3px rgba(30,30,30,0.2)
  z-index 10000
  img
    width 0.4rem
    height 0.4rem
    margin-left 0.2rem
  .left
    flex 1
    padding-left 0.2rem
    text-align left
    justify-content flex-start
  .right
    flex 1
    display flex
    padding-right 0.2rem
    justify-content flex-end
</style>
