import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { formatDate } from '@/utils/filters'

Vue.filter('formatDate', formatDate )
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
