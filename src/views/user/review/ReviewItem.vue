<template lang="pug">
.container
  .mine 
    div 
      img(class="pic" :src="me.avatar") 
      span(class="ni") | {{me.nickname}}     
    .comment  {{realReview.content}}
    //- .pictures
    //-   img(class="picture" :src="src")
    .product(v-if="product") 
      img(class="image" :src="product.images[0]")
      .description
        p {{product.title}}
        p {{product.country}} 海外直邮
        p {{product.price}}
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ReviewItem',
  props: ['review'],
  created() {
    if (!this.product) this.fetchProduct({ id: this.realReview.about })
  },
  computed: {
    ...mapState({
      reviews: (s) => s.review.reviews,
      products: (s) => s.product.products,
      me: (s) => s.user.me,
    }),
    product() {
      return this.products[this.realReview.about]
    },
    realReview() {
      return this.reviews[this.review]
    },
  },
  methods: {
    ...mapActions({ fetchProduct: 'product/fetchBy' }),
  },
}
</script>
<style lang="stylus" scoped>
.mine
  margin-bottom 0.2rem
  background-color #fff

.pic
  width 0.8rem
  height 0.8rem
  border-radius 50%
  vertical-align middle
  margin 0.2rem

.ni
  font-size 0.3rem

.comment
  font-size 0.2rem
  text-align left
  padding 0 0.2rem

.pictures
  padding 0.2rem

.picture
  width 2.6rem
  height 2rem

.product
  border 1px solid #f2f2f2
  display flex
  justify-content left
  align-items center
  padding 0.2rem

.image
  width 1rem
  height 1rem
  margin-right 0.5rem

.description
  text-align left
  font-size 0.2rem
  border-left 1px solid #f2f2f2
  padding 0 0.5rem

.description p
  padding 0.05rem 0
  margin 0

.description p:last-child
  color #f00

.other
  background-color #fff
</style>