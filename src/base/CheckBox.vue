<template lang="pug">
.box(:class="{checked: checked}", @click="$emit('click')")
</template>
<script>
export default {
  name: "CheckBox",
  props: ['checked'],
}
</script>
<style lang="stylus" scoped>
.box
  width 0.3rem
  height 0.3rem
  border-radius 50%
  border solid 1px gray
  &.checked
    border none
    background-color red
    position relative
    &::before
      position absolute
      top: 0%;
      left: 50%;
      transform translateX(-50%)
      text-align center
      line-height 0.3rem
      content:'\002714'
      font-size 0.2rem
      color: #fff;
</style>