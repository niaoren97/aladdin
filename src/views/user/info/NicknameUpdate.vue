<template lang="pug">
.single-page  
  navigation-bar(title="修改昵称")
    template(slot="right")
      navigation-bar-item
        span(@click="save") 保存
  .content
    input(type="text", v-model="nickname")

</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'NicknameUpdate',
  data() {
    return {
      nickname: '' 
    }
  },
  created() {
    this.nickname = this.me.nickname
  },
  computed: {
    ...mapState({me: s => s.user.me})
  },
  methods: {
    save() {
      this.$store.dispatch('user/updateProfile', {field: 'nickname',
      value: this.nickname})
    }
  }
}
</script>
<style lang="stylus" scoped>
input
  border none
  outline none
  border-bottom solid 1px lightgray
  width 100vw
  height 0.8rem
  padding 0.2rem 
</style>


