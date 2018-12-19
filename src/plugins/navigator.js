import Navigator from '@/components/Navigator.vue'

const NavigationController = {
  install(Vue) {
    // Vue.prototype.$navigator = Navigator.instance ;
    Object.defineProperty(Vue.prototype, '$navigator', {
      get() {
        return Navigator.instance
      },
    })
  },
}

export default NavigationController
