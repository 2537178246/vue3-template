import { TRequest } from './request/index'

import { BASE_URL, TIMEOUT, Ws } from './request/config'

const tRequest = new TRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  withCredentials: Ws,
  interceptors: {
    requestInterceptor: (config:any) => {
      console.log('成功拦截') // 发出前拦截
      return config // 这里必须有一个AxiosRequestConfig类型的返回值 因为我们在定义接口的时候定义了返回值类型为LYRequestInterceptors而非undefined或者void
    }
    // ....详见拦截器接口
  }
})
export default tRequest
