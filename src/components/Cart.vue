<<<<<<< HEAD
<template>
  <div class="cart">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: "cart",
  data() {
    return {
      msg: "购物车"
    };
  },
  props: {}
};
</script>

<style scoped lang="stylus">
h1 {
  margin: 40px 0 0;
}
</style>





=======
  
<template>
  <img :src="img" alt="">
</template>

<script>
import Vue from 'Vue'
export default Vue.extend({
  name: 'Cart', 
  data() {
    return {
      img: 'someu.url',
    }
  },
  computed: {

  },
  methods: {
    
  }
})
</script>
>>>>>>> upstream/dev
