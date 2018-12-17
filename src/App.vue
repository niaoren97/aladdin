<template lang="pug">
#app
  navigator
    router-view
  
</template>
<script>
import Navigator from '@/components/Navigator.vue'
import NavigationStack from '@/components/NavigationStack.vue'

export default {
  components: {
    Navigator,
    NavigationStack,
  },
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px

  a
    font-weight bold
    color #2c3e50

    &.router-link-exact-active
      color #42b983
</style>
