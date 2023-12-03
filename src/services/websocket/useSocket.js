// import { useEffect, useState } from 'react'
// import websocket from 'websocket'

// const useSocket = () => {
// 	const [socket, setSocket] = useState(null)

// 	useEffect(() => {
// 		console.log(websocket)
// 		// const client = new WSClient()

// 		// client.on('connectFailed', function (error) {
// 		// 	console.log('Connect Error: ' + error.toString())
// 		// })

// 		// client.on('connect', function (connection) {
// 		// 	console.log('WebSocket Client Connected')
// 		// 	connection.on('error', function (error) {
// 		// 		console.log('Connection Error: ' + error.toString())
// 		// 	})
// 		// 	connection.on('close', function () {
// 		// 		console.log('echo-protocol Connection Closed')
// 		// 	})
// 		// 	connection.on('message', function (message) {
// 		// 		console.log("Received: '" + message)
// 		// 	})
// 		// })

// 		// const accessToken = localStorage.getItem('access-token')
// 		// if (accessToken) {
// 		// 	const socketURL = `${
// 		// 		import.meta.env.VITE_SOCKET_URL
// 		// 	}?access_token=${accessToken}`
// 		// 	console.log(socketURL)
// 		// 	client.connect(socketURL, 'echo-protocol')
// 		// 	setSocket(client)

// 		// 	return () => {
// 		// 		client.removeAllListeners()
// 		// 	}
// 		// }
// 	}, [])

// 	const sendMessage = (message) => {
// 		if (socket) {
// 			socket.emit('message', message)
// 		}
// 	}

// 	const setSocketListener = (callback) => {
// 		if (socket) {
// 			socket.on('message', callback)
// 		}
// 	}

// 	return { sendMessage, setSocketListener }
// }

// export default useSocket

import { useState, useEffect } from 'react'

const useSocket = () => {
	const [socket, setSocket] = useState(null)
	const [isConnected, setIsConnected] = useState(false)

	useEffect(() => {
		// Create a new WebSocket instance
		const accessToken = localStorage.getItem('access-token')
		if (accessToken) {
			const socketURL = `${
				import.meta.env.VITE_SOCKET_URL
			}?access_token=${accessToken}`
			const newSocket = new WebSocket(socketURL)

			// Event handler when the connection is open
			const handleOpen = () => {
				setIsConnected(true)
			}

			// Event handler when a message is received
			const handleMessage = (event) => {
				// Handle the incoming message as needed
				console.log('Received message:', event.data)
			}

			// Event handler when the connection is closed
			const handleClose = () => {
				setIsConnected(false)
			}

			// Event handler for errors
			const handleError = (error) => {
				console.error('WebSocket error:', error)
			}

			// Attach event listeners
			newSocket.addEventListener('open', handleOpen)
			newSocket.addEventListener('message', handleMessage)
			newSocket.addEventListener('close', handleClose)
			newSocket.addEventListener('error', handleError)

			// Set the socket state
			setSocket(newSocket)

			// Clean up the WebSocket connection when the component unmounts
			return () => {
				newSocket.close()
			}
		}
	}, [])

	// Function to send a message through the WebSocket
	const sendMessage = (message) => {
		if (socket && socket.readyState === WebSocket.OPEN) {
			socket.send(message)
		} else {
			console.error('WebSocket connection not open.')
		}
	}

	const setSocketListener = (callback) => {
		if (socket && socket.readyState === WebSocket.OPEN) {
			socket.on('message', callback)
		} else {
			console.error('WebSocket connection not open.')
		}
	}

	return { socket, isConnected, sendMessage, setSocketListener }
}

export default useSocket
