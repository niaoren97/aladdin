<template lang="pug">
.page
  .header
    .back(@click='back()') back
  .content
    slot
    button(@click='forward') forward
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // props: ['back']
  methods: {
    back() {
      this.$navigator.pop();
    },
    forward() {
      this.$navigator.push('', { name: 'skdfj'})
    }
  }
})
</script>

<style lang="stylus" scoped>
.page
  height 100vh
  padding-top 64px
  position absolute
  top 0
  left 0
  background-color #fff
  box-shadow -1px 0 4px rgba(30,30,30, 0.3)
.header
  display flex
  justify-content space-between
  align-items center
  padding 0 20px
  position fixed
  top 0
  background-color #fff
  left 0
  width 100%
  height 64px
  box-shadow 0 1px rgba(30, 30, 30, 0.3)
</style>
