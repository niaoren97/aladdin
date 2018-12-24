<template lang="pug">
.single-page
  navigation-bar(title="物流查询-选择订单")
    template(slot="right")
      span(@click="skip") 跳过

</template>
<script>
export default {
  name: "ExpressService",
  methods: {
    skip() {
      
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>