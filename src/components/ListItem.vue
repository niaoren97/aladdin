<template lang="pug">
li(:style="extraStyle")
  slot
</template>

<script>
export default {
  props: ['extraStyle']
}
</script>
<style lang="stylus" scoped>
li
  list-style none
  margin 0
  padding 0
</style>


