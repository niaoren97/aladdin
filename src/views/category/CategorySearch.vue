<template lang="pug">
.single-page
  navigation-bar(:title="category")
  .content
    .filter-panel(:style="{display: showPanel ? 'block': 'none'}")
      .mask
      .panel
    .header
      span(:class="{active: }",@click="searchBy('sales')") 销量
      span(@click="searchBy('date')") 最新
      span(@click="searchBy('price')") 价格
      span(@click="togglePanel(true)") 筛选

</template>
<script>
export default {
  name: 'CategorySearch',
  props: ['category'],
  data() {
    return {showPanel: false}
  },
  methods: {
    searchBy(s) {

    },
    togglePanel(...rest) {
      if(rest.length > 0) {
        this.showPanel = rest[0]
        }else {
        this.showPanel = !this.showPanel
      }
    },
    addFilter() {

    },
    showFilter() {

    }
  }

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
  position absolute
  width 100vw
  height 100vh
  .mask
    width 100vw
    height 100vh
    background-color rgba(30,30,30,0.3)
    position absolute

  .panel
    width 80vw
    height 100vh
</style>