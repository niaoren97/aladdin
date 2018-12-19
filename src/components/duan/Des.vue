<template>
  <div class="des">
    <div class="top">
      <div class="logo">
        <img src="/static/duan/uk.png" alt>
      </div>
      <div class="txt">
        <span class="country">英国直邮</span>
        焕彩萃璨花蕊唇彩4.8g焕彩萃璨花 蕊唇彩4.8g 焕彩萃璨花蕊唇彩4.8g
      </div>
    </div>
    <div class="bottom">
    <div class="money">￥129</div>
    <div class="taix">关税: ￥<span>10</span></div>
    <div class="postage">邮费: ￥<span>50</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style lang="stylus" scoped>
.des {
  margin: 0.2rem;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
}

.logo {
  padding: 0.1rem;
  border: 1px solid #cccccc;
  font-size: 0;
  align-self: flex-start;
}

.logo img {
  width: 0.2rem;
  height: 0.15rem;
}

.txt {
  font-size: 0.3rem;
  text-align: left;
  margin-left: 0.22rem;
}

.country {
  font-size: 0.3rem;
  color: #e53e42;
  margin-right: 0.22rem;
}
.bottom {
  margin-top 0.3rem
}
.bottom  div{
  text-align left 
}
.money {
  color #e53e42;
  font-size 0.3rem
}
.taix,.postage {
  font-size 0.2rem
  color #4d4d4d
}
</style>
