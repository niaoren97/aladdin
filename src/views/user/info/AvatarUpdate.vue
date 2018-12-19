<template lang="pug">
.single-page  
  navigation-bar(title="头像")
    template(slot="right")
      navigation-bar-item
        span(@click="action") ooo
  .content

</template>
<script>
export default {
  name: 'AvatarUpdate',
  data() {
    return {}
  } ,
  methods: {
    action() {
      this.$navigator.presentModal('ShareMenu')
    }
  }
}
</script>

