import Api from './Api'

export default {
  userLogin(data) {
    return Api().post('/userlogin', data)
  }
}
