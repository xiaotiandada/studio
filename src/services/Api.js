import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: ' https://www.easy-mock.com/mock/5b3ddc5f95f8757fcfe8e4f5/login'
  })
}
