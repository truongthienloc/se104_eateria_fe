import axios from 'axios'

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	timeout: 10000,
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
		// "Access-Control-Allow-Credentials": true,
	}
})

api.interceptors.request.use(config => {
	const token = localStorage.getItem('access-token')
	console.log('token: ', token);
	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}
	return config
})

export default api
