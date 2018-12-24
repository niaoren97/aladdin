<template lang="pug">
.single-page  
  navigation-bar(title="个人信息")
  .content
    list
      //- list-item(v-for="item in items", :key="item.")
      list-item(extra-class="item", @click="goto('AvatarUpdate')")
        span 头像
        span.right 
          img.avatar(:src="me.avatar")
          span &gt;
      list-item(extra-class="item", @click="goto('NicknameUpdate')")
        span 昵称
        span.right
          span {{me.nickname}}
          span &gt;
      list-item(extra-class="item", @click="goto('QRCodeUpdate')")
        span 我的二维码
        span 
          span &gt;
      list-item(extra-class="item", @click="goto('InvitationUpdate')")
        span 我的邀请码
        span 
          span &gt;
      list-item(extra-class="item", @click="goto('PhoneUpdate')")
        span 手机号
        span 
          span(v-if="")
          span &gt;

</template>
<script>
import faker from 'faker'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'UserInfo',
  data() {
    return {
    }
  },
  created() {
    this.items = [
      { title: '头像', component: 'AvatarUpdate' },
      { title: '昵称', component: 'NicknameUpdate' },
      { title: '我的二维码', component: 'QRCodeUpdate' },
      {
        title: '我的邀请码',
        component: 'InvitationUpdate',
      },
      {
        title: '手机号',
        component: 'PhoneUpdate',
      },
    ]
  },
  computed: {
    ...mapState({me: state=>state.user.me})
  },
  methods: {
    goto(compID) {
      this.$navigator.push(compID)
    },
  },
}
</script>
<style lang="stylus" scoped>
.item
  display flex
  justify-content space-between
  .right > *
    margin-left 0.2rem

.avatar
  width 0.5rem
  height 0.5rem
  border-radius 50%
  vertical-align middle
</style>

