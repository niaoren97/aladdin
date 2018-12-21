<template>
  <div class="wrap">
    <div class="goods">
      <div class="from">海外直邮订单</div>
      <div class="center">
        <div class="left">
          <img src="../../assets/cart-img/goods.png" alt>
        </div>
        <div class="right">
          <p class="name">会呼吸的丝滑蜜粉</p>
          <p class="guige">规格:
            <span>蜜粉</span>
          </p>
          <p class="price">￥
            <span>166.06</span>
          </p>
          <p></p>
        </div>
      </div>
      <div class="zhankai">显示另外1件(共2件)
        <img src="../../assets/cart-img/xiajiantou.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goods",
  data() {
    return {
      data: {
        name: "会呼吸的丝滑蜜粉",
        des: "蜜粉",
        price: 166.06
      },
      data1: [
        { tit: "商品金额:", price: "￥332.32" },
        { tit: "订单邮费:", price: "￥50.00" },
        { tit: "关税:", price: "￥10.00" },
        { tit: "订单金额:", price: "￥392.12" }
      ],
      data2: [{ tit: "配送方式:", method: "日本直邮" }],
      data3: []
    };
  },
  components: {},
  props: {}
};
</script>

<style scoped lang="stylus">
.goods
  border-top 0.2rem solid #f2f2f2
  border-bottom 0.2rem solid #f2f2f2

.from
  text-align left
  font-size 20px
  margin 0.3rem 0.2rem
  letter-spacing 1px

.center
  display flex
  flex-wrap wrap
  align-items center
  justify-content space-between
  border-top 0.1px solid #cccccc
  border-bottom 0.1px solid #cccccc

.left
  width 40%

.left img
  padding 0.5rem

.right
  flex 1

.right p
  line-height 0.6rem
  text-align left

.name
  font-size 20px
  color #4d4d4d

.guige, .price
  font-size 16px

.price, .price>span
  color #f00

.money>span
  color #f00

.zhankai
  padding 0.2rem
</style>
