<template lang="pug">
.navigator
  slot
  .stacks(ref='stacks')
    template(v-for="stack in stacks")
      transition(:key="stack.opts.$id", :name="stack.opts.$animated ? 'slide' : ''", appear)
        navigation-stack
          component(:is='stack.comp', v-bind='stack.payload')
  .modals(ref='modals', @click.self="dismissModal",v-if="modals.length > 0")
    div.modal-mask
    template(v-for='modal in modals')
      transition(:key='modal.opts.$id', name='modal', appear)
        //- navigation-stack
        //- .position(:class="{modal.opts}")
        component(:is='modal.comp', v-bind='modal.payload')
</template>

<script>
import Vue from 'vue'
import NavigationStack from '@/base/NavigationStack.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import MessagePage from '@/views/MessagePage.vue'
import MessageDetail from '@/views/MessageDetail.vue'
import SecretPage from '@/views/SecretPage.vue'
import SecretDetail from '@/views/SecretDetail.vue'
import SearchPage from '@/views/SearchPage.vue'
import SearchResultPage from '@/views/SearchResultPage.vue'

// home
import MustBuy from '@/views/home/MustBuy'
import BrandChoice from '@/views/home/BrandChoice'
import ExcellentChoice from '@/views/home/ExcellentChoice'
import TimeSelling from '@/views/home/TimeSelling'
// category
import CategorySearch from '@/views/category/CategorySearch'
// user-center
import UserCenter from '@/views/user/UserCenter'
import ClientService from '@/views/user/UserCenter'
import UserInfo from '@/views/user/info/UserInfo'
import AvatarUpdate from '@/views/user/info/AvatarUpdate'
import InvitationUpdate from '@/views/user/info/InvitationUpdate'
import NicknameUpdate from '@/views/user/info/NicknameUpdate'
import PhoneUpdate from '@/views/user/info/PhoneUpdate'
import QRCodeUpdate from '@/views/user/info/QRCodeUpdate'

// login, register
import LoginOrRegister from '@/views/user/auth/LoginOrRegister'

// service
import AfterSales from '@/views/user/service/AfterSales'
import ExpressService from '@/views/user/service/ExpressService'
import Feedback from '@/views/user/service/Feedback'
import HumanService from '@/views/user/service/HumanService'
import OrderService from '@/views/user/service/OrderService'
import OtherAdvisory from '@/views/user/service/OtherAdvisory'

// lamp
import MyLamp from '@/views/user/lamp/MyLamp'
import LampDetail from '@/views/user/lamp/LampDetail'
import LampExchange from '@/views/user/lamp/LampExchange'

// footprint
import Footprint from '@/views/user/footprint/Footprint'

// identity
import MyIdentity from '@/views/user/identity/MyIdentity'
import AddIdentity from '@/views/user/identity/AddIdentity'

import MyReview from '@/views/user/review/MyReview'
import MyCoupon from '@/views/user/coupon/MyCoupon'

// The whole app should only has one navigator instance

// 引入断货王
import StockHome from '@/views/stock/StockHome'
import StockProductDetail from '@/views/stock/StockProductDetail'
import BrandDetail from '@/views/stock/BrandDetail'
import Laxinde from '@/views/stock/Laxinde';


// modals----------------
import SharePopup from '@/components/SharePopup'

const Navigator = Vue.extend({
  data: function() {
    return {
      stacks: [],
      modals: [],
      id: 0,
      key: 1,
      presentingModal: false,
    }
  },
  components: {
    NavigationStack,
    ProductDetail,
    MessagePage,
    MessageDetail,
    SecretPage,
    SecretDetail,
    SearchPage,
    SearchResultPage,

    CategorySearch,
    //home
    MustBuy,
    BrandChoice,
    ExcellentChoice,
    TimeSelling,

    UserCenter,
    ClientService,
    UserInfo,
    AvatarUpdate,
    InvitationUpdate,
    NicknameUpdate,
    PhoneUpdate,
    QRCodeUpdate,

    LoginOrRegister,

    AfterSales,
    ExpressService,
    Feedback,
    HumanService,
    OrderService,
    OtherAdvisory,

    // lamp
    MyLamp,
    LampDetail,
    LampExchange,

    Footprint,

    MyIdentity,
    AddIdentity,

    MyReview,
    MyCoupon,
    // 断货王商品详情页面
    StockProductDetail,
    StockHome,
    BrandDetail,
    Laxinde,


    // modals
    SharePopup,
  },
  created() {
    Navigator.instance = this
    console.log(Navigator.instance)
  },
  methods: {
    push(comp, payload, animated) {
      if (this.modals.length === 0) {
        // console.log(comp, payload)
        if (animated === undefined) {
          animated = true
        } else {
          animated = false
        }
        this.stacks.push({
          comp,
          payload,
          opts: {
            $id: this.id++,
            $animated: animated,
          },
        })
        console.log(this.stacks)
      }
    },
    pop() {
      if (this.modals.length === 0) this.stacks.pop()
    },
    // present a modal navigation stack
    presentModal(comp, payload, opts) {
      // this.presentingModal = true
      this.modals.push({ comp, payload, opts: { $id: this.id++ } })
    },
    dismissModal() {
      // this.presentingModal = false
      if (this.modals.length > 0) this.modals.pop()
    },
    alert(x) {
      window.alert(x)
    },
  },
})
export default Navigator
</script>

<style lang="stylus" scoped>
@import '../style/vars.styl'

.navigator
  width 100vw
  height 100vh
  position fixed
  // overflow scroll
  z-index $stack-level
.modals
  position fixed
  width 100vw
  height 100vh
  left 0
  top 0
.modal-mask
  position absolute
  width 100%
  height 100%
  background-color rgba(30, 30, 30, 0.5)

.slide-enter-active, .slide-leave-active
  transition-duration 0.5s

.slide-enter, .slide-leave-to
  transform translateX(100%)

.modal-enter-active, .modal-leave-active
  transition-duration 0.5s

.modal-enter, .modal-leave-to
  transform translateY(100%)
</style>
