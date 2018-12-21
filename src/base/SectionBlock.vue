<template lang="pug">
.section(:style="extraStyle")
  slot
</template>
<script>
export default {
  name: 'SectionBlock',
  props: ['extraStyle']
}
</script>

<style lang="stylus" scoped>
.section
  padding 0 0.2rem
  background-color #fff
  margin-bottom 0.14rem
  box-shadow 0 1px #ccc, 0 -1px #ccc
</style>

