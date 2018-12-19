<template lang="pug">
ul(:style="extraStyle")
  slot  
</template>

<script>
import ListItem from './ListItem.vue'
export default {
  props: ['extraStyle'],
  components: {
    ListItem,
  }
}
</script>
<style lang="stylus" scoped>
ul
  margin 0
  padding 0
</style>


