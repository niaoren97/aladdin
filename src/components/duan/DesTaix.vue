
<template>
  <div class="page">
    <div class="description">
      <div class="top">
        <div class="k"></div>
        <div class="title">税费说明</div>
        <img @click="$emit('back')"  class="pic" src="/static/duan/x.png" alt>
      </div>
      <div class="des">
        <div class="txt">
          <div class="tit">商品进口税</div>
          <div class="de">12%（中国海关规定，不同类目的商品征收税率不同，该商品的进口税率为12%）</div>
        </div>
      </div>
      <div class="des">
        <div class="txt">
          <div class="tit">进口税税率</div>
          <div class="de">12%（中国海关规定，不同类目的商品征收税率不同， 该商品的进口税率为12%）</div>
        </div>
      </div>
      <div class="des">
        <div class="txt">
          <div class="tit">进口税计算</div>
          <div class="de">进口税=商品完税价格（包括运费）*税率</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

};
</script>

<style lang="stylus" scoped>

.page
  height 100vh
  width 100vw
  background-color rgba(7, 3, 3, 0.8)
  position fixed
  top 0
  left 0
  z-index 999

.description
  background-color #fff
  position absolute
  bottom 0

.top
  display flex
  justify-content space-between
  align-items center
  height 0.8rem
  flex 1

.title
  font-size 0.3rem
  text-align center

.pic
  justify-self flex-end
  width 0.25rem
  height 0.25rem
  margin-right 0.2rem

.des
  display flex
  justify-content left
  align-items center
  border-top 1px solid #f2f2f2
  padding 0.2rem

.txt
  text-align left
  margin-left 0.2rem

.tit
  margin-bottom 0.1rem
  font-size 0.3rem

.de
  font-size 0.2rem
</style>


