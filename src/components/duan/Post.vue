<template>
  <div class="wra">
    <img class="post" :key="item.key" v-for="item in data" :src="item.src" alt="">
  </div>
</template>

<script>
  export default {
    name :'post',
    data(){
      return {
        data:[
          {src:"/static/duan/duanpost.png"}
        ]
      }
    },
    methods :{},

  }
</script>

<style lang="stylus" scoped>
  .post {
    background-color #fff
    width 100%
  }
</style>


