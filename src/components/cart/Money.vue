<template>
   <div class="money">
        <div>
          <span>商品总金额：</span>
          <span class="total">1</span>
        </div>
        <div>
          <span>综合税款：</span>
          <span class="taix">2</span>
        </div>
        <div>
          <span>应付总金额：</span>
          <span class="alltotal">3</span>
        </div>
        <div >
          <span class="pay">结算(2)</span>
        </div>
      </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
.money {
  display: flex;
  flex-wrap wrap
  justify-content: space-between;
  align-items center
  background-color #fff
}
.money div {
  width 100%
  border-bottom   1px solid #f2f2f2
  padding 0.2rem
  display flex
  justify-content space-between
}
.money div:last-child {
  text-align right 
}
.money span {
  font-size 0.25rem
}
.total,.taix,.alltotal {
  text-align right 
  color #f00
}
.pay {
  background-color #f00
  border-radius 30px
  width 1.5rem
  height 0.5rem
  padding 0.1rem
  color #fff
  font-size 0.3rem
  text-align center
  margin-left auto
}
</style>











