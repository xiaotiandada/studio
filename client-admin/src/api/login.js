import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/api/adminlogin',
    // url: '/login/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    // url: '/login/logout',
    url: '/api/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/api/userinfo',
    // url: '/user/info',
    method: 'get',
    params: { token }
  })
}

