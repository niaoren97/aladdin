<template lang="pug">
div.wrapper(@click="click")
  div.bar-item(v-if="label")  
    img(:src="iconShow")
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
  computed: {
      iconShow() {
        return this.active? this.activeIcon : this.icon;
      }
  },
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
.wrapper
  width 25vw
  text-align center
.bar-item
  display flex
  flex-direction column
  justify-content center
  align-items center
  img
    width 0.5rem
    height 0.5rem
</style>
