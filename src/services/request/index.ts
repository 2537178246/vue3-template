import axios from 'axios'
import { unzip } from './gzip'

import { hideFullLoading, showFullLoading } from './loading'
import { pushRequest } from './cancel-request'
import { errorVNode } from './error-vnode'
import type { AxiosInstance, Canceler } from 'axios'
import type { TRequestConfig, TRequestInterceptors } from './type'

/**
 * DEDEAFULT_LOADING must be true
 * want change loading to ./index.ts
 */
const DEAFULT_LOADING = true

export class TRequest {
  instance: AxiosInstance
  interceptors?: TRequestInterceptors
  showLoading: boolean
  showError: boolean

  // constructor(config: AxiosRequestConfig) { //替换为扩展后的TRequestConfig
  constructor(config: TRequestConfig) {
    this.instance = axios.create(config)

    this.showLoading = config.showLoading ?? DEAFULT_LOADING
    this.showError = config.showError

    // 替换后这里可以接受自定义传进来的interceptors了 将它保存
    this.interceptors = config.interceptors
    // 使用传进来的interceptors  针对单个实例的拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseCatch
    )

    // 使用传进来的interceptors  针对所有实例的拦截
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          showFullLoading()
        }
        config.cancelToken = new axios.CancelToken((cancel: Canceler) => {
          pushRequest(cancel)
        })
        // @ts-ignore
        if (config.useCompress || config.useCompressWithCache) {
          config.headers['use-my-compress'] = 'true'
          // @ts-ignore
          if (config.useCompressWithCache) {
            // @ts-ignore
            config.headers['use-my-cache'] = config.useCompressWithCache
          }
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        hideFullLoading()
        const { headers } = res.config
        // 接口数据压缩
        if (headers['use-my-compress'] && res.data.data) {
          const unzipData = unzip(res.data.data)
          res.data.data = JSON.parse(unzipData)
        }
        return res
      },
      (err) => {
        hideFullLoading()
        return Promise.reject(err)
      }
    )
  }
  // 针对单个请求的处理、拦截
  // request(config: AxiosRequestConfig) {//为了添加对单个请求的拦截 使用扩展了的 TRequestConfig 替换 AxiosRequestConfig
  request<T>(config: TRequestConfig<T>): Promise<T> {
    // T是泛型 ，相当于一个参数 使用这个函数的人传这个参数来决定类型
    return new Promise((resolve, reject) => {
      // 1，return Promise的话就需要将函数的返回值改为Promise，Promise需要传入一个泛型，我们定义为T,在前面全局响应拦截器里return出来的是res.data，这意味着我们已经将res的类型改掉了，改为了T类型
      // 请求进来后会先来到单个的请求的拦截器 然后判断showLoading并决定是否修改值 然后才会进入全局的拦截器 再然后才会进入单个的响应的拦截器
      if (this.interceptors?.requestInterceptor) {
        // 如果有单独设置的请求拦截

        // @ts-ignore
        config = this.interceptors.requestInterceptor(config) // config改为拦截处理后的config
      }
      if (config.showError) {
        this.showError = config.showError
      }
      // 如果单个请求的showLoading是false 他已经修改了全局中的showLoading值了 所以就不会显示loading了
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      // this.instance.request(config)
      this.instance
        .request<any, T>(config) // 2,改为T类型后就需要来这里修改泛型 原本T的位置是AxiosResponse 相应的 应该去到type.ts文件将对应的类型修改 为了不报错 可以改为any类型 详见type.ts文件
        .then((res) => {
          // 请求完后设置响应拦截
          if (config.interceptors?.responseInterceptor) {
            // 如果有单独设置的响应拦截
            res = config.interceptors.responseInterceptor(res) // res改为响应处理后的res
          }
          // 为了不影响其他需要loading的请求 在这里要将全局的showLoading改回ture
          this.showLoading = DEAFULT_LOADING
          const resData = (res as any).data

          if (
            resData.code &&
            !['0', '100', '200'].includes(resData.code.toString())
          ) {
            if (
              resData.code.toString() === '304' ||
              resData.code.toString() === '401'
            ) {
              // to re-login
            }
            return Promise.reject(
              `[${resData.code}]: ${resData.message || '错误的请求!'}`
            )
          }

          resolve(res)
        })
        .catch((err) => {
          if (err.message === '路由跳转取消请求') {
            return reject(err)
          }
          let msg = err
          // new Error
          if (typeof err === 'object') {
            msg = `[${err.name}]: ${err.message}`
          }

          this.showLoading = DEAFULT_LOADING

          if (this.showError) {
            ElMessage.error({
              showClose: true,
              message: errorVNode(msg),
            })
          }

          console.warn(`[API]: ${config.url}`) // for debug
          console.error(err) // for debug
          return err
        })
    })
  }
  get<T>(config: TRequestConfig<T>): Promise<T> {
    // 需要给TRequestConfig传入T类型 否则是默认AxiosResponse类型 与实际不匹配
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: TRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: TRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: TRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
