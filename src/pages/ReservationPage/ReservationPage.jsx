import React, { useState, useEffect } from 'react'
import { ReservationGroup, ReservationExp } from '~/components/ReservationGroup'
import { ReservationForm } from '~/components/ReservationForm'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Navigate } from 'react-router-dom'
import { api } from '~/services/axios'
// import { useSocket } from '~/services/websocket'
import useSocket from '~/hooks/useSocket'
import dayjs from 'dayjs'

export const ReservationPage = () => {
	const [tableData, setTableData] = useState([])
	const { socket } = useSocket()
	const [tableId, setTableId] = useState(null)
	const [date, setDate] = useState(null)
	const [time, setTime] = useState(null)
	const [count, setCount] = useState('')
	const [tableName, setTableName] = useState('')
	const [isOpen, setIsOpen] = useState(false)

	const handleCountChange = (e) => setCount(e.target.value)
	const handleClose = () => setIsOpen(false)

	const fetchTable = async () => {
		try {
			const res = await api.get('/table/all')
			const res2 = await api.get('/table/user')
			const data2 = res2.data.data
			const data = res.data.data.map((value) => {
				if (!data2) return value
				if (data2.some((data) => data.id === value.id)) {
					return { ...value, tableStatus: 2 }
				}
				return value
			})
			setTableData(data)
		} catch (error) {}
	}

	useEffect(() => {
		fetchTable()
	}, [])

	useEffect(() => {
		if (socket) {
			const handleBookFail = () => {
				toast.error('Bàn không có sẵn')
			}

			const handleTwiceBook = () => {
				toast.error('Bạn đã đặt bàn rồi')
			}

			socket.on('Table is occupied', handleBookFail)
			socket.on('You have booked a table', handleTwiceBook)

			return () => {
				socket.off('Table is occupied', handleBookFail)
				socket.off('You have booked a table', handleTwiceBook)
			}
		}
	}, [socket])

	useEffect(() => {
		if (socket) {
			const handleBookSuccess = (data) => {
				toast.success('Đặt bàn thành công')
				const newTable = tableData.map((value) =>
					value.id !== data.table_id ? value : { ...value, tableStatus: 2 }
				)
				setTableData(newTable)
			}

			const handleBroadcastBooked = (data) => {
				const newTable = tableData.map((value) =>
					value.id !== data.table_id ? value : { ...value, tableStatus: 2 }
				)
				setTableData(newTable)
			}

			const handleBroadcastCancel = (data) => {
				const newTable = tableData.map((value) =>
					value.id !== data.table_id ? value : { ...value, tableStatus: 1 }
				)
				setTableData(newTable)
			}

			socket.on('Book table successfully', handleBookSuccess)
			socket.on('A table booked', handleBroadcastBooked)
			socket.on('A table booking was canceled', handleBroadcastCancel)

			return () => {
				socket.off('Book table successfully', handleBookSuccess)
				socket.off('A table booked', handleBroadcastBooked)
				socket.off('A table booking was canceled', handleBroadcastCancel)
			}
		}
	}, [socket, tableData])

	const handleTableClick = (data) => {
		setTableId(data.id)
		setDate(null)
		setTime(null)
		setCount('')
		setTableName(data.tablePosition)
		setIsOpen(true)
	}

	const handleSubmit = () => {
		if (socket) {
			const bookingTime = date + time
			socket.emit('BOOK_TABLE', {
				table_id: tableId,
				booking_time: dayjs(bookingTime).toISOString(),
			})
		}
	}

	const user = useSelector((state) => state.user)
	if (!user.id) {
		toast.error('Bạn cần đăng nhập để thực hiện chức năng này!!!', {
			toastId: 'needLoginID',
		})
		return <Navigate to={'/login'} replace />
	}
	return (
		<div className='flex flex-row p-8'>
			<div className='flex flex-col w-[50%] gap-4 items-center'>
				{/* <ReservationGroup title={'Tầng 1'} data={tableData.floor1}/>
				<ReservationGroup title={'Tầng 2'} data={tableData.floor2}/> */}
				<ReservationGroup
					title={'Tầng 1'}
					data={tableData}
					onTableClick={handleTableClick}
				/>
				<ReservationExp />
			</div>
			<div className='flex flex-col pt-16'>
				<ReservationForm
					isOpen={isOpen}
					date={date}
					time={time}
					count={count}
					tableName={tableName}
					onDateChange={setDate}
					onTimeChange={setTime}
					onCountChange={handleCountChange}
					onSubmit={handleSubmit}
					onClose={handleClose}
				/>
			</div>
		</div>
	)
}
