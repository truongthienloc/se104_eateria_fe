import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { api } from '~/services/axios'
import { initUserValue } from '~/features/user/userSlice'

export default function AutoLoginProvider({ children }) {
	const dispatch = useDispatch()
	const [isLoading, setIsLoading] = useState(true)

	const fetchUser = async () => {
		setIsLoading(true)
		const accessToken = localStorage.getItem('access-token')
		if (accessToken) {
			try {
				const res = await api.get('user/me/info', { timeout: 5000 })
				dispatch(initUserValue(res.data.data))
			} catch (error) {}
		}
		setIsLoading(false)
	}

	const checkHealth = () => {
		api.get('/')
	}

	useEffect(() => {
		checkHealth()
		fetchUser()
	}, [])

	if (isLoading) return null
	return children
}
