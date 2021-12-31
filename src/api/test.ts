import tRequest from '@/assets/service'

export function getTest(params:any) {
  return tRequest.get({
    url: '/upLine/getIndxData',
    showLoading: false,
    params
  })
}
