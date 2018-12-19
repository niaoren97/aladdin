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

export default {
  name: 'ProductDetail',
  props: ['id'],
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

