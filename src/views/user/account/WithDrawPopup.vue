<template lang="pug"></template>
<script>
export default {
  name: 'WithDrawPopup',
  methods: {
    withDraw() {
      this.$navigator.dismissModal()
    }
  }
}
</script>

