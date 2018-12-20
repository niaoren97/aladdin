<template lang="pug">
#app
  router-view
</template>
<script>
import Navigator from '@/components/Navigator.vue'

export default {
  components: {
    Navigator,
  },
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  height 100%
  text-align left
  color #2c3e50

#nav
  padding 30px

  a
    font-weight bold
    color #2c3e50

    &.router-link-exact-active
      color #42b983
</style>
