<template lang="pug">
.single-page
  navigation-bar(title="超值热卖")
    template(slot="right")
      img(src="/static/icons/share-white.png", @click="share")
  .content
    img.post(:src="post")
    .story {{brand.story}}
    .section(v-for="(s,index) in brand.series", :key="index")
      .description
        img(:src="s.feature")
        .txt {{s.description}}
      .products
        .product(v-for="p in s.products", :key="p.id")
          img(:src="p.images[0]")
          span {{p.title}}
          .price {{p.price}}
          button.buy(@click="") 立即购买

    .modal(v-if="showModal", @click.self="showModal=false")
      .mask
      share-popup(@cancel="showModal=false")
</template>
<script>
import SharePopup from '@/components/SharePopup'
import { createProduct, fakeImage } from '@/utils'
import faker from 'faker'
import _ from 'lodash'

export default {
  name: 'ExcellentChoice',
  components: {
    SharePopup,
  },
  data() {
    return {
      showModal: false,
      post: fakeImage(720, 400),
      brand: {
        story: faker.lorem.paragraph(2),
        series: [
          {
            description: faker.lorem.sentences(2),
            feature: fakeImage(220,360),
            products: _.range(0, 4).map(() => createProduct()),
          },
          {
            description: faker.lorem.sentences(2),
            feature: fakeImage(220,360),
            products: _.range(0, 4).map(() => createProduct()),
          },
        ],
      },
    }
  },
  methods: {
    share() {
      this.showModal = true
    },
  },
}
</script>
<style lang="stylus" scoped>
.post
  width 100vw
  height 41.7vw
  vertical-align bottom
.story
  background-color #FDCD2D
  padding  0.4rem 0.2rem
  color gray
.section
  .description
    margin 0.2rem
    background-color #fff
    display flex
    img 
      height 50vw
      width 30vw
    .txt
      flex 1
      padding 0.4rem 0.2rem
  .products
    display flex
    flex-wrap wrap
    justify-content space-between
    padding 0.2rem
    .product
      box-shadow 0 0 1px rgba(30,30,30,0.3)
      background-color #fff
      width 45vw
      margin-bottom 0.2rem
      display flex
      flex-direction column
      align-items center
      img 
        width 100%
        border-bottom solid 1px rgba(30,30,30,0.3)
      span
        margin-top 0.2rem
      .price
        color #E53E42
      .buy
        width 30vw 
        background #E53E42
        border none
        outline none
        color #fff
        margin-bottom 0.2rem

.modal
  position fixed
  width 100vw
  height 100vh
  top 0
  left 0
  background rgba(30,30,30,0.5)
</style>