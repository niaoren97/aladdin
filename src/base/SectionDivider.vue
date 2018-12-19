<template lang="pug">
.divider
  span(:style="{color: color}") {{title}}
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
  span
    position relative
    &::before, &::after
      content ''
      position absolute
      width 20vw
      height 1px
    &::before
      left -80%
    &::right
      right -80%
</style>