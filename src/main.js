import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' // 框架组件
import Component from './components' // 自定义组件
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './assets/index.less' // 引入初始化样式
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI) // 全局注册elementUI事件 任意位置都可以使用
Vue.use(Component)// 全局注册自定义事件
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
