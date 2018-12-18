<template lang="pug">
.page
  slot
  .stacks(ref='stacks')
    template(v-for="stack in stacks")
      transition(:key="stack.opts.$id", :name="stack.opts.$animated ? 'slide' : ''", appear)
        navigation-stack
          component(:is='stack.comp', v-bind='stack.payload')
  .modals(ref='modals')
    div.modal-mask(v-if="modals.length > 0")
    template(v-for='modal in modals')
      transition(:key='modal.opts.$id', name='modal', appear)
        navigation-stack
          component(:is='modal.comp', v-bind='modal.payload')

</template>

<script>
import Vue from 'vue'
import NavigationStack from './NavigationStack.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import MessagePage from '@/views/MessagePage.vue'
import MessageDetail from '@/views/MessageDetail.vue'
import SecretPage from '@/views/SecretPage.vue'
import SecretDetail from '@/views/SecretDetail.vue'
import SearchPage from '@/views/SearchPage.vue'
import SearchResultPage from '@/views/SearchResultPage.vue'
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
    MessagePage,
    MessageDetail,
    SecretPage,
    SecretDetail,
    SearchPage,
    SearchResultPage,
  },
  created() {
    Navigator.instance = this
    console.log(Navigator.instance)
  },
  methods: {
    push(comp, payload, animated) {
      if (this.modals.length === 0) {
        // console.log(comp, payload)
        if (animated === undefined) {
          animated = true
        } else {
          animated = false
        }
        this.stacks.push({
          comp,
          payload,
          opts: {
            $id: this.id++,
            $animated: animated,
          },
        })
        console.log(this.stacks)
      }
    },
    pop() {
      if (this.modals.length === 0) this.stacks.pop()
    },
    // present a modal navigation stack
    presentModal(comp, payload) {
      // this.presentingModal = true
      this.modals.push({ comp, payload, opts: {$id: this.id++} })
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
@import '../style/vars.styl'
.page
  width 100%
  height 100vh
  background-color #f6f6f6
  z-index $stack-level

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
