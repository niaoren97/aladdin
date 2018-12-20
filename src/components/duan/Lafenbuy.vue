<template>
  <div class="wra">
    <div class="title">阿拉粉在买</div>
    <div class="line"></div>
    <div class="goods">
      <div class="good">
        <img src="/static/duan/goods1.png" alt>
        <div class="name">会呼吸的丝滑蜜粉</div>
        <div class="price">￥199.9</div>
      </div>
      <div class="good">
        <img src="/static/duan/goods1.png" alt>
        <div class="name">会呼吸的丝滑蜜粉</div>
        <div class="price">￥199.9</div>
      </div>
      <div class="good">
        <img src="/static/duan/goods1.png" alt>
        <div class="name">会呼吸的丝滑蜜粉</div>
        <div class="price">￥199.9</div>
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
.wra {
  background-color #fff
  padding 0 0.2rem
}
.title{
  border-left 0.1rem solid #f00
  font-size 0.3rem
  color #333333
  text-align left 
  padding 0.2rem
  margin 0.05rem 0
}
.line {
  border: 0.5px solid #f2f2f2;
}

.goods {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  margin-bottom 0.2rem
}

.good {
  padding: 0.3rem 0;
}

.good img {
  width: 1.4rem;
  margin-bottom: 0.3rem;
}

.name {
  font-size: 0.25rem;
  margin-bottom: 0.1rem;
}

.price {
  font-size: 0.22rem;
  color: #f00;
}
</style>


