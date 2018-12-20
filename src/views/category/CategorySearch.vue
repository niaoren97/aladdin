<template lang="pug">
.single-page
  navigation-bar(:title="category")
  .content
    .filter-panel(:style="{display: showPanel ? 'block': 'none'}")
      .mask(@click.self="showPanel = !showPanel")
      .panel
        .section
          .section-header
            img(src='/static/category/ship.png')
            span 发货地
          .items
            span.item(:class="{active: selectedCountries.includes(count)}",v-for="count in countries", :key="count.id",
              @click="selectCountry(count.id)") {{count.title}}
        .section
          .section-header
            img(src='/static/category/makeups.png')
            span 商品类型
          .items
            span.item(:class="{active: selectedGroups.includes(g)}",v-for="g in groups", :key="g.id",
              @click="selectGroup(g)") {{g.title}}
        .section
          .section-header
            img(src="/static/category/list.png")
            span 分类
          .items
            span.item(:class="{active: selectedCategories.includes(c)}", v-for="c in hotCategories", :key="c.id",
              @click="selectCategory(c.id)") {{c.title}}
            span.item(@click="showMoreCategory") 更多分类
        .actions
          span(@click="reset") 重置
          span(@click="confirm") 确定


    .header
      span(:class="{active: tabActive('sales')}",@click="searchBy('sales')") 销量
      span(:class="{active: tabActive('date')}",@click="searchBy('date')") 最新
      span(:class="{active: tabActive('priceUp') || tabActive('priceDown')}",@click="searchBy('price')") 价格
      span(@click="togglePanel(true)") 筛选
    .filters(v-if="combinedFilters.length > 0")
      .filter(@click="removeFilter",v-for="(list, c) in combinedFilters", :key="f",
        )
        .filter-item(v-for="f in list", :key="f",
          @click="removeFilter(c, f)") {{f}}
      .clear-filter(@click="clearFilters") 清空
    .products
      product-preview(v-for="p in searchResults", :key="p.id", :product="p")

</template>
<script>
import _ from 'lodash'
import faker from 'faker'
import {createProduct} from '@/utils'
import ProductPreview from '@/components/ProductPreview'

export default {
  name: 'CategorySearch',
  props: ['category'],
  data() {
    return {
      showPanel: false,
      countries: ['日本', '美国', '中国', '澳大利亚', '英国'].map((v,i) => ({id: i, title: v})),
      groups: [{id: 1, title: '促销商品'},{id: 2, title:  '首发商品'}],
      categories: _.range(0, 30).map(() => ({
        id: faker.random.uuid(),
        title: faker.lorem.word(),
      })),
      selectedCategories: [],
      selectedGroups: [],
      selectedCountries: [],
      sortBy: 'sales',
      filters: { countries: [], categories: [], groups: [] },
      searchResults: _.range(0,4).map(() => createProduct())
    }
  },
  computed: {

    hotCategories() {
      // return the most host 20 categories from all categories
      // FIXME:
      return this.categories.slice(0, 20)
    },
    combinedFilters() {
      return {countries: this.filters.countries,
      groups: this.filters.groups,
      categories: this.filters.categories.map(c=>c.title)}
    }
  },
  methods: {
    reset() {
      this.selectedCategories = []
      this.selectedGroups = []
      this.selectedCountries = []
    },
    confirm() {
      this.filters.countries = this.selectedCountries
      this.filters.groups = this.selectedGroups
      this.filters.categories = this.selectedCategories
    },
    removeFilter(c, f) {
      if(c === 'categories') {
        const 
      }else {
        const ind = this.filters[c].indexOf(f)
        this.filters[c].splice(ind , 1)
      }
    },
    clearFilters() {
      this.filters.countries = []
      this.filters.groups = []
      this.filters.categories = []
    },
    tabActive(s) {
      return this.sortBy === s
    },
    searchBy(s) {
      if (s === 'price') {
        if (this.sortBy === 'priceUp') this.sortBy = 'priceDown'
        else this.sortBy = 'priceUp'
      } else {
        this.sortBy = s
      }
      // TODO: search!
    },
    togglePanel(...rest) {
      if (rest.length > 0) {
        this.showPanel = rest[0]
      } else {
        this.showPanel = !this.showPanel
      }
    },
    showMoreCategory() {},
    addFilter() {},
    showFilter() {},
    select(c, item) {
      const key = `selected${_.capitalize(c)}`
      const cs = this.selectedCountries
      console.log(c, cs)
      const ind = cs.indexOf(c)
      if (ind > -1) {
        cs.splice(ind, 1)
      } else {
        cs.push(c)
      }
    },
    selectCountry(c) {
      const cs = this.selectedCountries
      console.log(c, cs)
      const ind = cs.indexOf(c)
      if (ind > -1) {
        cs.splice(ind, 1)
      } else {
        cs.push(c)
      }
    },
    selectGroup(g) {
      const cs = this.selectedGroups
      const ind = cs.indexOf(g)
      if (ind > -1) {
        cs.splice(ind, 1)
      } else {
        cs.push(g)
      }
    },
    selectCategory(cid) {
      const cs = this.selectedCategories
      const ind = cs.findIndex((cat) => cat.id === cid)
      if (ind > -1) {
        cs.splice(ind, 1)
      } else {
        cs.push(this.categories.find((c) => c.id === cid))
      }
    },
  },
}
</script>
<style lang="stylus" scoped>
.header
  display flex
  justify-content space-around
  align-items center
  height 0.8rem
  background #F2F2F2

  span.active
    color red

.filter-panel
  position fixed
  top 0
  left 0
  width 100vw
  height 100vh
  z-index 100000

  .mask
    width 100vw
    height 100vh
    background-color rgba(30, 30, 30, 0.3)
    position absolute

  .panel
    width 81vw
    position absolute
    padding 1.5vw
    margin-left 19vw
    height 100vh
    background #fff

.section
  padding 3vw 0
  border-bottom solid 1px lightgray

.section-header
  padding 0 1.5vw

  img
    width 5vw
    vertical-align sub
    margin-right 3vw

.items
  display flex
  flex-wrap wrap
  // justify-content space-around

.item
  // margin-bottom 0.2rem
  margin 1.5vw
  width 23vw
  height 12vw
  background-color #F2F2F2
  border-radius 0.1rem
  display flex
  justify-content center
  align-items center
  overflow hidden

  &.active
    background-color #FDD3D3
    color #E53E42
    position relative

    &::before
      content ''
      position absolute
      top 0
      left 0
      height 0.4rem
      width 0.5rem
      background-color #E53E42
      color #fff
</style>