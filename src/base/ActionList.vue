<template lang="pug">
.list
  slot
</template>
<script>
export default {
  name: "ActionList"
}
</script>
<style lang="stylus" scoped>
.list
  background-color #fff
  box-shadow 0 0 3px rgba(30,30,30,0.3)
</style>