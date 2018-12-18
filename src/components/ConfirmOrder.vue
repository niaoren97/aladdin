<template>
  <div class="wrap">
    <myheader :title="title"></myheader>
    <addr></addr>
    <goods></goods>
    <moneys></moneys>
  </div>
</template>

<script>
import goods from './cart/goods.vue';
import addr from './cart/addr.vue';
import moneys from './cart/moneys.vue';
import myheader from './cart/header.vue';

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




