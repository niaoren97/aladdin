<template>
  <div class="wrap">
    <div class="post">
      <div class="share">
        <img src="../../assets/cart-img/fxshl.png" alt="">
        <div> <a href="">去分享></a> </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="stylus" scoped>
.post {
  // border 1px solid
  height 1.8rem
  margin-top: 1rem;
  overflow hidden
  background-image: url('../../assets/cart-img/poster.png') ;
  background-size 100% 3.2rem
}

.post img {
  width  2.2rem
}
.share {
  position absolute
  top 1.5rem
  right 0.4rem
  // border 1px solid red
  width 2.2rem
  z-index 1
}
.share > div {
  width 1.2rem
  background-color #fff
  font-size 15px
}
</style>
