<template lang="pug">
li(:style="extraStyle", :class="extraClass", @click="$emit('click')")
  div(v-if="showHead")
    check-box(:checked="checked")
  slot
  div(v-if="showTail", @click="$emit('tailClick')")
    span &gt;
</template>

<script>
export default {
  props: ['extraStyle', 'extraClass',
  'showHead', 'showTail', 'checked'],
  methods: {
    headClick() {

      this.$emit('headClick')
    }
  }
}
</script>
<style lang="stylus" scoped>
li
  list-style none
  margin 0
  padding 0.4rem 0.2rem
  border-bottom solid 1px lightgray
  display flex
  align-items center
  justify-content space-around
  // box-shadow 0 1px lightgray
  &:last-child
    border-bottom none
.head
  width 0.3rem
  height 0.3rem
  border-radius 50%
  border solid 1px gray
  &.checked
    border none
    background-color red
    &::before
      content: '✔️'
      font-size 0.2rem
</style>


