<template lang="pug">
.single-page
  navigation-bar(title="收货地址")
    template(slot="right")
      span(@click="goto('AddAddress')") 添加新地址
  .content

</template>
<script>
import {createAddress} from '@/utils'

export default {
  name: "MyAddress",
  data() {
    return {
      addresses: []
    }
  },
  methods: {
    goto(cid) {
      this.$navigator.push(cid)
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>