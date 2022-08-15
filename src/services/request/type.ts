import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 自定义拦截器接口
export interface TRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestCatch?: (config: any) => any
  // responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  // responseInterceptor?: (config: any) => any //改为any类型可行 但是不够安全，可以使用泛型 由外部来决定这里是什么类型 所以使用接口泛型 并且给一个默认值
  responseInterceptor?: (config: T) => T
  responseCatch?: (config: any) => any
}

// 自定义config 对AxiosRequestConfig进行扩展使其可以接受自定义的intercepters
export interface TRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: TRequestInterceptors<T> // 在这两处加上泛型是为了让TRequestInterceptors的泛型不再是AxiosResponse的时候此处不受影响 使得两个接口更加独立
  showLoading?: boolean
}

// 取消请求token数组
export interface CancelRequest {
  cancelTokenArr?: any[]
}
