<template lang="pug">
.container
  .header
    span.receiver {{entity.receiver}}
    span {{entity.phone}}
  .detail {{fullAddress}}
  .footer
    radio(:checked="fullAddress.isDefault")
    .actions
      .action(@click="editAddress(address)")
        img(src="/static/icons/edit.png")
        span 编辑
      .action(@click="deleteAddress(address)")
        img(src="/static/icons/trash.png")
        span 删除
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'AddressCard',
  props: ['address'],
  computed: {
    ...mapState({ addresses: (s) => s.address.addresses }),
    entity() {
      return this.addresses[this.address]
    },
    fullAddress() {
      const a = this.entity
      return `${a.province}${a.area}${a.county}${a.detail} 邮编: ${a.zipCode}`
    },
  },
  methods: {
    editAddress() {
      this.$navigator.push('EditAddress', { id: this.address })
    },
    deleteAddress() {
      this.$store.dispatch('address/deleteAddress', { id: this.address })
    },
  },
}
</script>
<style lang="stylus" scoped>
.container
  padding 0 0.2rem
  margin-bottom 0.2rem
  background-color #fff
.header
  .receiver
    margin-right 20vw

.detail
  border-bottom solid 1px lightgray
  padding 0.2rem 0

.footer
  display flex
  justify-content space-between
  padding 0.2rem 0
  .actions
    display flex
    .action
      margin-left 0.2rem
      img
        width 0.3rem
        height 0.3rem
</style>