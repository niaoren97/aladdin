<template lang="pug">
.detail
  img.feature(:src="featuredImage", @click="goDetail")
  .ships
    .ship(@click="goWith({country: c})",v-for="c in countries", :key="c.id")
      img(:src="c.icon")
      span {{c.title}}
  .tags
    .tag(@click="goWith({tag: p})",v-for="p in tags", :key="p.id")
      img(:src="p.image")
      span {{p.title}}
</template>
<script>
import { range } from 'lodash'
import faker from 'faker'
import { mapState } from 'vuex'
import { createProduct, fakeImage } from '@/utils'
function createTag() {
  return {
    id: faker.random.uuid(),
    title: faker.lorem.word(),
    image: fakeImage(120, 120),
  }
}
const hans = ['日本', '英国', '美国', '澳洲', '中国']
export default {
  name: 'CategoryDetail',
  props: ['category'],
  data() {
    return {
      countries: ['japan', 'england', 'america', 'australia', 'china'].map(
        (c, index) => ({
          id: index,
          icon: `/static/country/${c}.png`,
          title: `${hans[index]}直邮`,
        })
      ),
      featuredImage: 'http://dummyimage.com/500x200',
      // tags: range(0, 12).map(() => createTag()),
    }
  },
  beforeUpdate() {
    console.log(this.category)
  },
  computed: {
    ...mapState({
      allTags: (s) => s.tag.tags,
      categories: (s) => s.category.categories,
    }),
    tags() {
      if (this.category !== 0) {
        return this.categories[this.category].tags.reduce((ts, t) => {
          ts.push(this.allTags[t])
          return ts
        }, [])
      }
      return []
    },
  },
  watch: {
    category() {
      console.log(this.category)
      // category 0 is the 推荐 页面
      if (
        this.category !== 0 &&
        this.categories[this.category].tags.length === 0
      ) {
        this.fetchTags(this.category)
      }
    },
  },
  methods: {
    fetchTags(cid) {
      this.$store.dispatch('category/fetchTags', cid)
    },
    goDetail() {
      this.$navigator.push('CategorySearch', { category: this.category })
    },
    goWith(p) {
      this.$navigator.push('CategorySearch', {
        category: this.category,
        preFilters: {
          countries: p.country ? [p.country] : [],
          tags: p.tag ? [p.tag] : [],
        },
      })
    },
  },
}
</script>
<style lang="stylus" scoped>
.detail
  background-color #fff

.feature
  display block
  margin auto
  width 5rem
  height 2rem
  margin-top 20px

.ships
  display flex
  flex-wrap wrap
  margin 0 0.2rem
  justify-content space-around
  align-items center
  padding 0.5rem 0
  border-bottom solid 1px lightgray

  .ship
    width 33.3333%
    height 1.5rem
    display flex
    flex-direction column
    align-items center
    justify-content space-around
    text-align center

    &:last-child
      margin-right auto

    img
      width 0.5rem
      height 0.5rem

.tags
  display flex
  justify-content space-around
  flex-wrap wrap

  .tag
    width 33.3333%
    display flex
    flex-direction column
    align-items center
    text-align center

    img
      width 1.3rem
      height 1.3rem
</style>