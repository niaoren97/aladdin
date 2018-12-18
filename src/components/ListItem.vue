<template lang="pug">
li(:style="extraStyle", :class="extraClass", @click="$emit('click')")
  slot
</template>

<script>
export default {
  props: ['extraStyle', 'extraClass']
}
</script>
<style lang="stylus" scoped>
li
  list-style none
  margin 0
  padding 0.4rem 0.2rem
  border-bottom solid 1px lightgray
  // box-shadow 0 1px lightgray
  &:last-child
    border-bottom none
</style>


