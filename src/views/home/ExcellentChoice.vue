<template lang="pug">
.single-page
  navigation-bar(title="超值热卖")
    template(slot="right")
      img(src="/static/icons/cart-white.png", @click="navigateTo('/cart')")
      img(src="/static/icons/share-white.png", @click="share")
      img(src="/static/icons/home-white.png", @click="navigateTo('/home')")
  .content
    .modal(v-if="showModal")
      .mask
      share-popup(@cancel="showModal=false")
</template>
<script>
import SharePopup from '@/components/SharePopup'

export default {
  name: 'ExcellentChoice',
  components: {
    SharePopup,
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    navigateTo(url) {
      this.$router.push(url)
    },
    goto(cid) {
      this.$navigator.push(cid)
    },
    share() {
      this.showModal = true
    },
  },
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