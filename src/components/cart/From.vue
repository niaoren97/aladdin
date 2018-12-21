<template>
  <div class="wrap">
    <div class="from">
      <!-- <span @click="change()" class="select" v-if="!bol"></span>
      <img @click="change()" v-if="bol" src="../../assets/cart-img/duihao.png" alt> -->
      <check></check>
      <img class="feiji" src="../../assets/cart-img/feiji.png" alt>
      <span :key="item.key" v-for="item in data">{{item.where}}</span>
    </div>
  </div>
</template>

<script>
import check from '@/components/cart/Check.vue'
export default {
  data() {
    return {
      data: [{ where: "日本直邮" }],
      bol: false
    };
  },
  methods: {
    change() {
      this.bol = !this.bol;
    }
  },
  components:{
    check:check
  }
};
</script>

<style lang="stylus" scoped>
.from {
  display flex
  justify-content left 
  align-items center
  background-color #fff
  text-align left 
  padding  0.2rem 0.25rem 
}
.from span {
  vertical-align middle
}
// .select {
//   display: inline-block;
//   width: 25px;
//   height: 25px;
//   border-radius: 50%;
//   border: 1px solid;
// }
img {
  width: 25px;
  vertical-align: middle;
}
.feiji {
  margin-left 0.2rem 
  margin-right 0.1rem
}
</style>
