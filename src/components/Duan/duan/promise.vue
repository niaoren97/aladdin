<template>
  <div class="wrap">
    <div class="title">服务承诺</div>
    <div class="line"></div>
    <div class="goods">
      <div class="good">
        <img src="/static/duan/zhengpin.png" alt>
        <div class="name">正品保证</div>
      </div>
      <div class="good">
        <img src="/static/duan/fj.png" alt>
        <div class="name">海外直邮</div>
      </div>
      <div class="good">
        <img src="/static/duan/bu.png" alt>
        <div class="name">超时发货补贴</div>
      </div>
      <div class="good">
        <img src="/static/duan/picc.png" alt>
        <div class="name">PICC承保</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          logo: "/static/duan/logo.png",
          bannd: "法国兰蔻",
          des:
            "兰蔻1935年诞生于法国，是由Armand Petitjean（阿曼达·珀蒂让）创办的品牌。作为全球知名的高端化妆品品牌，兰蔻涉足护肤、彩妆、香水等多个产品领域，主要面向教育程度、收入水平较高，年龄在25～40岁的成熟女性。",
          num: 10
        }
      ]
    };
  },
  methods: {},
  components: {}
};
</script>
<style lang="stylus" scoped>
.title{
  border-left 0.1rem solid #f00
  font-size 0.3rem
  color #333333
  text-align left 
  margin 0.1rem 0.2rem 
  padding-left 0.1rem
}
.line {
  margin-top: 0.15rem;
  border: 0.5px solid #f2f2f2;
}

.goods {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  border-bottom: 0.2rem solid #f2f2f2;
}

.good {
  padding: 0.3rem 0;
}

.good img {
  width: 0.64rem;
  height 0.64rem
  margin-bottom: 0.3rem;
}

.name {
  font-size: 0.18rem;
  margin-bottom: 0.1rem;
}
</style>


