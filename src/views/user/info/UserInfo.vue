<template lang="pug">
.single-page  
  navigation-bar(title="个人信息")
  .content
    list
      //- list-item(v-for="item in items", :key="item.")
      list-item(extra-class="item", @click="goto('AvatarUpdate')")
        span 头像
        span 
          img(:src="avatar")
          span &gt;
      list-item(extra-class="item", @click="goto('NicknameUpdate')")
        span 昵称
        span 
          img(:src="avatar")
          span &gt;
      list-item(extra-class="item", @click="goto('QRCodeUpdate')")
        span 我的二维码
        span 
          img(:src="avatar")
          span &gt;
      list-item(extra-class="item", @click="goto('InvitationUpdate')")
        span 我的邀请码
        span 
          img(:src="avatar")
          span &gt;
      list-item(extra-class="item", @click="goto('PhoneUpdate')")
        span 手机号
        span 
          img(:src="avatar")
          span &gt;

</template>
<script>
import faker from 'faker'
export default {
  name: 'UserInfo',
  data() {
    return {
      avatar: faker.image.avatar(),
      nickname: faker.name.findName(),

    }
  },
  created() {
    this.items = [{title: '头像',
    component: 'AvatarUpdate',

    }, '昵称', '我的二维码', '我的邀请码',
    '手机号']
  },
  methods: {
    goto(compID) {
      this.$router.push(compID)
    }
  } 
}
</script>
<style lang="stylus" scoped>
.item
  display flex
  justify-content space-between
</style>

