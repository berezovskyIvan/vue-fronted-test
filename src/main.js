/*
  vue-js main modules
 */
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'

/*
  babel-polyfill
 */
import 'babel-polyfill'

/*
  axios configs
 */
import '@/axios'
/*
  google auth
 */
import '@/auth'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
