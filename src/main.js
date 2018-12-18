import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import navigator from './plugins/navigator'

import './registerServiceWorker'
import '@/assets/flexible.min.js'
import '@/style/style.styl'

Vue.config.productionTip = false

Vue.use(navigator)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
