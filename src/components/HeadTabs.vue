<template lang="pug">
div
  head-tab-bar
    slot(name="tabs")
  slot(name="content")
</template>
<script>
import HeadTabBar from './HeadTabBar.vue'
// import HeadTabBarItem from './HeadTabBarItem.vue'

export default {
  components: {
    // HeadTabBarItem,
    HeadTabBar,
  },
}
</script>
<style lang="stylus" scoped>
</style>


