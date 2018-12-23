import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper, { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './registerServiceWorker'
import navigator from './plugins/navigator'
import registrar from './plugins/base_registrator'
import '@/assets/rem.js'
import '@/style/style.styl'

Vue.config.productionTip = false

Vue.use(navigator)
Vue.use(registrar)
Vue.use(VueAwesomeSwiper)

// config router
const mains = ['/home', '/collection', '/stock', '/cart', '/user']
router.beforeEach((to, from, next) => {
  let ind = mains.indexOf(to.path)
  if (ind > -1) {
    store.state.app.tab = ind
  }
  next()
})

new Vue({
  router,
  store,
  render: (h) => h(App),
  component: {
    swiper,
    swiperSlide,
  },
}).$mount('#app')
