import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端300ms点击延迟问题
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
// 解决一像素边框解决问题
import 'styles/border.css'
// 引入图标库文件
import 'styles/iconfont.css'
// 引入轮播图插件
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
