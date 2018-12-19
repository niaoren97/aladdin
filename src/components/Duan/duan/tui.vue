<template>
  <div>
    <div class="wrap tui">
      <div class="t">
        <img src="/static/duan/no.png" alt>不支持7天无忧退货
      </div>
      <div>
        <img src="/static/duan/feiji.png" alt>海外直邮
      </div>
      <div>
        <img src="/static/duan/zheng.png" alt>正品保证
        <img @click="go()" class="jiantou" src="/static/duan/jiantouyou.png" alt>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    go() {}
  },
  components: {}
};
</script>

<style lang="stylus" scoped>
.tui {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0.1rem 0;
  margin-left: 0.2rem;
  margin-right: 0.3rem;
}

.tui .t {
  color: #ff0000;
}

.tui div {
  color: #4d4d4d;
  font-size: 0.18rem;
  vertical-align: middle;
}

.tui img {
  vertical-align: middle;
  width: 0.33rem;
  margin-right: 0.1rem;
}

.tui .jiantou {
  width: 0.2rem;
  margin-left: 0.1rem;
  vertical-align middle
}

.line {
  border-bottom: 0.2rem solid #f2f2f2;
}
</style>


