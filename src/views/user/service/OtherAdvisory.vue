<template lang="pug">
.single-page
  navigation-bar(title="选择咨询的订单")
    template(slot="right")
      span(@click="skip") 跳过
</template>
<script>
export default {
  name: "OtherAdvisory",
  methods: {
    skip(){
      this.$navigator.pop()
      this.$navigator.push('HumanService')
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>