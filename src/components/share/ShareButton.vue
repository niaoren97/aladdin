<template lang="pug">
navigation-bar-item(@click="share")
  //- img(src="../../assets/tabs/.png")
  span share
</template>
<script>
export default {
  methods: {
    share() {
      // TODO: should pass the link in to payload
      this.$navigator.presentModal('SharePopup')
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>


