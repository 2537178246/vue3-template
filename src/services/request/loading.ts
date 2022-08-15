import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

let loading: LoadingInstance
let requestLoadingCount: number = 0

const startLoading = () => {
  loading = ElLoading.service({
    lock: true,
    text: '数据加载中'
  })
}

const endLoading = () => {
  loading.close()
}

export const showFullLoading = () => {
  if (requestLoadingCount === 0) {
    startLoading()
  }
  requestLoadingCount += 1
}

export const hideFullLoading = () => {
  if (requestLoadingCount <= 0) return
  requestLoadingCount -= 1
  if (requestLoadingCount === 0) {
    endLoading()
  }
}
