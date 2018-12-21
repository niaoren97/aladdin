<template>
  <div class="wra">
    <div class="title">产品图片</div>
    <div class="des">
      <p>该模块主要用于上面产品的产品展示图，该模块的大小取决于 该商品图片长度的多少，该模块活动性比较大，应预留够足够 的大小</p>
    </div>
    <div class="image">
      <img :key="item.key" v-for="item in data" :src="item.src" alt>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [{ src: "/static/duan/2.png" }]
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
.title {
  background-color: #fff;
  border-left: 0.1rem solid #f00;
  font-size: 0.3rem;
  color: #333333;
  text-align: left;
  padding: 0.2rem;
}

.des {
  background-color: #fff;
  color: #4d4d4d;
  font-size: 0.22rem;
  border-top: 0.01rem solid #f2f2f2;
  border-bottom: 0.01rem solid #f2f2f2;
  padding: 0.1rem 0.2rem;
  text-align: left;
}

.image {
  background-color: #fff;
  text-align: center;
}

img {
  padding: 0.2rem;
}
</style>


