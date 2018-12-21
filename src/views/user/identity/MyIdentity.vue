<template lang="pug">
.single-page
  navigation-bar(title="身份信息")
    template(slot="right")
      span(@click="goto('AddIdentity')") 添加新身份
  .content
    div(v-if="identities.length===0")
      .box
      p.text-hint 暂无身份信息, 请添加
      button.outline.black(@click) 添加新身份信息
      //- TODO: use props
    identity-card(v-for="ident in identities", :key="ident.id", 
      :identity="ident")

</template>
<script>
import {createIdentity} from '@/utils'
import IdentityCard from '@/components/identity/IdentityCard.vue'

export default {
  name: "MyIdentity",
  data() {
    return {
      identities: [
        createIdentity(),
        createIdentity(),
      ]
    }
  },
  components: {
    IdentityCard,
  }
}
</script>
<style lang="stylus" scoped>
.content
  padding-top 30vw
  text-align center
.box
  width  60vw
  height 60vw 
  background-color #FEE3E3

</style>