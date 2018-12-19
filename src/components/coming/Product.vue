<template lang="pug">
.product  
  .show
    .bookmark(v-if="tag") {{tag}}
    img(:src="image")
    span.text-center {{title}}
  span 即将开始
  span 倒计时: {{hours}}时{{minutes}}分{{seconds}}秒
</template>
<script>
import moment from 'moment'
export default {
  name: 'ComingProduct',
  props: ['title', 'image', 'time', 'tag'],
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  },
  created() {
    // init the data
    const now = moment()
    const duration = moment.duration(-now.diff(moment(this.time)))
    this.hours = duration.hours()
    this.minutes = duration.minutes()
    this.seconds = duration.seconds()
  },
  mounted() {
    this.timer = setInterval(()=> {
      this.seconds -=1
      if(this.seconds ===0) {
        this.seconds = 60
        this.minutes -=1
        if(this.minutes ===0) {
          this.minutes = 60
          this.hours -=1
        }
      }
    } , 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style lang="stylus" scoped>
.product
  flex-basis 2rem
  display flex
  flex-direction column
  span
    font-size 0.8em
    align-self flex-start
    text-align left
.show
  position relative
  outline solid 1px lightgray
  width 2rem
  height 2.4rem
  img 
    width 100%
    display block
.bookmark
    position: absolute; 
    top 0
    left 0
    height: 0.8rem
    width: 0.4rem
    padding: 0px; 
    display flex
    justify-content center
    align-items center
    color #fff
    -webkit-transform: rotate(0deg) skew(0deg); 
    transform: rotate(0deg) skew(0deg); 
    border-left: 0.2rem solid red; 
    border-right: 0.2rem solid red; 
    border-bottom: 0.2rem solid transparent; 

</style>
