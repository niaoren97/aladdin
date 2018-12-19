<template lang="pug">
.single-page
  navigation-bar(title="我的神灯值")
    template(slot="right")
      span(@click="moreAction") ooo
  .content
    .stage
      .info
        img(:src="user.avatar")
        span {{user.nickname}}
        span {{user.lampPoints}}
      .bar
        .bar-item 
          span 今年购物抵钱已省
          span {{0}}
        .bar-item
          span 今年神灯值抵扣订单
          span {{0}} 笔
    list
      list-item(@click="goto('LampExchange')")
        span 兑换记录
      list-item(@click="goto('LampDetail')")
        span 神灯值明细
    section-divider(title="神灯值猜你喜欢")
    .guess
      .product(v-for="p in guess", :key="p.id")
        img(:src="p.image")
        p {{p.title}}

</template>
<script>
import faker from 'faker'
import {fakeImage} from '@/utils'

const createProduct = () => ({
  id: faker.random.uuid(),
  title: faker.lorem.words(3),
  image: fakeImage(240,240),
  description: faker.lorem.sentence()
})

export default {
  name: "MyLamp",
  data() {
    return {
      user: {
        lampPoints: 200,
        nickname: 'sdf',
        avatar: faker.image.avatar(),
      },
      guess: [
        createProduct(),
        createProduct(),
        createProduct(),
        createProduct(),
      ]
    }
  },
  methods: {
    goto(cid) {
      this.$navigator.push(cid)
    }
  }
}
</script>
<style lang="stylus" scoped>
.guess
  display flex
  flex-wrap wrap
  justify-content space-around
.product 
  border solid 1px lightgray
  width 40vw
</style>