<template lang="pug">
.page
  head-bar
    template(slot="left")
      span aladding
    template(slot="center")
      input.search(@click="goto('SearchPage')",placeholder="输入商品关键词")
    template(slot="right")
      img(src="/static/tabs/message.png", @click="goto('MessagePage')")
  .content
    .sidebar
      .category(:class="{active: activeCategory===c.id}", v-for="(c,index) in categories", :key="c.id",
        @click="changeTab(index)") {{c.txt}}
    .main
      keep-alive
        category-detail(:category="categories.find(x=>x.id===activeCategory).txt")
</template>
<script>
import CategoryDetail from '@/components/category/CategoryDetail'

export default {
  name: 'CategoryPage',
  components: {
    CategoryDetail,
  },
  data() {
    return {
      categories: [
        { id: 0, txt: '为您推荐' },
        { id: 1, txt: '面部护理' },
        { id: 2, txt: '底妆彩妆' },
        { id: 3, txt: '休闲零食' },
        { id: 4, txt: '身体护理' },
        { id: 5, txt: '美容美发' },
        { id: 6, txt: '生活用品' },
        { id: 7, txt: '个人护理' },
        { id: 8, txt: '保健养生' },
        { id: 9, txt: '时尚潮品' },
        { id: 10, txt: '母婴用品' },
      ],
      activeCategory: 0,
    }
  },
  methods: {
    changeTab(t) {
      this.activeCategory = t
    },
    message() {
      this.$navigator.push('MessagePage')
    },
    goto(cid) {
      this.$navigator.push(cid)
    },
  },
}
</script>
<style lang="stylus" scoped>
.search
  width 100%
  height 0.5rem
  border none
  color red
  border-radius 10px
  outline none
  text-align center
.content
  display flex
  padding-top 1rem
.sidebar
  width 1.8rem
  border-right solid 1px lightgray
.category
  flex 1
  height 0.8rem
  line-height 0.8rem
  text-align center
  border-bottom solid 1px lightgray
  &.active
    border-right solid 1px red
</style>