import { Message } from 'iview'
import axios from 'axios'
import qs from 'qs'

const service = axios.create({
	baseURL: 'https://wxapi.benpaobao.com/manager',
	timeout: 5000,
	headers: {
		'Content-type': 'application/x-www-form-urlencoded'
	}
})

service.interceptors.request.use(config => {
	if(config.method === 'post') {
		config.data = qs.stringify(config.data)
	}
	return config
}, error => {
	Promise.reject(error)
})

service.interceptors.response.use(
	response => {
		const res = response.data
		if(res.code !== 1000) {
			Message.error(res.msg)
			return Promise.reject('error')
		} else {
			return response.data
		}
	},
	error => {
		this.$Message.error(error.message)
		return Promise.reject(error)
	})

service.defaults.withCredentials = true
export default service