<template lang="pug">
.head-tab-bar  
  slot
</template>
<script>

export default {
  
}
</script>

<style lang="stylus" scoped>
.head-tab-bar
  display flex
  border-bottom: solid 1px orange
  justify-content space-around
  align-items center
  height 0.6rem
</style>

