<template lang="pug">
.page
  slot
  .stacks(ref='stacks')
    template(v-for='stack in stacks')
      transition(:key='stack.payload.id', name='slide', appear='')
        navigation-stack
          component(:is='stack.comp', v-bind='stack.payload')
</template>

<script >
import Vue from 'vue'
// import Tabs from './Tabs.vue'
import NavigationStack from './NavigationStack.vue'

const Navigator = Vue.extend({
  data: function() {
    return {
      stacks: [],
      key: 1,
    }
  },
  components: {
    NavigationStack,
  },
  created() {
    Navigator.instance = this
    console.log(Navigator.instance)
  },
  mounted() {
    this.$nextTick().then(() => {
      console.log(this.$$d)

      // this.$children[0].$navigator = this
    })
    // this.$slots.default.$navigator = this
  },
  methods: {
    push(comp, payload) {
      console.log(comp, payload)
      payload.id = this.id++
      this.stacks.push({ comp, payload })
    },
    pop() {
      this.stacks.pop()
    },
    alert(x) {
      window.alert(x)
    },
  },
})
export default Navigator
</script>

<style lang="stylus" scoped>
.page
  width 100%
  height 100vh

.slide-enter-active, .slide-leave-active
  transition-duration 1.5s

.slide-enter, .slide-leave-to
  transform translateX(100%)
</style>
