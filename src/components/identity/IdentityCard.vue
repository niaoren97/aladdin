<template lang="pug">
.card
  div {{identity.name}}
    span {{identity.number}}
  .pics
    img.pic(:src="identity.portrait")
    img.pic(:src="identity.back")
  .footer
    .action(@click="editIdentity(identity.id)")
      img(src='/static/icons/edit.png')
      span 编辑
    .action(@click="deleteIdentity(identity.id)")
      img(src='/static/icons/trash.png')
      span 删除
    
</template>
<script>
export default {
  name: "IdentityCard",
  props: ['identity'],
  methods: {
    editIdentity(id) {
      this.$navigator.push('EditIdentity', {id})
    },
    deleteIdentity(id) {

    }
  }
}
</script>
<style lang="stylus" scoped>
.card
  margin-bottom 
.pics
  .pic
    width 0.2777rem
    height 0.1666re
    border solid 1px lightgray
.footer
  border-top solid 1px gray
  display flex
  justify-content flex-end
  align-items center
  padding 0.2rem
  .action
    padding 0 0.2rem
</style>