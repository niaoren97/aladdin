<template lang="pug">
.radio(@click="$emit('click')", :class="{checked: checked}")
  .dot(v-if="checked")
</template>
<script>
export default {
  name: "Radio",
  props: ['checked'],
}
</script>
<style lang="stylus" scoped>
$primary = #E53E42
.radio
  width 0.32rem
  height 0.32emm
  border-radius 50%
  border solid 1px gray
  display flex
  justify-content center
  align-items center
  &.checked
    border-color $primary
  .dot
    height 0.1em
    width 0.1rem
    border-radius 50%
    background-color $primary
    // background-color #fff

</style>