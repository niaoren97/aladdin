<template lang="pug">
.single-page
  navigation-bar(title="添加新地址")
    template(slot="right")
      span(@click="submit") 完成
  .content
    .warn 请使用真实姓名
    section-block
      input(v-model="name")
    list
      list-item
        input(v-model="phone")
      list-item
        input(v-model="address")
      list-item
        input(v-model="detail")
      list-item
        input(v-model="zipCode")
</template>
<script>
export default {
  name: "AddAddress",
  data() {
    return {
      name: '',
      phone: '',
      address: '',
      detail: '',
      zipCode: '',
    }
  },
  methods: {
    submit() {
      // FIXME:
      this.$nivagitor.pop()
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>