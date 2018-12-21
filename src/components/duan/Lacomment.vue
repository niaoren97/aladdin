<template>
  <div class="allxd">
    <div class="shang">
      <div class="pic">
        <img src="/static/duan/ppy1.jpg" alt>
        鸟人一个
      </div>
      <span class="time">time</span>
      <div class="comment">该模块主要内容是顾客对购买的商品的评价...该模块主要内容是 顾客对购买的商品的评价...</div>
    </div>
    <div class="zhong">
      <div class="zan" @click="add()">
        <img src="/static/duan/zan.png" alt>
        <span>{{num}}</span>
      </div>
      <div class="ping">
        <img src="/static/duan/ping.png" alt>
        <span>100</span>
      </div>
      <div class="fen">
        <img src="/static/duan/fx.png" alt>
        <span>999</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      num:0
    }
  },
  methods:{
    add(){
      this.num++;
    }
  }
};
</script>
<style lang="stylus" scoped>
.shang {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0.2rem;
  background-color: #fff;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
  font-size: 0.3rem;
}

.pic img {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  vertical-align: middle;
  text-align: center;
  margin-right: 0.3rem;
}

.time {
  font-size: 0.22rem;
}

.comment {
  width: 100vw;
  font-size: 0.2rem;
  padding: 0.2rem 0;
}

.zhong {
  background-color: #fff;
  font-size: 0.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.2rem;
  margin-bottom: 0.2rem;
}

.zhong img {
  width: 0.2rem;
  height: 0.2rem;
  margin-right: 0.2rem;
  vertical-align: middle;
}

.ping {
  border-left: 1px solid #f2f2f2;
  border-right: 1px solid #f2f2f2;
  padding: 0 0.86rem;
}
.tupian {
  background-color: #fff;
  border: 1px solid #f2f2f2;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
}

.tuwen {
  padding: 0.2rem 0.1rem;
  width: 2.6rem;
}

.tuwen img {
  width: 2.6rem;
  height: 2.2rem;
}

.wen {
  font-size: 0.2rem;
  text-align: left;
  line-height: 0.25rem;
}

</style>








