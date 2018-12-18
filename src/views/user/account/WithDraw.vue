<template lang="pug">
.single-page  
  navigation-bar(title="我的账户")
  .content
    p {{money}}
    p 我的金额
    button(@click="withDraw") 提现
</template>
<script>
export default {
  name: 'WithDraw',
  data() {
    return {money: 2000}
  },
  methods: {
    withDraw() {
      this.$navigator.presentModal('')
    }
  }
}
</script>

