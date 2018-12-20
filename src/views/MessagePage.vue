<template lang="pug">
.single-page  
  navigation-bar(title="消息中心")
  .content
    .message(v-for="msg in messages", :key="msg.id")
      p {{formatTime(msg.date)}}
      .box(@click="goDetail(msg.id)")
        .title {{msg.title}}
        .main
          .img-wrapper
            img(src="http://dummyimage.com/140x140", alt="")
          div {{msg.subtitle}}
        .footer(v-if="msg.hasMore", @click="goDetail(msg.id)")
          span 查看更多
          span &gt;

</template>
<script>
import faker from 'faker'
import _ from 'lodash'
import moment from 'moment'

function formatTime(d) {
  return moment(d).format('YYYY年MM月DD日 HH:mm ')
}
function createMessage() {
  return {
    id: faker.random.uuid(),
    title: faker.lorem.word(),
    date: faker.date.past(),
    subtitle: faker.lorem.sentence(),
    content: faker.lorem.sentence(),
    hasMore: faker.random.boolean()
  }
}

export default {
  name: 'MessagePage',
  data() {
    return {
      messages: _.range(0, 3).map(() => createMessage()),
    }
  },
  methods: {
    goDetail(id) {
      this.$navigator.push('MessageDetail', {id})
    },
    formatTime,
  }
}
</script>
<style lang="stylus" scoped>
.message 
  padding 0.2rem
  p
    text-align center
  .box
    border solid 1px lightgray
    padding 0.1rem
    border-radius 5px
    background-color #fff
    .main
      display flex
      align-items flex-start
      padding 0.1rem 0
      .img-wrapper
        width 1.4rem
        height 1.4rem
        margin-right 0.2rem
        img
          width 100%
    .footer
      display flex
      padding 0.1rem 0
      border-top solid 1px lightgray
      justify-content space-between


</style>


