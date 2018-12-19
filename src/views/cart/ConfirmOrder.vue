<template>
  <div class="wrap">
    <myheader :title="title"></myheader>
    <addr></addr>
    <goods></goods>
    <moneys></moneys>
  </div>
</template>

<script>
import goods from '@/components/cart/Goods.vue';
import addr from '@/components/cart/Addr.vue';
import moneys from '@/components/cart/Moneys.vue';
import myheader from '@/components/cart/Header.vue';

export default {
  name: "confirmorder",
  data() {
    return {
      title:'确认订单'
    };
  },
  props: {},
  components :{
     goods:goods,
     addr:addr,
     moneys:moneys,
     myheader:myheader
  }
};
</script>

<style scoped lang='stylus'>

</style>




