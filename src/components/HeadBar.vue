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
  height 1rem
  display flex
  box-shadow 0 0 3px rgba(30,30,30,0.2)
  .left
    flex 1
    padding 0.2rem
    justify-content flex-start
  .right
    flex 1
    display flex
    padding 0.2rem
    justify-content flex-end
</style>
