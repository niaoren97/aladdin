<template id='cart'>
  <div class="wrap">
    <div class="top">
      <p>购物车</p>
    </div>
    <div class="content">
      <div>
       <div class="post"><img src="../assets/cart-img/empty.png" alt=""></div>
       <p>您的购物车还是空空的快去<a href="" class="stroll">逛逛</a>吧！</p>
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
  props: {},
  components: {
  }
};
</script>

<style scoped lang="stylus">
.wrap {
  height :100vh;
  display :flex;
  flex-wrap wrap;
  justify-content :center;
  align-items ceil; 
}
.top {
  width 100%;
  height 1rem; 
  font-size 0.4rem;
  line-height 1rem;
  background-color #e53e42;
  position fixed
  top 0
}
.top p {
   color #fff;
   letter-spacing 3px;
}
.content {
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

</style>





