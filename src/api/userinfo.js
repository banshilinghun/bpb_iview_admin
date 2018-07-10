import request from '@/utils/request'


export function userinfoList() {
  return request({
    url: '/get/userinfo_pass_list',
    method: 'post'
  })
}