<template lang="pug">
.divider(:style="{color: color || 'gray'}") {{title}}
  .left(:style="{backgroundColor: color || 'gray'}")
  .right(:style="{backgroundColor: color || 'gray' }")

</template>
<script>
export default {
  props: ['title', 'color'],
  name: "SectionDivider"
}
</script>
<style lang="stylus" scoped>
.divider
  text-align center
  position relative
  .left, .right
    position absolute
    width 20vw
    height 1px
    top 50%
  .left
    left 20vw
  .right
    right 20vw

</style>