<template lang="pug">
.single-page  
  navigation-bar(title="消息详情") 
  .content
    .title {{message.title}}
    .date {{formatTime(message.date)}}
    .main {{message.content}}
</template>
<script>
import faker from 'faker'
import moment from 'moment'
import {mapState} from 'vuex'

function formatTime(d) {
  return moment(d).format('YYYY年MM月DD日 HH:mm ')
}
function createMessage() {
  return {
    id: faker.random.uuid(),
    title: faker.lorem.word(),
    date: faker.date.past(),
    subtitle: faker.lorem.sentence(),
    content: faker.lorem.paragraph(2),

  }
}

export default {
  name: 'MessageDetail',
  props: ['mid'],
  data() {
    return {
      // message: createMessage()
    }
  },
  computed:{
    messages(){
      return this.$store.state.user.me.messages
    },
    message(){
      return this.messages.find(m => m.id === this.mid)
    }
  },
  methods: {
    formatTime,
  }
}
</script>
<style lang="stylus" scoped>
.content
  padding 0.2rem
  .title
    font-size 0.6rem
  .date
    font-size smaller
    color #aaa

  .main
    margin-top 0.2rem
    padding 0.4rem
    border solid 1px lightgray
    background-color #fff
    min-height 50vh
    box-shadow 1px 1px 0px rgba(30,30,30,0.1)
</style>


