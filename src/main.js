import Vue from 'vue'
import App from './App.vue'
import KsVueFullpage from 'ks-vue-fullpage'

Vue.config.productionTip = false
Vue.use(KsVueFullpage)

new Vue({
  render: h => h(App),
}).$mount('#app')
