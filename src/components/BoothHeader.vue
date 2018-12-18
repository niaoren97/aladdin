<template lang="pug">
div
  img(:src="icon")
  span {{title}}
</template>
<script>
export default {
  name: 'BoothHeader',
  props: ['title', 'icon'],
  data() {
    return {

    }
  } 
}
</script>
<style lang="stylus" scoped>
div
  height 0.6rem
  padding 0.1rem 0.2rem
  background-color #fff
  text-align left
  padding-left 0.2rem
  line-height 0.4rem
  span
    font-size 0.4rem

</style>

