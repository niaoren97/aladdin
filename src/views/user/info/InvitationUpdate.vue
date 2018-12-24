<template lang="pug">
.single-page  
  navigation-bar(title="我的邀请码")
  .content.self
    .head
      img.avatar(:src="me.avatar")
      span {{me.nickname}}
    p.invite 我的邀请码:
    p.invite {{me.invitationCode}}
    button.share 分享邀请码
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'InvitationUpdate',
  data() {
    return {
    //   nickname: 'nickname',
    // avatar: '',
    // invitationCode: '1241334534'
    }
  } ,
  computed: {
    ...mapState({me: state => state.user.me})
  },
  methods: {

  }
}
</script>
<style lang="stylus" scoped>
.avatar
  border-radius 50%
  width 0.8rem
  height 0.8rem
  margin-right 0.2rem
.head
  padding 0.4rem 0.2rem
.invite
  text-align center
  padding 0.2rem 0
.share
  display block
  padding 0.2rem 0
  margin 0.5rem auto
  width 60vw
  height 0.8rem
  border-radius 0.4rem
  background-color #E53E42
  color #fff
</style>

