import React, { useMemo, useState, useEffect } from 'react'
import { api } from '~/services/axios'
import iconNotification from '~/assets/images/icon_notification.svg'
import SaleDetail from '~/components/SaleDetail_SaleInfo/SaleDetail'
import { toast } from 'react-toastify'
import { DatePicker } from '@mui/x-date-pickers'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'


export function SalesInfoPage() {
	const [showModal, setShowModal] = useState(false)
	const [saleData, setSaleData] = useState([])
	const [username, setUsername] = useState('');
	const [billId, setBillId] = useState('');
	const [startDate, setStartDate] = useState(dayjs(new Date));
	const [endDate, setEndDate] = useState(dayjs(new Date));

	const handleChangeUsername = e => setUsername(e.target.value)
	const handleChangeBillId = e => setBillId(e.target.value)
	const handleChangeStartDate = e => setStartDate(e.target.value)
	const handleChangeEndDate = e => setEndDate(e.target.value)
	
	const fetchSale = async () => {
		try {
			const res = await api.get('/bill/all')
			const sale = res.data.data
			setSaleData(sale)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		fetchSale()
	}, [])

	const totalPayment = useMemo(() => {
		return saleData.reduce((total, value) => total + value.totalMoney, 0)
	}, [saleData])

	const handleFilterButtonClick = async () => {
		try {
			const res = await toast.promise(
				api.get('/bill/all/filter', {
					params: {
						username: username !== '' ? username : undefined,
						id: billId !== '' ? billId : undefined,
						fromDay: startDate.toISOString(),
						toDay: endDate.toISOString(),
					}
				}),
				{
					pending: 'Đang lọc',
					success: 'Lọc thành công',
					error: 'Lọc thất bại'
				}
			)

			const sale = res.data.data 
			setSaleData(sale)
		} catch (error) {
			
		}
	}

	return (
		<div className='pt-9 w-[1200px] pl-10 h-full bg-[#f8f8f8]'>
			<div className=''>
				<div className='flex justify-between'>
					<p className='text-primary text-2xl font-normal'>
						Thông tin bán hàng
					</p>
					<Link to="/admin/notification">
						<img src={iconNotification} alt="" className='hover:cursor-pointer' />
					</Link>
				</div>
				<div className='mt-9 flex gap-6 text-lg font-normal text-second'>
					<div className='flex flex-col gap-5'>
						<p>Khách hàng</p>
						<input
							type='text'
							className='  placeholder:opacity-90
						 placeholder:text-second w-[264px] h-[57px] border-2 py-[18px] pl-6 pr-[30px] rounded-lg outline-0'
							placeholder='Nhập tên khách hàng'
							value={username}
							onChange={handleChangeUsername}
						/>
					</div>
					<div className='flex flex-col gap-5 '>
						<p>Mã hóa đơn</p>
						<input
							type='text'
							placeholder='Nhập mã hóa đơn'
							className=' placeholder:opacity-90
						 placeholder:text-second w-[264px] h-[57px] border-2 py-[18px] pl-6 pr-[30px] rounded-lg outline-0'
						 	value={billId}
							onChange={handleChangeBillId}
						/>
					</div>
					<div className='flex flex-col gap-5 '>
						<p>Ngày bắt đầu</p>
						{/* <input
							type='text'
							placeholder='Nhập ngày bắt đầu'
							className=' placeholder:opacity-90
						 placeholder:text-second w-[264px] h-[48px] border-2 py-[18px] pl-6 pr-[30px] rounded-lg outline-0'
						/> */}
						<DatePicker format='DD/MM/YYYY' value={startDate} className='bg-third'
							onChange={handleChangeStartDate}
						/>
					</div>
					<div className='flex flex-col gap-5 '>
						<p>Ngày kết thúc</p>
						{/* <input
							type='text'
							placeholder='Nhập ngày kết thúc'
							className=' placeholder:opacity-90
						 placeholder:text-second w-[264px] h-[48px] border-2 py-[18px] pl-6 pr-[30px] rounded-lg outline-0'
						/> */}
						<DatePicker format='DD/MM/YYYY' value={endDate} className='bg-third'
							onChange={handleChangeEndDate}
						/>
					</div>
					<div className='flex items-end'>
						<button className='px-4 py-1 h-min bg-primary text-white rounded-xl'
							onClick={handleFilterButtonClick}
						>
							LỌC
						</button>
					</div>
				</div>
				<p className='my-2.5 text-lg font-normal text-second '>
					<span className='text-primary'>*</span>Click vào mã hóa đơn để xem chi
					tiết hóa đơn.{' '}
				</p>
			</div>

			<div className='rounded-3xl border-third border-8 px-3 bg-third mb-16'>
				<div className='grid '>
					<table className='text-lg bg-third '>
						<thead className='text-primary '>
							<th className='py-4 text-left border-b border-gray-200' />
							<th className='py-4 text-center border-b border-gray-200'>
								Mã hóa đơn
							</th>
							<th className='py-4 text-center border-b border-gray-200'>
								Thời gian tạo hóa đơn
							</th>
							<th className='py-4 text-center border-b border-gray-200'>
								Tên khách hàng
							</th>
							<th className='py-4 text-center border-b border-gray-200 '>
								Tổng thanh toán
							</th>
							<th className='py-4 text-center border-b border-gray-200'>
								Trạng thái
							</th>
							{/* <th className='py-4 text-left border-b border-gray-200'/> */}
						</thead>
						<tbody>
							{saleData.map((sale) => (
								<SaleDetail
									key={sale.id}
									billId={sale.id}
									time={sale.createdAt}
									name={sale.user.username}
									price={sale.totalMoney}
									status={sale.billPayed}
									onStatusClick={() => {
										toast.info('Chức năng này chưa được hỗ trợ')
									}}
								/>
							))}
						</tbody>
					</table>
				</div>
				<div className='mt-20 text-lg font-medium flex gap-3.5 float-right pr-20'>
					<p className='flex items-center'>Doanh thu: </p>
					<p className='px-5 py-2 bg-third  border-primary border-[3px]'>
						{totalPayment} <span>VND</span>
					</p>
				</div>
				<div className='mt-40 pl-18 text-xl font-normal flex gap-9 mb-10'>
					<button
						className=' h-[50px] px-9 py-2 rounded-2xl bg-white border-primary border-[3px] text-primary hover:border-primary hover:text-white 
					hover:bg-primary'
						onClick={() => {
							toast.info('Chức năng này chưa được hỗ trợ')
						}}>
						Xóa
					</button>

					{showModal ? (
						<div>
							<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
								<div className='relative w-auto my-6 mx-auto max-w-6xl'>
									{/*content*/}
									<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
										{/*header*/}
										<div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
											<h3 className='text-3xl text-primary font-semibold'>
												4Food
											</h3>
										</div>
										{/*body*/}
										<div className='relative p-6 flex-auto grid'>
											<table className='text-lg bg-third '>
												<thead className='text-primary '>
													<th className='py-4 px-8 text-left border-b border-gray-200'>
														Mã hóa đơn
													</th>
													<th className='py-4 px-8 text-left border-b border-gray-200'>
														Thời gian tạo hóa đơn
													</th>
													<th className='py-4 px-8 text-left border-b border-gray-200'>
														Tên khách hàng
													</th>
													<th className='py-4 px-8 text-left border-b border-gray-200'>
														Tổng thanh toán
													</th>
													<th className='py-4 px-8 text-left border-b border-gray-200'>
														Trạng thái
													</th>
												</thead>
												<tbody>
													<tr>
														<td className='py-4 px-8 border-b border-gray-200 text-lg text-primary'>
															<input
																className='mr-6'
																type='checkbox'
															/>{' '}
															#Abc1
														</td>
														<td className='py-4 px-8 border-b border-gray-200'>
															19:40 - 08/11/2023
														</td>
														<td className='py-4 px-8 border-b border-gray-200'>
															Lê Tuấn Anh
														</td>
														<td className='py-4 px-8 border-b border-gray-200'>
															159.000 VND
														</td>
														<td className='py-4 px-8 border-b border-gray-200'>
															<span className='bg-green-100 text-green-800 py-1 px-2 rounded-full text-base'>
																Đã thanh toán
															</span>
														</td>
													</tr>
													<tr>
														<td className='py-4 px-8 border-b border-gray-200 text-lg text-primary'>
															<input
																className='mr-6'
																type='checkbox'
															/>{' '}
															#Abc2
														</td>
														<td className='py-4 px-8 border-b border-gray-200'>
															19:40 - 08/11/2023
														</td>
														<td className='py-4 px-8 border-b border-gray-200'>
															Lê Tuấn Anh
														</td>
														<td className='py-4 px-8 border-b border-gray-200'>
															159.000 VND
														</td>
														<td className='py-4 px-8 border-b border-gray-200 '>
															<span className='bg-red-100 text-red-800 py-1 px-2 rounded-full text-base'>
																Chưa thanh toán
															</span>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
										{/*footer*/}
										<div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
											<button
												className=' background-transparent font-bold uppercase px-6 py-2 text-sm  bg-white border-primary border-[3px] text-primary hover:border-primary hover:text-white 
												hover:bg-primary outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150'
												type='button'
												onClick={() => setShowModal(false)}>
												Hủy
											</button>
											<button
												className='bg-white text-emerald-500  border-primary border-[3px] active:bg-emerald-600 font-bold uppercase rounded-lg text-sm px-4 py-2 hover:border-primary outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
												type='button'
												onClick={() => setShowModal(false)}>
												Lưu thay đổi
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
	)
}
