<template lang="pug">
div  
  slot(name="bar")
  .content
    slot
</template>

<style lang="stylus" scoped>
.content
  padding-top 1rem
  padding-bottom 100px
</style>

