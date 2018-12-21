<template lang="pug">
head-bar
  template(slot="center")
    span(v-if="title") {{title}}
    slot(v-else, name="center")
  template(slot="left")
    img.back(@click="back", src="/static/icons/back.png", :style="{width: '0.2rem'}")
  template(slot="right")
    slot(name="right")
</template>
<script>
import HeadBar from './HeadBar.vue'
import TitleBar from './TitleBar.vue'

export default {
  props: ['title'],
  components: {
    HeadBar,
    TitleBar,
  },
  methods: {
    back() {
      this.$navigator.pop()
    }
  }
}
</script>
<style lang="stylus" scoped>
.back
  width 0.26rem
</style>
