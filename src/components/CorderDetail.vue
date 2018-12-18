<template>
<div class="wrap">
<myheader :title='title'></myheader>
 <ch-addr></ch-addr>
 <detialgoods></detialgoods>
<moneys></moneys>
</div>
</template>

<script>
import myheader from './cart/header.vue'
import chaddr from './cart/chaddr.vue';
import detialgoods from './cart/detialgoods.vue';
import moneys from './cart/moneys.vue'
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

