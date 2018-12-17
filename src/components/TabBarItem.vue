<template lang="pug">
div.bar-item(v-if="label")  
  span {{label}}
  span
    img(src="")
</template>
<script>
export default {
  props: ['color', 'active', 'activeColor',
  'label', '']
}
</script>

<style lang="stylus" scoped>
.bar-item
</style>
