<template>
  <div @click="onclick" class="wra">
    <img :key="item.key" v-for="item in data" :src="item.src" alt>
    <div :key="item.key" v-for="item in data" class="name">{{item.name}}</div>
    <div :key="item.key" v-for="item in data" class="price">￥{{item.price}}</div>
    <div class="line"></div>
    <div :key="item.key" v-for="item in data" class="num">还剩{{item.num}}件</div>
    <div class="qiang">马上去抢</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          src: "/static/duan/1.png",
          name: "不易脱妆口红",
          price: 59,
          num: 1000
        }
      ]
    };
  },
  methods: {
    onclick() {
      this.$emit("click");
    }
  },
  components: {}
};
</script>
 
<style lang="stylus" scoped>
.wra {
  background-color: #fff;
  width: 2rem;
  padding: 0.16rem 0.1rem;
  text-align: center;
}

img {
  height: 1.56rem;
}

.wra>div {
  margin: 0.1rem 0;
}

.name {
  font-size: 0.2rem;
  font-weight: bolder;
}

.price {
  color: #f00;
  font-size: 0.2rem;
}

.line {
  border-bottom: 0.5px solid #cccccc;
}

.num {
  font-size: 0.16rem;
}

.wra > .qiang {
  width: 1.35rem;
  height: 0.3rem;
  line-height: 0.3rem;
  color: #fff;
  font-size: 0.2rem;
  background-color: #f00;
  border-radius: 10px;
  margin: auto;
}
</style>


