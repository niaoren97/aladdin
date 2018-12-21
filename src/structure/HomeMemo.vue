<template lang="pug">
div.container
  exhibition
    template(slot="left")
      img(style="width: 100%",src="http://dummyimage.com/320x320", alt="", @click="goSecret")
    template(slot="right-top")
    template(slot="right-bottom")
  .coming
    //- span.title 即将开售
    section-divider(title="即将开售")
    coming-area(title="美妆专区")
    coming-area(title="美食专区")
</template>
<script>
import BoothHeader from '@/components/BoothHeader.vue'
import Booth from '@/components/Booth.vue'
import Exhibition from '@/components/layouts/Exhibition.vue'
import ComingArea from '@/components/coming/Area.vue'

export default {
  components: {
    BoothHeader,
    Booth,
    Exhibition,
    ComingArea,
  },
  methods: {
    goSecret() {
      this.$navigator.push('SecretPage')
    }
  }
}
</script>


<style lang="stylus" scoped>
</style>
