<template lang="pug">
.single-page  
  navigation-bar(title="头像")
    template(slot="right")
      navigation-bar-item
        span(@click="action") ooo
  .content.extra
    img.avatar(:src="me.avatar")
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'AvatarUpdate',
  data() {
    return {}
  },
  computed: {
    ...mapState({ me: (state) => state.user.me }),
  },
  methods: {
    action() {
      this.$navigator.presentModal(
        'PhotoPicker',
        {
          props: {},
          events: {
            album: () => {
              console.log('TODO: album')
            },
            cancel: () => {
              this.$navigator.dismissModal()
            },
            shot: () => {
              console.log('TODO: shot')
            },
          },
        },
        { position: ['bottom', 'left'] }
      )
    },
  },
}
</script>
<style lang="stylus" scoped>
.extra
  text-align center

.avatar
  width 60vw
  height 60vw
  border-radius 50%
  margin-top 20vw
</style>


