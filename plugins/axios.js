import Vue from 'vue'
import axios from 'axios'
import {api} from '~/assets/scripts/config'
// 判断当前环境
const debug = process.env.NODE_ENV !== 'production'
/*
* url：接口url
* type：请求方式（default：get）
* formDate：传递参数（对象形式）
* */
function ajax({url, type = 'get', formData}) {
  url = debug ? `/api${url}` : `${api}url`
  type = type.toLowerCase()
  formData = Object.assign({} ,formData, {})
  if (type !== 'post') {
    formData.requestTime = +new Date()
  }
  return axios[type](url, {params: formData})
    .then(res => {
      return Promise.resolve(res.data)
    })
    .catch(error => {
      return Promise.reject(error)
    })
}
// 全局注册方法
Vue.prototype.$axios = ajax
