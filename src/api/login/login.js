/**
 * 登录相关接口
 */
import request from '@/utils/axios'
import qs from 'qs'

// 登录
export function login(data) {
  return request({
    url: '/oauth/token',
    method: 'post',
    data: qs.stringify(data)
  })
}

// 登录
export function authorize(data) {
  return request({
    url: '/oauth/authorize',
    method: 'post',
    data: qs.stringify(data)
  })
}
