<template lang="pug">
div.home
  head-bar
    template(slot="left")
      span aladding
    template(slot="center")
      input.search(v-model="keyword")
    template(slot="right")
      img(src="", @click="message")
  head-tabs
    template(slot="tabs")
      head-tab-bar-item(@click="switchTab(0)", :active="tab===0")
        span 推荐
      head-tab-bar-item(@click="switchTab(1)", :active="tab===1")
        span 贼惦记
      head-tab-bar-item(@click="switchTab(2)", :active="tab===2")
        span 母婴
      head-tab-bar-item(@click="switchTab(3)", :active="tab===3")
        span 美食
    template(slot="content")
      keep-alive
        component(:is="componentId") 
</template>

<script>
// @ is an alias to /src
import HeadBar from '@/components/HeadBar.vue'
import HeadTabs from '@/components/HeadTabs.vue'
import HeadTabBarItem from '@/components/HeadTabBarItem.vue'
import HomeRecommend from '@/structure/HomeRecommend.vue'
import HomeMemo from '@/structure/HomeMemo.vue'
import HomeBaby from '@/structure/HomeBaby.vue'
import HomeFood from '@/structure/HomeFood.vue'

export default {
  name: 'home',
  data() {
    return { tab: 0, componentId: 'HomeRecommend', keyword: '' }
  },
  components: {
    HeadBar,
    HeadTabs,
    HeadTabBarItem,
    HomeRecommend,
    HomeMemo,
    HomeBaby,
    HomeFood,
  },
  methods: {
    message() {
      this.$navigator.push()
    },
    switchTab(t) {
      this.tab = t
      console.log(this.tab);
      
      this.componentId = ['HomeRecommend', 'HomeMemo', 'HomeBaby', 'HomeFood'][
        this.tab
      ]
    },
  },
}
</script>
