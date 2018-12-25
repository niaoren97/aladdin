<template lang="pug">
.single-page
  navigation-bar(title="收货地址")
    template(slot="right")
      span(@click="goto('AddAddress')") 添加新地址
  .content
    address-card(v-for="addr in addresses", :key="addr.id", :address="addr.id")

</template>
<script>
import {createAddress} from '@/utils'
import {mapState, mapActions} from 'vuex'
import AddressCard from '@/components/address/AddressCard'

export default {
  name: "MyAddress",
  components: {
    AddressCard,
  },
  data() {
    return {
      // addresses: []
    }
  },
  created() {
    if(Object.keys(this.addresses).length ===0) this.fetchAddresses()
  },
  computed: {
    ...mapState({addresses: s => s.address.addresses}),

  },
  methods: {
    ...mapActions({fetchAddresses: 'address/fetchAddresses'}),
    goto(cid) {
      this.$navigator.push(cid)
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>