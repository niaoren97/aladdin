<template lang="pug">
.single-page
  navigation-bar(title="神灯值明细")
  .content
    list
      list-item(v-for="rec in records", :key="rec.id")
        span {{rec.title}}
        span {{rec.points}}
</template>
<script>
import faker from 'faker'
function createRecord() {
  return {
    title: faker.lorem.sentence(),
    points: faker.random.number(20),
  }
}
export default {
  name: "LampDetail",
  data() {
    return {
      records: [
        createRecord(),
        createRecord(),
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>