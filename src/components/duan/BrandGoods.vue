<template>
  <div class="goods">
    <div class="post">
      <img  :src="product.image" alt>
    </div>
    <div class="content">
      <p class="title">焕彩萃璨花蕊唇彩4.8g</p>
      <p class="des">焕彩萃璨花蕊唇彩4.8g焕彩萃璨花蕊唇彩4.8g焕彩萃璨花蕊唇彩4.8g</p>
      <div class="from">
        <div>
          <img src="/static/duan/dian.png" alt>
          <img src="/static/duan/fj.png" alt>
        </div>
        <div>
          <span class="price">￥199.9</span>
        </div>
      </div>
      <p></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {},
  props:['product']
};
</script>
<style lang="stylus" scoped>
.goods {
  display: flex;
  justify-content: space-between;
  margin: 0.2rem 0;
  border-bottom: 0.1rem solid #f2f2f2;
  background-color #fff
  padding 0.1rem 0
}

.post {
  margin: 0 0.7rem;
  height: 1.56rem;
  width 1.8rem
}

.post img {
  height: 1.56rem;
}

.content {
  text-align: left;
  margin: 0 0.2rem;
}

.title {
  font-size: 0.3rem;
  color: #333333;
  margin-bottom: 0.1rem;
}

.des {
  font-size: 0.22rem;
  color: #4d4d4d;
}

.from {
  display: flex;
  justify-content space-between
  align-items: center;
  margin 0.1rem 0
}

.from img:nth-child(1) {
  width: 0.2rem;
}

.from img:nth-child(2) {
  width: 0.3rem;
  margin: 0 0.2rem;
}

.price {
  color: #e53e42;
  font-size: 0.2rem;
}
</style>



