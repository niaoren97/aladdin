<template lang="pug">
div(@click="click")
  div.bar-item(v-if="label")  
    img(:src="active ? activeIcon : icon")
    span(:style="{'color': active ? activeColor : color}") {{label}}
  slot
</template>
<script>
export default {
  props: [
    'color',
    'active',
    'activeColor',
    'label',
    'icon',
    'activeIcon',
    'to',
  ],
  methods: {
    click() {
      this.$router.push(this.to)
      this.$emit('click')
      console.log('clicked')
    },
  },
}
</script>

<style lang="stylus" scoped>
.bar-item
  display flex
  flex-direction column
  justify-content center
  align-items center
  img
    width 50%
</style>
