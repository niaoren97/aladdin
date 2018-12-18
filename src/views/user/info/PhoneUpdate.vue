<template lang="pug">
.single-page  
  navigation-bar(title="修改手机号")
    template(slot="right")
      navigation-bar-item
        span(@click="save") 保存
  .content

</template>
<script>
export default {
  name: 'PhoneUpdate',
  data() {
    return {}
  } ,
  methods: {
    save() {

    }
  }
}
</script>

