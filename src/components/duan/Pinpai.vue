<template>
  <div class="wra">
    <div @click="push()" class="top">
      <img class="logo" :key="item.key" v-for="item in data" :src="item.logo" alt>
      <div class="bannd" :key="item.key" v-for="item in data">
        <span class="title">{{item.bannd}}</span>
        <span class="tit">法国最大化妆品品牌</span>
        <div class="look">
          <a href>
            查看
            <span class="num" :key="item.key" v-for="item in data">{{item.num}}</span>件商品
          </a>
        </div>
      </div>
    </div>
    <div class="des" :key="item.key" v-for="item in data">{{item.des}}</div>
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
  methods: {
    push() {
      this.$navigator.push('BrandDetail')
    }
  },
  components: {}
};
</script>
<style lang="stylus" scoped>
.wra {
  background-color #fff}
.top {
  display: flex;
  flex: 1;
  justify-content: left;
  align-items: center;
}

.logo {
  height: 0.6rem;
  width: 0.6rem;
  margin: 0.2rem;
  border: 1px solid #f2f2f2;
  padding 0.1rem
}

.bannd {
  text-align: left;
  width: 4rem;
}

.title {
  font-size: 0.28rem;
  font-weight: 550;
  margin-right: 0.1rem;
}

.tit, .des, .look {
  font-size: 0.17rem;
  color: #4d4d4d;
}

.des {
  margin: 0 0.2rem;
  text-align: left;
}

.num {
  font-size: 0.17rem;
  color: #f00;
}

.line {
  margin-top: 0.15rem;
  border: 0.5px solid #f2f2f2;
}
.goods{
  display flex
  justify-content space-around
  align-items center
  flex 1
  border-bottom  0.2rem solid #f2f2f2
}
.good{
  padding 0.3rem 0
}
.good img {
width 1.4rem
margin-bottom 0.3rem
}
.name {
font-size 0.25rem
margin-bottom  0.1rem 
}
.price {
font-size 0.22rem
color #f00
}
</style>


