<template lang="pug">
.head-tab-bar-item(:class="active ? 'active' : ''", @click="$emit('click')")  
  slot
</template>
<script>
export default {
  props: ['label', 'active'],
  beforeUpdate() {
    console.log(this.active)
  }
}
</script>
<style lang="stylus" scoped>
.head-tab-bar-item
  padding 0.15rem
  &.active
    color red
    border-bottom solid 4px red
</style>



