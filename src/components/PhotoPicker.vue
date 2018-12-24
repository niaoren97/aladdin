<template lang="pug">
.container
  .option(@click="$emit('album')")
    label(for="file") 从手机相册中选择
    input.hidden(type="file", ref="photo")
  .option(@click="$emit('shot')") 拍照
  .option(@click="$emit('cancel')") 取消
</template>
<script>
export default {
  name: "PhotoPicker",

}
</script>
<style lang="stylus" scoped>
.container
  background-color #fff
  width 100vw
  box-shadow 0 0 3px rgba(30,30,30,0.3)
  .hidden
    display none
  .option
    display flex
    justify-content center
    align-items center
    font-size 0.35rem
    height 1rem
    border-bottom solid 1px lightgray

</style>