<template lang="pug">
navigator
  navigation-stack
    tabs
      template(slot="bar")
        tab-bar
          //- tab-bar-item(v-for="tab,index in tabs", :key="tab", :to="tab",
          //-   :color="color", :activeColor="activeColor", @click="switchTab(index)",
          //-   :active="tab === i")
          //- tab-bar-item(to="/home", label="首页", :color="color", :activeColor="activeColor",@click="switchTab(0)",
          //-   :active="tab === 0", :icon="require('../assets/tabs/home.png')", :activeIcon="require('../assets/tabs/active-home.png')")
          tab-bar-item(to="/home", label="首页", :color="color", :activeColor="activeColor",@click="switchTab(0)",
            :active="tab === 0", :icon="('/static/tabs/home.png')", :activeIcon="('/static/tabs/active-home.png')")
          tab-bar-item(to="/category",label="分类", :color="color", :activeColor="activeColor",@click="switchTab(1)",
            :active="tab === 1", :icon="require('../assets/tabs/collection.png')", :activeIcon="require('../assets/tabs/active-collection.png')")
          tab-bar-item(to="/stock", :color="color", :activeColor="activeColor",@click="switchTab(2)",
            :active="tab === 2", )
            img.tab-icon(src="@/assets/tabs/stock.png", alt="")
          tab-bar-item(to="/cart",label="购物车", :color="color", :activeColor="activeColor",@click="switchTab(3)",
            :active="tab === 3", :icon="require('../assets/tabs/cart.png')", :activeIcon="require('../assets/tabs/active-cart.png')")
          tab-bar-item(to="/user",label="个人中心", :color="color", :activeColor="activeColor",@click="switchTab(4)",
            :active="tab === 4",  :icon="require('../assets/tabs/user.png')", :activeIcon="require('../assets/tabs/active-user.png')")
          //- tab-bar-item(to="/category")
          //- tab-bar-item(to="/stock")
          //- tab-bar-item(to="/cart")
          //- tab-bar-item(to="/user")
      keep-alive
        router-view
</template>
<script>
import Navigator from '@/components/Navigator.vue'
import Tabs from '@/components/Tabs.vue'
import TabBar from '@/components/TabBar.vue'
import TabBarItem from '@/components/TabBarItem.vue'

// TODO: the active tab should be decided by the tab state in store

export default {
  data() {
    return {
      color: '#666',
      activeColor: '#E53E42',
      tabs: ['/home', '/category', '/stock', '/cart', '/user'],
      tab: 0,
    }
  },
  methods: {
    switchTab(i) {
      this.tab = i
      console.log(this.tab);
      
    },
  },
  components: {
    Navigator,
    Tabs,
    TabBar,
    TabBarItem,
  },
}
</script>
<style lang="stylus" scoped>
.tab-icon
  width 80%
</style>

