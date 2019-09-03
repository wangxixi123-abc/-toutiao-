// 处理axios 拦截器
import axios from 'axios'
import router from '../router'
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
}, function (error) {
  let status = error.response.status
  let message = ' '
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      message = '用户非实名认证用户，无权限登录'
      break
    case 507:
      message = '服务器或数据库异常'
      break
    case 404:
      message = '手机号不正确'
      break
    case 401:
      window.localStorage.clear()
      router.push('/login')
      break
    default:
      message = '未知错误'
      break
  }
  // eslint-disable-next-line no-undef
  Message({ type: 'warning', message })
  return new Promise(function () {})
})
export default axios
