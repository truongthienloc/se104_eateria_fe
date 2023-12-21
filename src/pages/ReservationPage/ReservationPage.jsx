import React, { useState, useEffect, useMemo } from 'react'
import { ReservationGroup, ReservationExp } from '~/components/ReservationGroup'
import { ReservationForm } from '~/components/ReservationForm'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Navigate } from 'react-router-dom'
import { api } from '~/services/axios'
// import { useSocket } from '~/services/websocket'
import useSocket from '~/hooks/useSocket'
import dayjs from 'dayjs'
import { groupDataByTableFloor } from '~/helpers/reservation'

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
	const handleClose = () => {
		const newTableData = tableData.map((value) =>
			value.id !== tableId ? value : { ...value, tableStatus: 'Available' }
		)
		setTableData(newTableData)
		setIsOpen(false)
	}

	const fetchTable = async () => {
		try {
			const res = await api.get('/table/all')
			const res2 = await api.get('/table/user')
			// const data2 = res2.data.data
			const data = res.data.data
			// .map((value) => {
			// 	if (!data2) return value
			// 	if (data2.some((data) => data.id === value.id)) {
			// 		return { ...value, tableStatus:  }
			// 	}
			// 	return value
			// })
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
					value.id !== data.table_id
						? value
						: { ...value, tableStatus: 'Occupied' }
				)
				setTableId(null)
				setTableData(newTable)
			}

			const handleBroadcastBooked = (data) => {
				const newTable = tableData.map((value) =>
					value.id !== data.table_id
						? value
						: { ...value, tableStatus: 'Occupied' }
				)
				setTableData(newTable)
			}

			const handleBroadcastCancel = (data) => {
				const newTable = tableData.map((value) =>
					value.id !== data.table_id
						? value
						: { ...value, tableStatus: 'Available' }
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
		const newTableData = tableData.map((value) =>
			value.id !== data.id ? value : { ...value, tableStatus: 'Chose' }
		)
		setTableData(
			newTableData.map((value) =>
				value.id !== tableId ? value : { ...value, tableStatus: 'Available' }
			)
		)
		setTableId(data.id)
		setDate(null)
		setTime(null)
		setCount('')
		setTableName(data.tablePosition)
		setIsOpen(true)
	}

	const handleSubmit = () => {
		if (socket) {
			if (!date || !time) {
				toast.error('Không được để trống thời gian')
				return 
			}
			const bookingTime = `${dayjs(date).format('YYYY-MM-DD')} ${dayjs(time).format(
				'HH:mm:ss'
			)}`

			socket.emit('BOOK_TABLE', {
				table_id: tableId,
				booking_time: dayjs(new Date(bookingTime)).toISOString(),
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

	const groupData = useMemo(() => groupDataByTableFloor(tableData), [tableData])

	return (
		<div className='flex flex-row p-8'>
			<div className='flex flex-col w-[50%] gap-4 items-center'>
				{groupData.length > 0 &&
					groupData.map((floorData) => (
						<ReservationGroup
							key={floorData[0].tableFloor}
							title={floorData[0].tableFloor}
							data={floorData}
							onTableClick={handleTableClick}
						/>
					))}

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
