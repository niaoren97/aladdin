<template lang="pug">
div  
  slot(name="bar")
  .content
    slot
</template>

<style lang="stylus" scoped>
.content
  padding-bottom 100px
</style>

