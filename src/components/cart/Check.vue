<template>
  <div class="check">
    <span @click="change()" class="select" v-if="!bol"></span>
      <img @click="change()" v-if="bol" src="../../assets/cart-img/duihao.png" alt>
  </div>
</template>
<script>
export default {
   data() {
    return {
      bol: false
    };
  },
  methods: {
    change() {
      this.bol = !this.bol;
    }
  },
  props:[]
}
</script>
<style lang="stylus" scoped>
.select {
  display: inline-block;
  width 0.25rem
  height 0.25rem
  border-radius: 50%;
  border: 1px solid;
}
img {
  width 0.25rem
  height 0.25rem
  vertical-align: middle;
}
</style>





