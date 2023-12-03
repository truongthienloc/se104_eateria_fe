import React, { useState, useEffect } from 'react'
import { ReservationGroup, ReservationExp } from '~/components/ReservationGroup'
import { ReservationForm } from '~/components/ReservationForm'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Navigate } from 'react-router-dom'
import { api } from '~/services/axios'
import { useSocket } from '~/services/socketIO'

export const ReservationPage = () => {
	const [tableData, setTableData] = useState([])
	const socket = useSocket()

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
		socket.setSocketListener((e) => {
			if (e.message === 'Book table successfully') {
				toast.success('Đặt bàn thành công')
				const newTable = tableData.map((value) =>
					value.id !== e.table_id ? value : { ...value, tableStatus: 2 }
				)
				setTableData(newTable)
			} else if (e.message === 'Table is occupied') {
				toast.error('Bàn không có sẵn')
			} else if (e.message === 'A table booked') {
			}
		})
	}, [])

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
				<ReservationGroup title={'Tầng 1'} data={tableData} />
				<ReservationExp />
			</div>
			<div className='flex flex-col pt-16'>
				<ReservationForm />
			</div>
		</div>
	)
}
