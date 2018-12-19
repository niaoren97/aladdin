<template lang="pug">
.single-page
  navigation-bar(title="选择咨询的订单")
    template(slot="right")
      span(@click="skip") 跳过
  .content
  
</template>
<script>
export default {
  name: "OrderService",
  methods: {
    skip() {
      console.log('skip');
      
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>