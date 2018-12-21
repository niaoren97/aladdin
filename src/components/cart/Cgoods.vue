<template>
  <div class="goods">
    <div class="post">
      <img :src="src" alt="">
      <div class="tit">
        不易脱妆口红
      </div>
      <div class="price">￥199</div>
    </div>
  </div>
</template>
<script>
import faker from 'faker'
export default {
  data() {
    return{
      src: faker.image.avatar(),
    }
  }
}
</script>
<style lang="stylus" scoped>
.goods {
  width 1.4rem
  display flex
  flex-wrap wrap
  justify-content center
  padding .1rem
  width 25%
}
.post {
  text-align center
  padding 0.1rem
  
}
.post img {
  width 1rem
  height 1.6rem
}
.post img:nth-child  {
  border-right 1px solid
}
.tit{
  font-size 0.2rem
  text-align center
}
.price {
  text-align center
  font-size 0.18rem
  color #f00
}
</style>








