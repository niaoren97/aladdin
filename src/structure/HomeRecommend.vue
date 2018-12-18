<template lang="pug">
div
  h1 home recommend
  br
  button(@click="navigate") goto detail
</template>
<script>
import ProductDetail from '@/views/ProductDetail.vue'

export default {
  name: 'HomeRecommend',
  methods: {
    navigate() {
      this.$navigator.push('ProductDetail', {id: 3})
    }
  },
  components: {
    ProductDetail,
  }
}
</script>
