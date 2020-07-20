import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/product/list',
    method: 'get',
    params
  })
}
