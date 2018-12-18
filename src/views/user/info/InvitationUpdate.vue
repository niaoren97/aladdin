<template lang="pug">
.single-page  
  navigation-bar(title="我的邀请码")
  .content
    div
      img(:src="avatar")
      span {{nickname}}
    p 我的邀请码 {{invitationCode}}
    button.share 分享邀请码
</template>
<script>
export default {
  name: 'InvitationUpdate',
  data() {
    return {nickname: 'nickname',
    avatar: '',
    invitationCode: '1241334534'}
  } ,
  methods: {

  }
}
</script>

