<template>
  <div>
    <div class="lafen">
      <div class="left">阿拉粉心得</div>
      <div class="right" @click="push">查看更多
        <img class="jiantou" src="/static/duan/jiantouyou.png" alt>
      </div>
    </div>
    <div class="line"></div>
    <div class="comments">
      <comment></comment>
      <comment></comment>
      <comment></comment>
      <comment></comment>
      <comment></comment>
    </div>
  </div>
</template>
<script>
import comment from "@/components/duan/Comment.vue";
import Laxinde from '@/views/stock/Laxinde.vue';
export default {
  data() { 
    return {};
  },
  methods: {
    push() {
      this.$navigator.push('Laxinde')
    }
  },
  components: {
    comment: comment
  }
};
</script>

<style lang="stylus" scoped>
.lafen {
  background-color #fff
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0.15rem 0.2rem;
}

.left {
  border-left: 0.1rem #e53e42 solid;
  padding-left: 0.05rem;
  font-size: 0.26rem;
  color: #6e6e6e;
  font-weight: bolder;
}

.right {
  font-size: 0.2rem;
  vertical-align: middle;
}

.jiantou {
  width: 0.2rem;
  margin-left: 0.1rem;
  vertical-align: middle;
}

.line {
  border-bottom: 1px solid #f2f2f2;
}
.comments {
  background-color #fff
  display flex
  align-items center
  overflow scroll
}
.comments::-webkit-scrollbar {
  display none
  width 0
  height 0
}
</style>


