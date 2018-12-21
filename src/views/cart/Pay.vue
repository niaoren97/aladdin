<template>
  <div class="single-page">
    <navigation-bar :title="'结算中心'"></navigation-bar>
    <div class="content">
      <!-- 修改地址 -->
      <changeaddr></changeaddr>
      <!-- 应付金额 -->
      <div class="money">
        <div>本单请支付：</div>
        <div>￥392.12</div>
      </div>
      <!-- 使用第三方支付平台 -->
      <div class="other">
        <div>使用第三方支付平台：</div>
        <div class="zhi">
          <div class="logo">
            <img src="/static/cart-img/zhi.png" alt>支付宝
          </div>

          <check></check>
        </div>
        <div class="wx">
          <div class="logo">
            <img src="/static/cart-img/wx.png" alt>微信
          </div>
          <check></check>
        </div>
        <div class="close">
          <span>收起
            <img src="/static/cart-img/shangjiantou.png" alt>
          </span>
        </div>
        
      </div>
      <!-- 确认支付 -->
        <div class="sure">确认支付</div>
    </div>
  </div>
</template>
<script>
import changeaddr from "@/components/cart/Chaddr.vue";
import check from "@/components/cart/Check.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    changeaddr: changeaddr,
    check: check
  }
};
</script>
<style lang="stylus" scoped>
.money {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0.2rem;
  font-size: 0.2rem;
}

.money div:last-child {
  color: #f00;
}

.other {
  background-color: #fff;
  padding: 0.2rem;
}

.other>div {
  font-size: 0.25rem;
  border-top: 1px solid #f2f2f2;
  padding: 0.1rem 0;
}

.other img {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 5px;
  vertical-align: middle;
  margin-right: 0.2rem;
}

.zhi, .wx {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.close {
  text-align: center;
}

.close img {
  margin-left: 0.1rem;
  width: 0.4rem;
  height: 0.25rem;
  vertical-align: middle;
}

.sure {
  color #fff
  font-size 0.3rem
  text-align center
  margin 1rem auto
  width: 5rem;
  line-height 0.7rem
  border-radius: 40px;
  background-color: #f00;
}
</style>









