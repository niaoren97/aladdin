<template lang="pug">
.navigation-bar-item(@click="$emit('click')")  
  slot
</template>
<style lang="stylus" scoped>
.navigation-bar-item
  margin-left 10px
  display flex
  justify-content flex-start
  align-items center
  &:first-child
    margin-left 0
</style>

