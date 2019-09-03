import LayoutAside from './home/layout-aside.vue'
import LaoutHeader from './home/layout-header.vue'
import BreadCrumb from './common/bread-crumb.vue'
// 所有自定义插件
export default {
  install (Vue) {
    Vue.component('layout-aside', LayoutAside) // 左侧导航事件
    Vue.component('layout-header', LaoutHeader)// 注册头部事件
    Vue.component('bread-crumb', BreadCrumb)// 注册面包屑组件
  }
}
