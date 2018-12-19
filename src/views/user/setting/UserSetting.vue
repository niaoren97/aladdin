<template lang="pug">
.single-page
  navigation-bar(title="设置")
  .content
    list
      list-item(showTail=true) 账户管理
      list-item(showTail=true) 修改登录密码
      list-item 清除缓存
      list-item(showTail=true) 阿拉灯平台协议
      list-item(showTail=true) 账户管理

</template>
<script>
export default {
  name: "UserSetting"
}
</script>
<style lang="stylus" scoped>
</style>