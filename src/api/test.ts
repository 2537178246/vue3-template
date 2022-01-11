import tRequest from '@/services'

export function getTest(params:any) {
  return tRequest.request({
    method: 'get',
    url: '/upLine/getIndxData',
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
