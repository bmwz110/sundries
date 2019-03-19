// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 某些移动端浏览器的click事件会延迟300ms执行，通过引入fastclick来撤销这一默认操作
import 'styles/reset.css' // reset.css保证在所有浏览器上显示效果一致
import 'styles/border.css' // border.css用于实现1像素边框
import 'styles/iconfont.css' // 引入图标库

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
