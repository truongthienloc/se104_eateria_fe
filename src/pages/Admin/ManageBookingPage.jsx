import React from 'react'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import { useState, useEffect } from 'react'
import { api } from '~/services/axios'
import iconNotification from '~/assets/images/icon_notification.svg'
import BookingDetail from '~/components/BookingDetail_ManageBooking/BookingDetail'
import { AddTableModal } from '~/components/Modal/AddTableModal'
import { DeleteTableModal } from '~/components/Modal/DeleteTableModal'
import { toast } from 'react-toastify'
import { DatePicker } from '@mui/x-date-pickers'
import { Link } from 'react-router-dom'
import useSocket from '~/hooks/useSocket'

export function ManageBookingPage() {
	const [showModalAdd, setShowModalAdd] = useState(false)
	const [showModalRemove, setShowModalRemove] = useState(false)
	const [showModalCancel, setShowModalCancel] = useState(false)
	const [isHovered, setIsHovered] = useState(false)
	const [bookingData, setBookingData] = useState([])
	const [addingTableName, setAddingTableName] = useState('')

	const { socket } = useSocket()

	const fetchBooking = async () => {
		try {
			const res = await api.get('/table/all')
			const booking = res.data.data.map((value) => ({ ...value, isCheck: false }))
			setBookingData(booking)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		fetchBooking()
	}, [])

	useEffect(() => {
		if (socket) {
			const handleCancelSuccess = () => {
				toast.success('Hủy đặt bàn thành công')
				fetchBooking()
			}

			const handleCancelFail = () => {
				toast.error('Hủy đặt bàn thất bại')
			}

			const handleOtherBooking = () => {
				fetchBooking()
			}

			socket.on('Cancle table booking successfully', handleCancelSuccess)
			socket.on('Someone booked this table', handleCancelFail)
			socket.on('Table has not been booked yet', handleCancelFail)
			socket.on('A table booked', handleOtherBooking)
			socket.on('A table booking was canceled', handleOtherBooking)

			return () => {
				socket.off('Cancle table booking successfully', handleCancelSuccess)
				socket.off('Someone booked this table', handleCancelFail)
				socket.off('Table has not been booked yet', handleCancelFail)
				socket.off('A table booked', handleOtherBooking)
				socket.off('A table booking was canceled', handleOtherBooking)
			}
		}
	}, [socket])

	const handleCheck = (id) => {
		const booking = bookingData.find((value) => value.id === id)
		booking.isCheck = !booking.isCheck
		setBookingData([...bookingData])
	}

	const handleMouseEnter = () => {
		setIsHovered(true)
	}
	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	const handleAddTableSubmit = async () => {
		if (addingTableName === '') {
			toast.error('Không được để trống mã bàn')
			return
		}

		try {
			const res = await toast.promise(
				api.post('/table', { tablePosition: addingTableName }),
				{
					pending: 'Đang thêm bàn',
					success: 'Thêm bàn thành công',
					error: 'Thêm bàn thất bại',
				}
			)

			await fetchBooking()
			setShowModalAdd(false)
		} catch (error) {}
	}

	const handleBookingCancel = () => {
		if (!socket) {
			toast.error('Hủy đặt bàn thất bại')
		}
		try {
			const checkedBooking = bookingData.filter((value) => value.isCheck)

			checkedBooking.forEach((booking) => {
				socket.emit('CANCEL_TABLE', { table_id: booking.id })
			})

			setShowModalCancel(false)
		} catch (error) {
			console.log('error: ', error)
		}
	}

	return (
		<div className='pt-9 w-[1200px] pl-10 h-full bg-[#f8f8f8]'>
			<div className=''>
				<div className='flex justify-between'>
					<p className='text-primary text-2xl font-normal'>Quản lý đặt bàn</p>
					<Link to='/admin/notification'>
						<img
							src={iconNotification}
							alt=''
							className='hover:cursor-pointer'
						/>
					</Link>
				</div>
				<div className='mt-9 flex gap-20 text-lg font-normal text-second'>
					<div
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						className='relative flex'>
						<div className='flex gap-3 cursor-pointer items-center'>
							<span>Tình trạng</span>
							<ExpandMoreRoundedIcon />
						</div>

						{isHovered && (
							<div className=' gap-[6px] flex flex-col absolute left-0 top-full'>
								<p
									className='py-1 px-5 rounded-xl bg-white border-primary border-[2px]
							 text-primary justify-center flex cursor-pointer
							 hover:text-white hover:bg-primary focus:outline-none '>
									Đã đặt
								</p>
								<p
									className='py-1 px-5 rounded-xl bg-white border-primary border-[2px]
							 text-primary justify-center flex cursor-pointer
							 hover:text-white hover:bg-primary focus:outline-none '>
									Trống
								</p>
							</div>
						)}
					</div>
					<div className='flex gap-3 cursor-pointer items-center '>
						<span>Ngày đặt</span>
						<div className=''>
							<DatePicker format='DD/MM/YYYY' className='bg-third' />
						</div>
					</div>
					<div className='flex items-end'>
						<button
							className='px-4 py-1 h-min bg-primary text-white'
							onClick={() => toast.info('Chức năng chưa được hỗ trợ')}>
							LỌC
						</button>
					</div>
				</div>
			</div>
			<div className='rounded-3xl border-third border-8 px-3 bg-third mb-16 mt-6'>
				<div className='grid '>
					<table className='text-lg bg-third '>
						<thead className='text-primary '>
							<tr>
								<th className='py-4 px-4 text-left border-b border-gray-200'>
									Mã đặt bàn
								</th>
								<th className='py-4 px-4 text-center border-b border-gray-200'>
									Mã bàn
								</th>
								<th className='py-4 px-4 text-center border-b border-gray-200'>
									Tình trạng
								</th>
								<th className='py-4 px-4 text-center border-b border-gray-200'>
									Thời gian đặt
								</th>
								<th className='py-4 px-4 text-center border-b border-gray-200'>
									Số lượng khách
								</th>
								<th className='py-4 px-4 text-center border-b border-gray-200'>
									Tên
								</th>
								<th className='py-4 px-4 text-center border-b border-gray-200'>
									Số điện thoại
								</th>
							</tr>
						</thead>
						<tbody>
							{bookingData.map((booking) => (
								<BookingDetail
									key={booking.id}
									id={booking.id}
									isCheck={booking.isCheck}
									tableName={booking.tablePosition}
									status={booking.tableStatus}
									onCheck={() => handleCheck(booking.id)}
								/>
							))}
						</tbody>
					</table>
				</div>

				<div className='flex pl-18 text-xl font-normal mb-10 mt-40 justify-between '>
					<div className=' flex gap-9 '>
						<button
							className='h-[50px] py-2 px-8 rounded-2xl  bg-white border-primary border-[3px] text-primary hover:border-primary hover:text-white 
						hover:bg-primary focus:outline-none'
							onClick={() => setShowModalAdd(true)}>
							Thêm bàn
						</button>

						<button
							className=' h-[50px] px-9 py-2 rounded-2xl bg-white border-primary border-[3px] text-primary hover:border-primary hover:text-white 
						hover:bg-primary focus:outline-none'
							onClick={() => setShowModalRemove(true)}>
							Xóa bàn
						</button>
					</div>
					<div>
						<button
							className='h-[50px] py-2 px-8 rounded-2xl mr-8 bg-white border-primary border-[3px] text-primary hover:border-primary hover:text-white 
						hover:bg-primary focus:outline-none'
							onClick={() => {
								setShowModalCancel(true)
								// toast.info('Chức năng này vẫn đang được phát triền')
							}}>
							Hủy đặt bàn
						</button>
						{showModalCancel ? (
							<div>
								<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
									<div className='relative my-6'>
										{/*content*/}
										<div className='border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
											{/*header*/}
											<div className='flex  justify-center p-5'>
												<h3 className='text-2xl font-medium text-primary '>
													Hủy bàn đã được đặt
												</h3>
											</div>
											{/*body*/}
											<div className='justify-center flex gap-4 flex-col px-7 mt-4  '>
												<div className='flex py-2 px-8 border-b border-gray-200'>
													<p className='font-medium w-48'>
														Họ và tên:{' '}
													</p>
													<p className='w-40 justify-center flex'>
														Bùi Minh Đức
													</p>
												</div>
												<div className='flex py-2 px-8 border-b border-gray-200'>
													<p className='font-medium w-48'>
														Số điện thoại:{' '}
													</p>
													<p className='w-40 justify-center flex'>
														0989.123.789
													</p>
												</div>
												<div className='flex py-2 px-8 border-b border-gray-200'>
													<p className='font-medium w-48'>
														Vị trí:{' '}
													</p>
													<p className='w-40 justify-center flex'>
														Tầng 2
													</p>
												</div>
												<div className='flex py-2 px-8 border-b border-gray-200'>
													<p className='font-medium w-48'>
														Mã bàn:{' '}
													</p>
													<p className='w-40 justify-center flex'>
														15
													</p>
												</div>
												<div className='flex py-2 px-8 border-b border-gray-200'>
													<p className='font-medium w-48'>
														Số lượng khách:{' '}
													</p>
													<p className='w-40 justify-center flex'>
														2 người
													</p>
												</div>
												<div className='flex py-2 px-8 border-b border-gray-200'>
													<p className='font-medium w-48'>
														Ngày:{' '}
													</p>
													<p className='w-40 justify-center flex'>
														12/04/2003
													</p>
												</div>
												<div className='flex py-2 px-8 border-b border-gray-200'>
													<p className='font-medium w-48'>
														Giờ:{' '}
													</p>
													<p className='w-40 justify-center flex'>
														9:20 PM
													</p>
												</div>
											</div>
											{/*footer*/}
											<div className='flex items-center justify-end p-6 rounded-b'>
												<button
													className=' background-transparent font-bold uppercase px-6 py-2 text-sm  bg-white border-primary border-2 text-primary hover:border-primary hover:text-white 
													hover:bg-primary outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150'
													type='button'
													onClick={() =>
														setShowModalCancel(false)
													}>
													Hủy
												</button>
												<button
													className='bg-white text-primary  border-primary border-2 font-bold uppercase rounded-lg text-sm px-4 py-2 outline-none hover:bg-primary hover:border-primary hover:text-white  focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
													type='button'
													onClick={() =>
														// setShowModalCancel(false)
														handleBookingCancel()
													}>
													Xác nhận
												</button>
											</div>
										</div>
									</div>
								</div>
								<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
							</div>
						) : null}
					</div>
				</div>
			</div>
			<AddTableModal
				isOpen={showModalAdd}
				onClose={() => setShowModalAdd(false)}
				value={addingTableName}
				onChange={(e) => setAddingTableName(e.target.value)}
				onSubmit={handleAddTableSubmit}
			/>
			<DeleteTableModal
				isOpen={showModalRemove}
				onClose={() => setShowModalRemove(false)}
				onSubmit={() => toast.info('Chức năng này chưa được hỗ trợ')}
			/>
		</div>
	)
}
