<template lang="pug">
.single-page  
  navigation-bar(title="修改er'wei'ma邀请码")
    template(slot="right")
      navigation-bar-item
        span(@click="save") 保存
  .content

</template>
<script>
export default {
  name: 'QRCodeUpdate',
  data() {
    return {}
  } ,
  methods: {
    save() {

    }
  }
}
</script>

