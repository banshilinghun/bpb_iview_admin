import {Message} from 'iview'
import axios from 'axios'
import qs from 'qs'

// create an axios instance
const service = axios.create({
  baseURL: 'https://wxapi.benpaobao.com/manager', // api的base_url
  timeout: 5000, // request timeout
  headers: {
    'Content-type': 'application/x-www-form-urlencoded'
  }
})

// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }

  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})
//var that=this
// respone interceptor
service.interceptors.response.use(
  response => {
    console.log(response)
    const res = response.data
    console.log(res.code)
    if (res.code !== 1000) {
      Message.error(res.msg); 
      //this.$Message.error(res.msg)
      return Promise.reject('error')
    } else {
   
      return response.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    this.$Message.error(error.message);
    return Promise.reject(error)
  })
service.defaults.withCredentials = true 
export default service
