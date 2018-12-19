<template>
  <div>
    <div class="comment">
      <p class="des" :key="item.key" v-for="item in data">{{item.comment}}</p>
      <div class="user">
        <div class="img" :key="item.key" v-for="item in data">
          <img :src="item.src" alt>
        </div>
        <span :key="item.key" v-for="item in data" class="name">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        { comment: "颜色涂抹上去看着 很漂亮，棒棒哒！", src: "", name: "芳芳" }
      ]
    };
  },
  methods: {},
  components: {}
};
</script>

<style lang="stylus" scoped>
.comment {
  width: 2rem;
  height: 2rem;
  border: 1px solid #f2f2f2;
  border-radius: 0.1rem;
  display flex
  flex-direction column
  justify-content space-between
  margin-left 0.2rem
  margin-top 0.2rem
}
.user {
  text-align left 
}
.img {
  width: 0.38rem;
  height: 0.38rem;
  border: 1px solid #f2f2f2;
  border-radius: 50%;
  vertical-align middle
  display inline-block
  margin 0.2rem 0.1rem
}

.des {
  font-size: 0.22rem;
  line-height: 0.3rem;
  letter-spacing: 0.01rem;
  margin 0.2rem 0.1rem
}

.name {
  font-size: 0.18rem;
  vertical-align middle
}
</style>


