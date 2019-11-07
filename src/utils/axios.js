import axios from 'axios'
// import router from '@/router/index'

// 创建axios请求实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  withCredentials: true, // 跨域请求携带cookie
  timeout: 30000 // 请求超时时间
})

// 请求过滤
service.interceptors.request.use(
  config => {
    // 每次请求都携带token
    config.headers['access_token'] = 'Bearer ' + localStorage.getItem('access_token')
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应过滤
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
    // if (res.code === '0') {
    //   return res
    // } else if (res.code === '6') {
    //   // 6-需要登录
    //   return Promise.reject(new Error(res.msg || '啊哦，该操作无法执行'))
    // } else {
    //   return Promise.reject(new Error(res.msg || '啊哦，该操作无法执行'))
    // }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
