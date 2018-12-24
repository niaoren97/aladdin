<template lang="pug">
.single-page
  navigation-bar(title="我的神灯值")
    template(slot="right")
      span(@click="moreAction") ooo
  .content
    .stage
      .rule(@click="window.alert('todo')") 神灯值规则
      .info
        img.avatar(:src="user.avatar")
        span.nickname {{user.nickname}}
        span.lamp {{user.lampPoints}}
      .bar
        .bar-item 
          span 今年购物抵钱已省
          span {{0}}
        .bar-item
          span 今年神灯值抵扣订单
          span {{0}} 笔
    list(extra-class="list")
      list-item(@click="goto('LampExchange')", extra-class="list-item")
        span 兑换记录
        span &gt;
      list-item(@click="goto('LampDetail')", extra-class="list-item")
        span 神灯值明细
        span &gt;
    section-divider(title="神灯值猜你喜欢")
    .guess
      .product(v-for="p in guess", :key="p.id")
        .img-wrapper
          img(:src="p.image")
        .info
          p {{p.title}}
          p.redeem {{p.redeem}}
          p.price {{p.price}}

</template>
<script>
import faker from 'faker'
import _ from 'lodash'
import {fakeImage} from '@/utils'
import {mapState} from 'vuex'

const createProduct = () => ({
  id: faker.random.uuid(),
  title: faker.lorem.words(3),
  image: fakeImage(240,240),
  price: _.random(10,200, true).toFixed(2),
  redeem: _.random(1,10)*100,
  description: faker.lorem.sentence()
})

export default {
  name: "MyLamp",
  data() {
    return {
      // user: {
      //   lampPoints: 200,
      //   nickname: 'sdf',
      //   avatar: faker.image.avatar(),
      // },
      guess: [
        createProduct(),
        createProduct(),
        createProduct(),
        createProduct(),
      ]
    }
  },
  computed: {
    ...mapState({user: s => s.user.me})
  },
  methods: {
    moreAction() {

    },
    goto(cid) {
      this.$navigator.push(cid)
    }
  }
}
</script>
<style lang="stylus" scoped>
.stage
  height 3.2rem
  background-color #E53E42
  position relative
  color #fff
  padding 0.3rem
  display flex
  flex-direction column
  .info
    display flex
    flex-direction column
    align-items center
    .nickname
      color #fff
    .avatar
      border-radius 50%
      width 1rem
      height 1rem
    .lamp
      color #FBDB1B
      font-size 0.45rem
  .rule
    position absolute
    top 0.2rem
    right 0.2rem
  .bar
    display flex
    flex: 1
    .bar-item
      flex 1
      height 0.8rem
      display flex
      align-items center
      flex-direction column
      justify-content center
.list
  margin-bottom 0.3rem
.list-item
  background-color #fff
  display flex
  justify-content space-between
  padding 0 0.2rem
  align-items center
  height 0.8rem
.guess
  display flex
  flex-wrap wrap
  margin-top 0.3rem
  justify-content space-around
.product 
  border solid 1px lightgray
  width 40vw
  margin 0.2rem
  background #fff
  .img-wrapper
    width 100%
    height 2.6rem
    border-bottom solid 1px lightgray
    text-align center
    img
      max-width 100%
      max-height 100%
  .info
    p
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      margin 0.1rem
    .redeem
      color #E53E42
    .price
      text-decoration line-through
    
    text-align center
</style>