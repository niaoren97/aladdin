<template>
  <div class="wrap">
    <div class="goods">
      <check></check>
      <img :src="src" alt class="pic">
      <div class="des">
        <p class="tit">会呼吸的丝滑蜜粉</p>
        <p class="guige">规格:蜜粉</p>
        <p class="price">￥166.06</p>
      </div>
      <div class="number">
        <div class="jian" @click="jian()">-</div>
        <div class="num">{{num}}</div>
        <div class="jia" @click="jia()">+</div>
      </div>
    </div>
  </div>
</template>

<script>
import faker from 'faker'
import check from '@/components/cart/Check.vue'
export default {
  name: 'hgoods',
  data() {
    return {
      src: faker.image.avatar(),
      num: 0,
    }
  },
  methods: {
    jian() {
      if (this.num == 0) {
        return
      }
      this.num--
    },
    jia() {
      this.num++
    },
  },
  components: {
    check: check,
  },
}
</script>

<style lang="stylus" scoped>
.goods
  border 1px solid #f2f2f2
  background-color #fff
  display flex
  justify-content space-around
  align-items center

.pic
  width 1rem
  height 1rem

.des
  text-align left

.tit
  font-size 0.3rem

.guige
  font-size 0.22rem

.price
  font-size 0.22rem
  color #f00

.number
  width 1.6rem
  height 0.5rem
  align-self flex-end
  border 1px solid
  border-radius 30px
  padding 0.1rem
  margin-bottom 0.2rem
  display flex
  justify-content space-around
  align-items center
  font-size 0.2rem

.jian, .jia
  width 0.4rem
  height 0.4rem
  border 1px solid
  border-radius 50%
  font-size 0.2rem
  text-align center
  line-height 0.4rem
</style>






