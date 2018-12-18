<template lang="pug">
.single-page
  head-bar(title="个人中心")
    template(slot="right")
      navigation-bar-item
        img(src="../assets/tabs/message.png")
      navigation-bar-item
        img(src="../assets/tabs/cog.png")

</template>
<script>
export default {
  data() {
    return {user: ''}
  },
  computed: {

  },
  methods: {

  },
}
</script>
