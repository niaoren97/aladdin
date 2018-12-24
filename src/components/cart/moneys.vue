<template>
  <div class="wra">
    <p class="moneys" :key="item.key" v-for="item in data1">
      <span>{{item.tit}}</span>
      <span class="price">{{item.price}}</span>
    </p>
    <div class="tixing">
      <span class="arm">安全提醒:</span>付款成功后，阿拉灯不会以付款异常、卡单、系统 升级为由联系您。请勿泄露银行卡号、手机验证码，否则会造成 钱款的损失。
    </div>
    <p class="method" :key="item.key" v-for="item in data2">
      <span>{{item.tit}}</span>
      <span>{{item.method}}</span>
    </p>
    <div class="total">
      <p>共
        <span class="sum">2</span>件商品
      </p>
      <p>
        <span>应付:</span>
        <span class="pay">￥392.12</span>
      </p>
    </div>
    <div class="agree">
      <label>
        <input type="checkbox">本人同意并接受
        <a href>《个人委托协议》</a>和
        <a href>《用户协议》</a>
      </label>
    </div>
    <div class="confirm">确认</div>
  </div>
</template>

<script>
export default {
  name: "goods",
  data() {
    return {
      data1:[
        {tit:'商品金额:', price: '￥332.32'},
        {tit:'订单邮费:' ,price: '￥50.00'},
        {tit:'关税:',price: '￥10.00'},
        {tit:'订单金额:',price: '￥392.12'}
      ],
      data2:[
        {tit:'配送方式:',method:'日本直邮'}
      ]
    };
  },
  components: {},
  props: {}
};
</script>

<style scoped lang="stylus">
.wra {
  background-color #fff
}
.moneys {
  border-bottom: 1px solid #cccccc;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
}

.moneys > .price {
  color: #f00;
}

.tixing {
  background-color #fff
  padding: 0 5% 0.2rem;
  font-size: 16px;
  margin: 0.2rem auto;
  letter-spacing: 1px;
  line-height: 22px;
  text-align: left;
  border-bottom: 0.2rem solid #f2f2f2;
}

.arm {
  color: #ff0000;
  font-size: 20px;
}

.method {
  background-color #fff
  display: flex;
  justify-content: space-between;
  padding: 0 5% 0.12rem;
  margin: 0.2rem auto;
  border-bottom: 0.8rem solid #cccccc;
}

.total {
  background-color #fff
  padding: 0.3rem 5%;
  margin: 0.2rem auto;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
}

.pay {

  color: #f00;
}

.agree {
  background-color #fff
  width: 95%;
  margin: 0 auto;
}

a {
  color: #f00;
}

.confirm {
  width: 95%;
  margin: 0.2rem auto;
  font-size: 18px;
  color: #ffffff;
  background-color: #f00;
  border-radius: 30px;
}
</style>
