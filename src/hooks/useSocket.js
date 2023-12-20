import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'

export default function useSocket() {
	const [socket, setSocket] = useState(null)

    const connect = () => {
        const token = localStorage.getItem('access-token')
        if (!token) {
            return
        }

		const socket = io(import.meta.env.VITE_SOCKET_URL, {
			query: { token: token },
		})

        setSocket(socket)
    }

	useEffect(() => {
        connect()
        
        return () => {
            if (!socket) {
                return
            }
            socket.disconnect();
        }
	}, [])

    return { socket, connect }
}
