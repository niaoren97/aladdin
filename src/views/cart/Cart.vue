<template>
  <div class="page">
    <div class="top">
      购物车
    </div>
    <div class="content">
      <div class="con">
       <div class="post"><img src="/static/cart-img/empty.png" alt=""></div>
       <p>您的购物车还是空空的快去</p>
       <router-link to="/home" class="stroll">逛逛</router-link>吧！
      </div>    
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  data() {
    return {
      msg: "购物车"
    };
  },
  methods:{
  },
  props: {},
  components: {
    }
  }
</script>

<style scoped lang="stylus">
.top {
  color #fff
  width 100%;
  height 1rem; 
  line-height 1rem;
  font-size 0.4rem;
  text-align center
  background-color #e53e42;
  position fixed
  top 0
}
.content {
  padding 1rem 0
  display :flex;
  justify-content :center;
  align-items center;
  margin-top 1rem
}
.content p {
  margin-top 0.5rem
  color #808080;
  font-size 0.3rem;
}
.stroll {
  color #e53e42;
}
.con {
  text-align center
}
</style>





