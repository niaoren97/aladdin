<template>
<div class="wrap">
<myheader :title='title'></myheader>
 <ch-addr></ch-addr>
 <detialgoods></detialgoods>
<moneys></moneys>
</div>
</template>

<script>
import myheader from '@/components/cart/Header.vue'
import chaddr from '@/components/cart/Chaddr.vue';
import detialgoods from '@/components/cart/Detialgoods.vue';
import moneys from '@/components/cart/Moneys.vue'
  export default {
    name :'orderdetail',
    data () {
      return {
         title:'订单详情'
      }
    },
    components:{
      myheader:myheader,
      moneys:moneys,
      "ch-addr":chaddr,
      detialgoods:detialgoods
    },
    methods :{},
    props:{}
  }
</script>

<style lang="stylus" scoped>

</style>

