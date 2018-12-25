<template lang="pug">
.single-page
  navigation-bar(title="商品详情")
    template(slot="right")
      img(src="/static/icons/cart-white.png")
      img(src="/static/icons/share-white.png")
      img(src="/static/icons/home-white.png")
  .content.loader(v-if="!product")
    loader
  .content(v-else)
    swiper
      swiper-slide(v-for="(image, index) in product.images", :key="index")
        img.slide(:src="image")
    .country 
      .icon {{country.icon}}
      span {{country.title}}直邮
    span {{product.title}}
    .price {{product.price}}
    span 关税 {{product.tariff * product.price}}
    span 邮费 {{product.postage}}
    .redeem 积分购
    .gurantee
      span(v-if="product.supportSeven") 支持7天退换
      span(v-else) 不支持7天退换
      span 海外直邮
      span 正品保证
    .post-hint
      div(v-if="hasAddress") 直邮, 已添加身份信息
      div(v-else) 直邮, 需添加信息
    .section
      .logo
      .desc {{product.description}}
    .section.info
      div 商品信息
      div [品牌] {{product.brand.title}}
      div [规格] {{product.spec}} / {{product.specUnit}}
      div [产地] {{product.country}}
      div [储存方法] {{product.storeMethod}}
      div [保质期] {{product.shelfLife}}{{product.shelfLifeUnit}}
      div [快递信息] {{product.expressProvider}}
      div [服务信息] {{product.serviceProvider}}
      div [温馨提示] {{product.hint}}
    .section
      .promise
        img.icon(src="/static/duan/zhengpin.png")
        span 正品保证
      .promise
        img.icon(src="/static/duan/fj.png")
        span 海外直邮
      .promise
        img.icon(src="/static/duan/bu.png")
        span 超时发货补贴
      .promise
        img.icon(src="/static/duan/picc.png")
        span PICC承保
    .section.tips
      section-divider(title="小贴士")
      div Reprehenderit exercitationem dolorum laboriosam velit pariatur. Ut magnam perspiciatis dolorem sunt excepturi dolor totam qui laudantium. Vel quidem qui voluptas tempore suscipit aut est dolor voluptatem. Quis eius qui consequatur beatae quam aut alias consequuntur. Qui rerum laboriosam repellat rem minus.
    .footer
      .customer(@click="customerService")
        img(src="/static/user/service.png")
        span 联系客服
      .cart(v-if="inCart", @click="checkCart") 
        span 已加入购物车
        span.see 查看
      .cart(v-else,@click="addToCart({id: this.pid, quantity: 1})") 加入购物车



</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
const map = {
  japan: { icon: '🇯🇵', title: '日本' },
  china: { icon: '🇨🇳', title: '中国' },
  america: { icon: '🇺🇸', title: '美国' },
  england: { icon: '🇬🇧', title: '英国' },
  australia: { icon: '🇦🇺', title: '澳洲' },
}
export default {
  name: 'HomeProductDetail',
  props: ['pid'],
  computed: {
    product() {
      return this.products[this.pid]
    },
    country() {
      const c = this.product.country
      return map[c]
    },
    hasAddress() {
      return this.loggedIn && this.verified
    },
    inCart(){
      
    },
    ...mapState({
      product: (s) => s.product.products,
      loggedIn: (s) => s.user.loggedIn,
      verified: (s) => s.user.me.isVerified,
    }),
  },
  created() {
    if (!this.product) this.fetchProduct({ id: this.pid })
  },
  methods: {
    ...mapActions({ fetchProduct: 'product/fetchBy' }),
    // TODO: should use cart/addProduct action to sync with server
    ...mapMutations({addToCart: 'cart/addItem'}),
    onShare() {
      this.$navigator.presentModal('SharePopup')
    },
    customerService() {

    },
    checkCart() {
      this.$router.push('/cart')
    }
  },
}
</script>
<style lang="stylus" scoped>
.loader
  height 100%
  display flex
  justify-content center
  align-items center
.footer
  background-color #fff
  box-shadow 0 -1px lightgray
  position fixed
  bottom 0
  left 0
  width 100vw
  height 1rem
  display flex
  div
    flex 1
    display flex
    justify-content center
    align-items center
    img
      vertical-align middle
  .cart
    background-color #E53E42
    color #fff
    display flex
    flex-direction column
    justify-content center
    .see
      font-size smaller 
      color lightgray

</style>