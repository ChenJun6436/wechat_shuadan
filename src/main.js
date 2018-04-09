// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'


import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import { Msg, Load, global_ } from './directive/directive'
import { DatetimePicker } from 'mint-ui'

//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css';
import './directive/comon.css'

import App from './App'
Vue.component('picker', DatetimePicker);

Vue.use(Mint)
//Vue.use(ElementUI)

Vue.prototype.$msg = Msg
Vue.prototype.$load = Load
Vue.prototype.global_ = global_
Vue.config.productionTip = true


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
