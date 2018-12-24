<template>
  <div class="page">
    <navigation-bar :title="'确认订单'"></navigation-bar>
    <div class="content">
      <div class="top">
        <div class="rb"></div>
        <div class="address">
          <img @click="push()" src="../../assets/cart-img/add.png" alt>
          <span>添加收货地址</span>
        </div>
        <div class="rb"></div>       
      </div>

      <goods></goods>
      <moneys></moneys>
    </div>
  </div>
</template>

<script>
import goods from "@/components/cart/Goods.vue";
import addr from "@/components/cart/Addr.vue";
import moneys from "@/components/cart/Moneys.vue";

export default {
  name: "confirmorder",
  data() {
    return {};
  },
  methods:{
    push() {
     this.$navigator.push('AddAddress')
    }
  },
  props: {},
  components: {
    goods: goods,
    addr: addr,
    moneys: moneys
  }
};
</script>

<style scoped lang='stylus'>
.top
  border-top 0.1rem solid #f2f2f2

.top .rb
  width 100%
  height 0.1rem
  background-image url('../../assets/cart-img/r&b.png')

.top .address
  background-color #fff
  display flex
  justify-content left
  align-items center
  padding 0.2rem

.address img
  width 0.5rem
  margin 0 0.3rem

.starts
  width 100%
  height 0.1rem
  background-image url('../../assets/cart-img/starts.png')

</style>




