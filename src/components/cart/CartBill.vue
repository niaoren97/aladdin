<template lang="pug">
.container
  .header
    check-box(:checked="allChecked", @click="")
    span.group {{group}}
  .items
    cart-item(v-for="item in items", :key="item.id",
      :item="item", :editing="editing")
</template>
<script>
import CartItem from './CartItem'
import {mapState, mapMutations} from 'vuex'

import _ from 'lodash'
import faker from 'faker'
function createItem(opts) {
  return {
    id: faker.random.uuid(),
    title: faker.lorem.word(),
    spec: faker.lorem.word(),
    tariff: _.random(0,0.2, true).toFixed(4)*100 + '%',
    price: _.random(20,200),
    count: 1,
    checked: false,
    ...opts,
  }
}

export default {
  name: "CartBill",
  components: {
    CartItem,
  },
  props: ['items', 'group', 'editing'],
  data() {
    return {
      // items: _.range
    }
  },
  computed: {
    products: []
  },
  methods: {
    getProduct(id) {

    }
  }
}

</script>
<style lang="stylus" scoped>
.container
  margin-bottom 0.2rem
  background-color #fff
.header
  height 0.8rem
  padding 0.2rem
  display flex
  align-items center
  border-bottom solid 1px lightgray
  .group
    margin-left 0.2rem
</style>