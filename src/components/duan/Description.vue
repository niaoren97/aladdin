<template>
  <div v-if="bol" class="page">
    <div class="description">
      <div class="top">
        <div class="k"></div>
        <div class="title">服务说明</div>
        <img @click="back()" class="pic" src="/static/duan/x.png" alt>
      </div>
      <div class="des">
        <div class="logo">
          <img src="/static/duan/no.png" alt>
        </div>
        <div class="txt">
          <div class="tit">不支持7天无忧退货</div>
          <div class="de">该商品特殊性，一经售出不存在质量问题不享受7天无理由 退换。请在收到商品后在拆封或试穿之前仔细检查外观和附 属品。</div>
        </div>
      </div>
      <div class="des">
        <div class="logo">
          <img src="/static/duan/feiji.png" alt>
        </div>
        <div class="txt">
          <div class="tit">海外直邮</div>
          <div class="de">下单后英国直邮商品平均7-10个工作日发货，发货后平均 12-20个工作日到货，特殊情况除外。包裹将由专业国际物 流公司为您发</div>
        </div>
      </div>
      <div class="des">
        <div class="logo">
          <img src="/static/duan/zheng.png" alt>
        </div>
        <div class="txt">
          <div class="tit">正品保证</div>
          <div class="de">该商品绝对正品，假一赔十。</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data (){
    return {
      bol:true
    }
  },
  methods:{
    back(){
      this.bol=!this.bol
    }
  }
}
</script>

<style lang="stylus" scoped>
.page {
  height: 100vh;
  width 100vw
  background-color: rgba(7, 3, 3, 0.8);
  position fixed
  top 0
  left 0
  z-index 999
}

.description {
  background-color: #fff;
  position: absolute;
  bottom: 0;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.8rem;
  flex: 1;
}

.title {
  font-size: 0.3rem;
  text-align: center;
}

.pic {
  justify-self: flex-end;
  width: 0.25rem;
  height: 0.25rem;
  margin-right: 0.2rem;
}

.des {
  display: flex;
  justify-content: left;
  align-items: center;
  border-top: 1px solid #f2f2f2;
  padding: 0.2rem;
}

.logo {
  align-self: flex-start;
}

.logo img {
  margin-top: 0.05rem;
  width: 0.3rem;
  height: 0.3rem;
}

.txt {
  text-align: left;
  margin-left: 0.2rem;
}

.tit {
  margin-bottom: 0.1rem;
  color: #e53e42;
  font-size: 0.3rem;
}

.de {
  font-size: 0.2rem;
}
</style>


