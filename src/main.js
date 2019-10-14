import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端300ms点击延迟问题
import fastClick from 'fastclick'
import './assets/styles/reset.css'
// 解决一像素边框解决问题
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
