<template lang="pug">
.stack
  slot
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // props: ['back']
  components: {
  }
})
</script>

<style lang="stylus" scoped>
.stack
  height 100vh
  width 100vw
  position fixed
  top 0
  left 0
  background-color #f2f2f2
  box-shadow -1px 0 4px rgba(30,30,30, 0.3)
</style>
