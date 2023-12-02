import { useEffect, useState } from 'react'
import io from 'socket.io-client'

const useSocket = () => {
	const [socket, setSocket] = useState(null)

	useEffect(() => {
		const newSocket = io(import.meta.env.VITE_SOCKET_URL)

		newSocket.on('connect', () => {
			console.log('Connected to Socket.IO')
		})

		newSocket.on('disconnect', () => {
			console.log('Disconnected from Socket.IO')
		})

		setSocket(newSocket)

		return () => {
			newSocket.disconnect()
		}
	}, [])

	const sendMessage = (message) => {
		if (socket) {
			socket.emit('message', message)
		}
	}

	const setSocketListener = (callback) => {
		if (socket) {
			socket.on('message', callback)
		}
	}

	return { sendMessage, setSocketListener }
}

export default useSocket
