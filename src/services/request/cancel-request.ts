import { CancelRequest } from './type'
import { reactive } from 'vue'
import { Canceler } from 'axios'

export const cancelRequest = reactive<CancelRequest>({
  cancelTokenArr: []
})

export function pushRequest(val: Canceler) {
  (cancelRequest.cancelTokenArr as any[]).push(val)
}

export function clearRequest() {
  (cancelRequest.cancelTokenArr as any[]).forEach((item: Canceler) => {
    item('路由跳转取消请求')
  })
  cancelRequest.cancelTokenArr = []
}
