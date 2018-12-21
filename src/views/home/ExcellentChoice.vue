<template lang="pug">
.single-page
  navigation-bar(title="超值热卖")
    template(slot="right")
      img(src="/static/icons/cart-white.png", @click="goto('Cart')")
      img(src="/static/icons/share-white.png", @click="share")
      img(src="/static/icons/home-white.png", @click="home")
  .content
    .modal(:style="{display: showModal ? 'block':'none'}")
      .mask
      share-popup(@cancel="showModal=false")
</template>
<script>
import SharePopup from '@/components/SharePopup'

export default {
  name: "ExcellentChoice",
  components: {
    SharePopup,
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    goto(cid) {
      this.$navigator.push(cid)
    },
    share() {
      thsi.showModal = true
    },
    home() {

    }
  }
}
</script>
<style lang="stylus" scoped>
.modal
  position fixed
  width 100vw
  height 100vh
  top 0
  left 0
</style>