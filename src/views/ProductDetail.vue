<template lang="pug">
//- navigation-stack
div
  keep-alive
    navigation-bar(:title="title")
  .content
    h2 {{brand}}
</template>
<script>
// import * from 'module'
import NavigationBar from '@/components/NavigationBar'
import NavigationStack from '@/components/NavigationStack.vue'

export default {
  name: 'ProductDetail',
  props: ['id'],
  components: {
    NavigationBar,
    NavigationStack,
  },
  data() {
    return {
      title: 'navigation title',
      brand: 'xxxx'
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>

