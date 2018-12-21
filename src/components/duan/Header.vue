<template>
<div>
<div class="header">{{title}}</div>
</div>
  
</template>
<script>
  export default {
    name : 'myheader',
    data () {
      return {}
    },
    methods:{},
    props:[
      'title'
    ]
  }
</script>
<style lang="stylus" scoped>
.header {
  background-color #fff
  color: #fff;
  width: 100%;
  height: 1rem;
  font-size: 0.4rem;
  line-height: 1rem;
  letter-spacing: 1px;
  background-color: #e53e42;
  position fixed
  top 0
  z-index 999
  text-align center
}
</style>

