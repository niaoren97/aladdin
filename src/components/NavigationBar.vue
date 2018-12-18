<template lang="pug">
title-bar
  template(slot="left")
    //- img(:src="require('@/assets/tabs')", alt="", @click="back")
    //- TODO: use a back image
    span(@click="back") back
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
