<template>
  <div class="wrap" >
  <div class="title">产品图片</div>
  <div class="des">
    <p>该模块主要用于上面产品的产品展示图，该模块的大小取决于 该商品图片长度的多少，该模块活动性比较大，应预留够足够 的大小</p>
  </div>
  <img :key="item.key" v-for="item in data"  :src="item.src" alt="">
  </div>
</template>
<script>
  export default {
    data(){
      return {
        data:[
          {src:'/static/duan/2.png'}
        ]
      }
    },
    methods:{
    },
    components:{}
  }
</script>
 
<style lang="stylus" scoped>
.title{
  border-left 0.1rem solid #f00
  font-size 0.3rem
  color #333333
  text-align left 
  margin 0.1rem 0.2rem 
  padding-left 0.1rem
}
.des{
  color #4d4d4d
  font-size 0.22rem
  margin 0 0.2rem
  border-top 0.01rem solid #f2f2f2
  border-bottom  0.01rem solid #f2f2f2
  padding 0.1rem 0
  text-align left 
}
img {
  // width 2.5rem
  margin 0.2rem 0
  height 2.5rem
}
</style>


