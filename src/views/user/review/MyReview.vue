<template lang="pug">
.single-page
  navigation-bar(title="我的心得")
  .content 
    .mine 
      div 
        img(class="pic" :src="src") 
        span(class="ni")|白驼山上     
      .comment 
        |该模块主要内容是顾客对购买的商品的评价...该模块主要内容是 顾客对购买的商品的评价...
      .pictures
        img(class="picture" :src="src")
      .product 
        img(class="image" :src="src")
        .description
          p|商品名字
          p|海外直邮
          p|￥166.06
    .other
      div 
        img(class="pic" :src="src") 
        span(class="ni")|啊哈哈  
      .comment 
        |该模块主要内容是其他顾客对该商品的评论...该模块主要内容是 其他顾客对该商品的评论
        
</template>
<script>
import faker from "faker";
export default {
  name: "MyReview",
  data() {
    return {
      src: faker.image.avatar()
    };
  }
};
</script>
<style lang="stylus" scoped>
  
.mine 
  margin-bottom 0.2rem
  background-color #fff

.pic
  width 0.8rem
  height 0.8rem
  border-radius 50%
  vertical-align middle
  margin 0.2rem

.ni
  font-size 0.3rem

.comment
  font-size 0.2rem
  text-align left
  padding 0 0.2rem

.pictures
  padding 0.2rem

.picture
  width 2.6rem
  height 2rem

.product
  border 1px solid #f2f2f2
  display flex
  justify-content left
  align-items center
  padding 0.2rem

.image
  width 1rem
  height 1rem
  margin-right 0.5rem

.description
  text-align left
  font-size 0.2rem
  border-left 1px solid #f2f2f2
  padding 0 0.5rem

.description p
  padding 0.05rem 0
  margin 0
.description p:last-child
  color #f00

.other 
  background-color #fff
</style>