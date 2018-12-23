<template lang="pug">
.single-page
  title-bar(:title="title")
    template(slot="left")
      img.back(src="/static/icons/back.png", v-if="activeTab !==0", @click="switchTab")
    template(slot="right")
      img(src="/static/icons/home-white.png", @click="goHome")
  .content
    .hidden {{loggedIn}}
    .tab.tab0(:class="{active: activeTab ==0}")
      button.login(@click="login") 登录
      button.register(@click="register") 注册
    .tab#login(:class="{active: activeTab ==1}")
      .forms
        input(type="text", v-model="form0.name", placeholder="用户名")
        input(type="password", v-model="form0.password", placeholder="密码")
        input.submit(type="submit", @click="onLogin", value="登录")
    .tab#register(:class="{active: activeTab ==2}")
      .forms
        input(type="text", v-model="form1.name", placeholder="用户名")
        input(type="password", v-model="form1.password", placeholder="密码")
        input.submit(type="submit", @click="onRegister", value="注册")
      
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'LoginOrRegister',
  data() {
    return {
      title: '登录',
      activeTab: 0,
      tabs: [],
      form0: {
        name: '',
        password: '',
      },
      form1: {
        name: '',
        password: '',
      },
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.user.loggedIn
    },
    ...mapState({ registerSuccess: (state) => state.user.registerSuccess }),
  },
  watch: {
    loggedIn(newValue, oldValue) {
      console.log('loggedIn: ', oldValue, newValue);
      
      // if (newValue === true) {
      //   this.$navigator.pop()
      // }
    },
    registerSuccess(newValue, oldValue) {
      if (newValue === true) {
        // 注册成功, 切换到登录tab
        this.activeTab = 1
      }
    },
  },
  methods: {
    ...mapActions({
      onLogin() {
        this.$store.dispatch('user/login', {
          name: this.form0.name,
          password: this.form0.password,
        })
      },
      switchTab() {
        this.tabs.pop()
        this.activeTab =
          this.tabs.length > 0 ? this.tabs[this.tabs.length - 1] : 0
      },
      onRegister() {
        this.$store.dispatch('user/register', {
          name: this.form1.name,
          password: this.form1.password,
        })
      },
    }),
    login() {
      this.title = '登录'
      this.activeTab = 1
      this.tabs.push(1)
    },
    register() {
      this.title = '注册'
      this.activeTab = 2
      this.tabs.push(2)
    },
    goHome() {
      this.$navigator.pop()
      this.$router.push('/home')
    },
  },
}
</script>
<style lang="stylus" scoped>
$primary = #E53E42

.hidden
  display none

img.back
  width 0.2rem !important

button
  width 60vw
  height 0.4rem
  line-height 0.4rem
  text-align center
  border-radius 0.2rem
  margin-bottom 0.4rem

  &.login
    color #fff
    background-color $primary

  &.register
    border solid 1px gray
    background-color #fff

.tab
  display none

  &.active
    display block

.tab0
  padding-top 30vh
  text-align center

.forms
  display flex
  flex-direction column
  align-items center
  padding-top 15vh

input
  margin-bottom 0.2rem
  width 80vw
  height 0.6rem
  border none
  outline none
  border solid 1px lightgray
  padding 0 0.2rem
  line-height 0.6rem
  border-radius 0.3rem
  color #222

  &.submit
    background-color $primary
    color #fff
    margin-top 10vh
</style>