<template lang="pug">
.item(@click="$emit('click')")
  img(:src="icon")
  .info
    .title {{title}}
    .subtitle {{subtitle}}
  .action(@click="$emit('info-click')")
    span &lt;
</template>
<script>
export default {
  props: ['icon', 'title', 'subtitle' ]
}
</script>
<style lang="stylus" scoped>
.item
  margin: 0 0.2rem
  display flex
  align-items center
  padding 0.3rem 0.2rem
  background-color #fff
  box-shadow 0 0 3px rgba(30,30,30,0.2)
.info
  display flex
  flex-direction column
  justify-content space-around
.action
  margin-left auto
</style>