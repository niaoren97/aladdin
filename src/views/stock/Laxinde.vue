<template>
  <div class="single-page">
    <navigation-bar title="拉粉心得"></navigation-bar>
    <div class="top">
      <div class="all">全部心得</div>
      <div class="xian"></div>
      <div class="picture">晒图</div>
    </div>
    <div class="content">
      <div class="shang">
        <img class="pic" src="" alt="">
        <span>time</span>
      </div>
      <div class="zhong">

      </div>
      <div class="xia">
        
      </div>
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
  props: {}
};
</script>

<style lang="stylus" scoped>
.top {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
}

.all, .picture {
  text-align: center;
  font-size: 0.3rem;
  padding: 0.32rem 0;
}
.all:hover,.picture:hover{
  color #f00}
.xian {
  height: 0.8rem;
  border: 1px solid #f2f2f2;
}

.content {}
.shang {}
.zhong {}
.xia {}  
</style>


