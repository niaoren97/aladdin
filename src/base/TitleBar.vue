<template lang="pug">
head-bar
  template(slot="left")
    slot(name="left")
  template(slot="center")
    span {{title}}
  template(slot="right")
    slot(name="right")
</template>
<script>
import HeadBar from './HeadBar.vue'

export default {
  props: ['title'],
  components: {
    HeadBar,
  },
}
</script>

<style lang="stylus" scoped>
</style>
