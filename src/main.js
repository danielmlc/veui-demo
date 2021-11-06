import Vue from 'vue'
import App from './App.vue'
import 'veui-theme-dls/common.less'
import 'focus-visible'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
