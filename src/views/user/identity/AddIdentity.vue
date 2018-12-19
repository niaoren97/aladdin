<template lang="pug">
.single-page
  navigationb-bar(title="身份实名认证")
  .content
    p 身份信息
      span.warn 请保证信息准确 
    list
      list-item
        input(v-model="name", placeholder="请输入你的姓名")
        input(v-model="number", placeholder="身份证(将加密处理)")
    p 证件照片
      span.warn upload iamges will make the process faster
    .uploads
      label.file-upload(for="portrait")
      input.file(id="portrait")
      label.file-upload(for="back")
      input.file(id="back")
    .uploads#example
      .file-upload
        img(src="http://dummyimage.com/400x300")
      .file-upload
        img(src="http://dummyimage.com/400x300")
    section-block
      .info 为什么需要实名认证
      ul
        li xxxxxxxxxxxxxxxxxxx
        li xxxxxxxxxxxxxxxxxxx
    .footer
      button(@click="submit") 提交

</template>

<script>
export default {
  name: "AddIdentity",
  methods: {
    submit: {

    }
  }
}
</script>
<style lang="stylus" scoped>
.uploads
  display flex
  justify-content space-around
  .file-upload  
    width 40vw
    height 30vw
    img
      width 100%
  .file
    display none
.info  
  text-align center
  color red
  background-color #F9D3D4
.footer
  position fixed
  bottom 0
  left 0
  width 100vw
  height 0.9rem
  box-shadow 0 -1px rgba(30,30,30,0.3)
  display flex
  justify-content center
  align-items center
.submit
  background-color red
  color #fff
  height 0.36rem
  border-radius 0.18rem
  outline none
  border nonek
  width 30vw
</style>
