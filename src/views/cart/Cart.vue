<template lang="pug">
.page
  title-bar(title='购物车')
    template(slot="right")
      span(v-if="!editing",@click="edit(true)") 编辑
      span(v-if="editing", @click="edit(false)") 取消
  .content
    .block(v-if="Object.keys(items).length===0")
      img.post(src='/static/cart-img/empty.png', alt='')
      div 您的购物车还是空空的
      div 快去
        router-link.stroll(to='/home') 逛逛
        | 吧！
    .cart(v-else)
      .head(@click="share")
      cart-bill(v-for="(g, country) in groups", :key="country",
        :items="g", :group="country", :editing="editing")
</template>

<script>
import _ from 'lodash'
import { mapState } from 'vuex'
import faker from 'faker'
import CartBill from '@/components/cart/CartBill'

function createItem() {
  return {
    id: faker.random.uuid(),
    title: faker.lorem.word(),
    spec: faker.lorem.word(),
    tariff: _.random(0, 0.2, true).toFixed(4) * 100 + '%',
    price: _.random(20, 200),
    count: 1,
    checked: false,
  }
}
export default {
  name: 'Cart',
  data() {
    return {
      editing: false,
    }
  },
  created(){
    console.log(this.$store);
    
  },
  computed: {
    ...mapState({
      items: (state) => state.cart.items,
      products: (state) => state.product.products,
    }),
    groups() {
      // group by country
      return _.groupBy(Object.values(this.items), (item) => this.products[item.product].country)
    },
  },
  methods: {
    edit(b) {
      this.editing = b
    },
    share() {
      // this.$navigator.presentModal('SharePopup', )
    },
  },
  props: {},
  components: {
    CartBill,
  },
}
</script>

<style scoped lang="stylus">
.block
  display flex
  justify-content center
  flex-direction column
  padding-top 20vw
  text-align center

.post
  width 3.2rem
  height 2.6rem
  background-color #EFC5C5
  margin auto

.stroll
  color #e53e42

.cart
  .head
    width 100vw
    height 1.8rem
    background center/ cover url('http://picsum.photos/720/180')
</style>





