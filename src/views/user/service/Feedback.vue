<template lang="pug">
.single-page  
  navigation-bar(title="意见反馈")
    template(slot="right")
      span(@click="submit") 完成
  .content
    p 感谢您的反馈意见
    .editor
      textarea.input(@change="enter($event)", :value="output", placeholder="请描述您的具体问题, 字数在100字以内")
      .hint(v-text="length +'/100'")
    input(v-model="phone", type="text", placeholder="请输入您的手机号",)
</template>
<script>
export default {
  name: "Feedback",
  data() {
    return {
      phone: '',
      text: '',
    }
  },
  computed: {
    output() {
      return this.text.substring(0, 100)
    },
    length() {
      return this.text.length;
    }
  },
  methods: {
    submit() {

    },
    enter(e) {
      this.text = e.target.value
    }
  }
}
</script>

<style lang="stylus" scoped>
.editor
  height 2rem
  resize none
  width 100vw
  padding 0.2rem
  position relative
.input
  width 100%
  height 100%
  border none
  outline none
.hint
  position absolute
  right 10px
  bottom 0
  color #aaa
</style>

