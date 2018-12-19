<template lang="pug">
.single-page  
  navigation-bar(title="消息中心")
  .content
    .message(v-for="msg in messages", :key="msg.id")
      p {{msg.date}}
      .box(@click="messageDetail")
        h2 {{msg.title}}
        div
          span 查看更多
          span &gt;

</template>
<script>
import faker from 'faker'
import _ from 'lodash'
function createMessage() {
  return {
    id: faker.random.uuid(),
    title: faker.lorem.word(),
    date: faker.date.past(),
    content: faker.lorem.sentence(),
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
    messageDetail() {
      this.$navigator.push('MessageDetail', {id: 3})
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>


