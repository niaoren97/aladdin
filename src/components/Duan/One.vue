<template>
  <div class="wrap">
    <myheader :title="title"></myheader>
    <post></post>
  </div>
</template>

<script>
  import myheader from './duan/header.vue'
  import post from './duan/post.vue'

  export default {
    name:'one',
    data(){
      return {
        title:'这些都是"断货王"...'
      }
    },
    methods :{},
    components:{
      myheader:myheader,
      post:post
    }
  }
</script>

<style lang="stylus" scoped>

</style>

