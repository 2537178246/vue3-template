import { TRequest } from './request/index'

const tRequest = new TRequest({
  timeout: 200000,
  withCredentials: true,
  showLoading: true,
  showError: false,
  useCompress: false,
  useCompressWithCache: false,
  interceptors: {
    requestInterceptor: (config: any) => {
      return config // 这里必须有一个AxiosRequestConfig类型的返回值 因为我们在定义接口的时候定义了返回值类型为LYRequestInterceptors而非undefined或者void
    },
    // ....详见拦截器接口
  },
})
export default tRequest
