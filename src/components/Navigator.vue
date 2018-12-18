<template lang="pug">
.page
  slot
  .stacks(ref='stacks')
    template(v-for='stack in stacks')
      transition(:key='stack.payload.id', name='slide', appear)
        navigation-stack
          component(:is='stack.comp', v-bind='stack.payload')
  .modals(ref='modals')
    div.modal-mask(v-if="modals.length > 0")
    template(v-for='modal in modals')
      transition(:key='modal.payload.id', name='modal', appear)
        navigation-stack
          component(:is='modal.comp', v-bind='modal.payload')

</template>

<script>
import Vue from 'vue'
import NavigationStack from './NavigationStack.vue'
import ProductDetail from '@/views/ProductDetail.vue'
// The whole app should only has one navigator instance

const Navigator = Vue.extend({
  data: function() {
    return {
      stacks: [],
      modals: [],
      id: 0,
      key: 1,
      presentingModal: false,
    }
  },
  components: {
    NavigationStack,
    ProductDetail,
  },
  created() {
    Navigator.instance = this
    console.log(Navigator.instance)
  },
  methods: {
    push(comp, payload) {
      if (this.modals.length === 0) {
        // console.log(comp, payload)
        payload.id = this.id++
        this.stacks.push({ comp, payload })
        console.log(this.stacks);
        
      }
    },
    pop() {
      if (this.modals.length === 0) this.stacks.pop()
    },
    // present a modal navigation stack
    presentModal(comp, payload) {
      // this.presentingModal = true
      payload.id = this.id++
      this.modals.push({ comp, payload })
    },
    dismissModal() {
      // this.presentingModal = false
      if (this.modals.length > 0) this.modals.pop()
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

.modal-mask
  position absolute
  width 100%
  height 100%
  background-color rgba(30, 30, 30, 0.4)

.slide-enter-active, .slide-leave-active
  transition-duration 0.5s

.slide-enter, .slide-leave-to
  transform translateX(100%)

.modal-enter-active, .modal-leave-active
  transition-duration 0.5s

.modal-enter, .modal-leave-to
  transform translateY(100%)
</style>
