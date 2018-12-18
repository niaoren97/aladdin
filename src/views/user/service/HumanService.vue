<template lang="pug">
.single-page
  navigation-bar(title="客服中心")
    template(slot="right")
      span 评价
</template>
<script>
export default {
  name: "HumanService"
}
</script>
<style lang="stylus" scoped>
</style>