<template lang="pug">
.page
  navigation-bar
    template(slot="center")
      input.search(v-model="keyword")
    template(slot="right")
      span(@click="search") 搜索
  p 亲们都在找
  .hots
    .hot(v-for="kw in hots") {{kw}}
  .records(v-if="history.length>0")
    p 最近搜索
    .history(v-for="his in history") {{his}}
    button.clear(@click="clearHistory") 清除历史
</template>
<script>
import NavigationBar from '@/components/NavigationBar.vue'
import faker from 'faker'
import _ from 'lodash'
export default {
  name: 'SearchPage',
  data() {
    return {
      hots: _.range(0,10).map(() => faker.lorem.word()),
      history: [],
      keyword: '',
    }
  },
  components: {
    NavigationBar,
  },
  methods: {
    clearHistory() {

    },
    search() {
      this.$navigator.push('SearchResultPage')
    }
  }
}
</script>

<style lang="stylus" scoped>
.page
  min-height 100vh
  background-color #F2F2F2
.hots
  background-color #fff
  padding 0.2rem
  height 2rem
  display flex
  flex-wrap wrap
  .hot
    height 0.2rem
    border-radius 0.1rem
    border solid 1px lightgray
    padding 0 0.1rem
    line-height 0.2rem
    text-align center
.his
  border-bottom solid 1px lightgray
button.clear
  width 60%
  margin auto
  height 0.4rem
  border-radius 0.2rem 
  text-align left
  line-height 0.4rem
  border solid 1px lightgray
</style>

