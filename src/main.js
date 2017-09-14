// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'
import App from './AppMaterial'
import router from './router'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial)

Vue.config.productionTip = false

import 'vue-material/dist/vue-material.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
