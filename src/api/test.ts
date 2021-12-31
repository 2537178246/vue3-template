import tRequest from '@/utils/service'

export function getTest(params:any) {
  return tRequest.request({
    method: 'get',
    url: 'XXXXX',
    showLoading: false,
    params
  })
}

export function getTestForOne(params:any) {
  return tRequest.get({
    url: 'XXXXX',
    showLoading: false,
    params
  })
}
