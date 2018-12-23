<template lang="pug">
.single-page
  navigation-bar(:title="category")
  .content
    .filter-panel(:style="{display: showPanel ? 'block': 'none'}")
      .mask(@click.self="showPanel = false; showMorePanel = false;")
      .panel
        .panel-content
          .section
            .section-header
              img(src='/static/category/ship.png')
              span 发货地
            .items
              span.item(:class="{active: selectedCountries.includes(count)}",v-for="count in countries", :key="count.id",
                @click="select('countries',count.id)") {{count.title}}
          .section
            .section-header
              img(src='/static/category/makeups.png')
              span 商品类型
            .items
              span.item(:class="{active: selectedGroups.includes(g)}",v-for="g in groups", :key="g.id",
                @click="select('groups', g.id)") {{g.title}}
          .section
            .section-header
              img(src="/static/category/list.png")
              span 分类
            .items
              span.item(:class="{active: selectedTags.includes(c)}", v-for="c in hotTags", :key="c.id",
                @click="select('tags',c.id)") {{c.title}}
              span.item(@click="showMoreTags") 更多分类
        .actions
          span(@click="reset") 重置
          span.confirm(@click="confirm") 确定
      .panel.more-panel(v-if="showMorePanel")
        .navs
          img(src="/static/icons/back.png", @click="showMorePanel = false")
          span.bold 分类
          span(@click="confirmMore") 确定
        .list-item(:class="{active: selectedTags.includes(c)}",v-for="c in tags",:key="c.id", @click="select('tags', c.id)") {{c.title}}
          img(src="/static/icons/checked.png", v-if="selectedTags.includes(c)")



    .header
      span(:class="{active: tabActive('sales')}",@click="searchBy('sales')") 销量
      span(:class="{active: tabActive('date')}",@click="searchBy('date')") 最新
      span(:class="{active: tabActive('priceUp') || tabActive('priceDown')}",@click="searchBy('price')") 价格
      span(@click="togglePanel(true)") 筛选
    .filters(v-if="filterLength > 0")
      template(@click="removeFilter",v-for="(list, c) in combinedFilters", )
        .filter-item(v-for="f in list", :key="f.id",
          @click="removeFilter(c, f)") {{f.title}}
      .filter-item.clear-filter(@click="clearFilters") 清空
    .products
      product-preview(v-for="p in searchResults", :key="p.id", :product="p")

</template>
<script>
import _ from 'lodash'
import faker from 'faker'
import { createProduct } from '@/utils'
import ProductPreview from '@/components/ProductPreview'

export default {
  name: 'CategorySearch',
  components: {
    ProductPreview,
  },
  props: ['category', 'preFilters'],
  data() {
    return {
      showPanel: false,
      showMorePanel: false,
      countries: ['日本', '美国', '中国', '澳大利亚', '英国'].map((v, i) => ({
        id: faker.random.uuid(),
        title: v,
      })),
      groups: [{ id: 1, title: '促销商品' }, { id: 2, title: '首发商品' }],
      tags: _.range(0, 30).map(() => ({
        id: faker.random.uuid(),
        title: faker.lorem.word(),
      })),
      selectedTags: [],
      selectedGroups: [],
      selectedCountries: [],
      sortBy: 'sales',
      filters: { countries: [], tags: [], groups: [] },
      searchResults: _.range(0, 4).map(() => createProduct()),
    }
  },
  created() {
    // merge props to data
    this.filters.countries = [...this.preFilters.countries]
    this.filters.tags = this.preFilters.tags
    console.log(this.filters);
    
  },
  computed: {
    hotTags() {
      // return the most host 20 categories from all categories
      // FIXME:
      return this.tags.slice(0, 20)
    },
    combinedFilters() {
      return {
        countries: this.filters.countries,
        groups: this.filters.groups,
        tags: this.filters.tags,
      }
    },
    filterLength() {
      const { filters } = this
      return (
        filters.countries.length +
        filters.groups.length +
        filters.tags.length
      )
    },
  },
  methods: {
    reset() {
      this.selectedTags = []
      this.selectedGroups = []
      this.selectedCountries = []
    },
    confirm() {
      this.filters.countries = this.selectedCountries
      this.filters.groups = this.selectedGroups
      this.filters.tags = this.selectedTags
      this.showPanel = false
    },
    confirmMore() {
      this.showMorePanel = false
    },
    removeFilter(c, f) {
      const ind = this.filters[c].indexOf(f)
      this.filters[c].splice(ind, 1)
    },
    clearFilters() {
      this.filters.countries = []
      this.filters.groups = []
      this.filters.tags = []
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
    showMoreTags() {
      this.showMorePanel = true
    },
    addFilter() {},
    showFilter() {},
    select(c, id) {
      const key = `selected${_.capitalize(c)}`
      const cs = this[key]
      const ind = cs.findIndex((item) => item.id === id)
      if (ind > -1) {
        cs.splice(ind, 1)
      } else {
        cs.push(this[c].find((x) => x.id === id))
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
  position sticky
  top 0rem

  span.active
    color red
.filters
  padding 0.2rem
  background-color #fff
  line-height 0.8rem
.filter-item
  display inline-block
  height 0.6rem
  line-height 0.6rem
  border-radius 0.1rem
  margin-right 0.2rem
  padding 0 0.2rem
  background-color #999999
  color #fff
  &::after
    content 'X'
    padding-left 0.1rem
.clear-filter
  border solid 1px gray
  background-color #fff
  color #000
  &::after
    content ''
    padding-left 0
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
    overflow scroll
    background #fff

    .panel-content
      height calc(100vh - 1rem)
      overflow scroll
.more-panel
  position absolute
  width 100%
  height 100%
  .navs
    display flex
    justify-content space-between
    align-items center
    padding 0.2rem
    background-color #f2f2f2
    margin -0.2rem
    span.bold
      font-size 0.4rem

  .list-item
    padding 0.2rem
    border-bottom solid 1px lightgray
    display flex
    justify-content space-between
    align-items center
    &.active
      color #E53E43
    &:last-child
      border-bottom none
    img
      width 0.25rem
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
      width 0
      height 0
      border solid 3vw  #E53E42
      border-right-width 4vw
      border-left-width 4vw
      border-right-color transparent
      border-bottom-color transparent
    &::after
      content ''
      position absolute
      top 1px
      left 4px
      width 3vw
      height 2vw
      border-left solid 2px white
      border-bottom solid 2px white
      transform rotateZ(-40deg)

.actions
  display flex
  position absolute
  left 0
  bottom 0
  width 100%
  height 1rem

  span
    width 50%
    height 1rem
    display flex
    align-items center
    justify-content center
    background-color #f2f2f2

    &.confirm
      background #E0403E
      color #fff
</style>