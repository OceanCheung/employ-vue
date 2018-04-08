/*引入axios*/
import axios from 'axios';
import ajaxUrl from './url';
import qs from 'qs';

/*创建axios实例对象*/
const ajax = axios.create({
  baseURL: ajaxUrl,
   transformRequest: [function (data) {
    // 对 data 进行任意转换处理
    return qs.stringify(data);
  }],
  timeout: 30000
});

/*请求拦截器（请求之前的操作）*/
ajax.interceptors.request.use(
  config => {
    return config
  },
  /*错误操作*/
  err => {
    return Promise.reject(err)
  });

/*请求之后的操作*/
ajax.interceptors.response.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
});

/*导出模块*/
export default ajax;
