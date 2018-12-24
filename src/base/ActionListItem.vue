<template lang="pug">
.item(@click="$emit('click')")
  slot
</template>
<script>
export default {
  name: "ActionListItem"
}
</script>
<style lang="stylus" scoped>
.item
  height 1rem
  display flex
  justify-content center
  align-items center
  font-size 0.35rem
</style>