<template lang="pug">
div.title 
  span {{title}}

</template>

<script>
export default {
  props: ['title'],
  name: 'ComingTitle',
}
</script>
<style lang="stylus" scoped>
.title
  text-align center
  span
    position relative
    &::before, &::after
      content: ''
      position absolute
      height 1px
      background-color lightgray
      width 0.6rem
      top 50%
    &::before
      left -50px
    &::after
      right -50px

</style>
