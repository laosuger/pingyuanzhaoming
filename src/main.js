import Vue from 'vue'
import App from './App.vue'
import router from './router'
import global_menuBar from './plugins/global_menuBar.js'
import 'lib-flexible/flexible.js'
import VueTouch from 'vue-touch'

import './style/common.css'
import './style/iconfont.css'

Vue.config.productionTip = false

Vue.use(global_menuBar)
Vue.use(VueTouch)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
