import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端300ms点击延迟问题
import fastClick from 'fastclick'
import 'styles/reset.css'
// 解决一像素边框解决问题
import 'styles/border.css'
// 引入图标库文件
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
