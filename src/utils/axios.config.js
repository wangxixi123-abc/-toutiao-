// 处理axios 拦截器
import axios from 'axios'
// 请求拦截器
axios.interceptors.request.use(function (config) {
  // config 是axios 的默认请求配置 和传入的配置 结合出来的
  // 必须将config return 不return 不行
  let token = window.localStorage.getItem('user-token')
  config.headers['Authorization'] = `Bearer ${token}`
  return config
}, function () { })
// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response.data ? response.data : {}
}, function () {})
export default axios
