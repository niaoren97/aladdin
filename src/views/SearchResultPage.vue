<template lang="pug">
.single-page  
  navigation-bar(title="搜索结果")
    template(slot="center")
      .input-wrapper
        input.search(v-model="keyword")
        .clear-input(v-if="toSearch.length > 0",@click="clearInput") X
    template(slot="right")
      span(@click="search") 搜索
  .content 
    .header
      span 默认
      span 价格
      span x

</template>
<script>
// import Search from 'module'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'SearchResultPage',
  props: ['keyword'],
  data() {
    return {
      // products: []
      toSearch: ''
    }
  },
  created() {
    this.toSearch = this.keyword
  },
  computed: {

  },
  methods: {
    clearInput() {
      this.toSearch = ''
    }
  }

}
</script>
<style lang="stylus" scoped>
.input-wrapper
  position relative
  input
    width 100%
    outline none
    border none
    padding-left 30px
    border-radius 5px
  .search-icon
    position absolute
    left 0
  .clear-input
    position absolute
      right 10px
      border-radius 50%
      border soldi 1px gray
</style>


