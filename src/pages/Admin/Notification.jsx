import iconNotification from '~/assets/images/icon_notification.svg'
import React from 'react'
import { useState } from 'react'
import AdminNotification from '~/components/Admin_Notification/Admin_Notification'
export function Notification() {
	const [showModal, setShowModal] = useState(false)
	return (
		<div className='bg-[#f8f8f8] pt-9 w-[1200px] pl-10 h-full'>
			<div className='justify-end flex'>
				<img src={iconNotification} alt='' className='hover:cursor-pointer' />
			</div>
			<div className='rounded-3xl border-third border-8 p-6 bg-third my-10 flex flex-wrap justify-between items-center gap-8'>
				<AdminNotification
					title={'Bạn có một yêu cầu đặt bàn mới!'}
					name={'Lê Tuấn Anh'}
					email={'test01@gmail.com'}
					date={'12/11/2023'}
					onShowModalClick={() => setShowModal(true)}
				/>
				<AdminNotification
					title={'Hóa đơn #A123 đã được thanh toán'}
					name={'Lê Tuấn Anh'}
					email={'test01@gmail.com'}
					date={'12/11/2023'}
					onShowModalClick={() => setShowModal(true)}
				/>
				<AdminNotification
					title={'Bạn có một yêu cầu hủy đặt bàn mới!'}
					name={'Trần Đình Khánh'}
					email={'khanhtd@gmail.com'}
					date={'12/11/2023'}
					onShowModalClick={() => setShowModal(true)}
				/>
				<AdminNotification
					title={'Bạn có một yêu cầu đặt bàn mới!'}
					name={'Trần Trung Kiên'}
					email={'trungkien@gmail.com'}
					date={'12/11/2023'}
					onShowModalClick={() => setShowModal(true)}
				/>
				<AdminNotification
					title={'Hóa đơn #A125 đã được thanh toán'}
					name={'Trần Quốc Hưng'}
					email={'quochung@gmail.com'}
					date={'12/11/2023'}
					onShowModalClick={() => setShowModal(true)}
				/>
				<AdminNotification
					title={'Bạn có một yêu cầu hủy đặt bàn mới!'}
					name={'Nguyễn Cẩm Giang'}
					email={'camgiang@gmail.com'}
					date={'12/11/2023'}
					onShowModalClick={() => setShowModal(true)}
				/>
				{showModal ? (
					<div>
						<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
							<div className='relative w-auto my-6 mx-auto '>
								{/*content*/}
								<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
									{/*header*/}
									<div className='flex items-start justify-center p-5 border-b border-primary '>
										<h3 className='text-2xl text-second font-medium '>
											Thông tin đặt bàn
										</h3>
									</div>
									{/*body*/}
									<div className='relative p-6 flex-auto grid text-xl'>
										<div className='py-4 px-8 text-left border-b border-gray-200 flex'>
											<p className='w-[300px] font-medium '>
												Họ và tên:
											</p>
											<p className='w-[200px]'>Lê Tuấn Anh</p>
										</div>
										<div className='py-4 px-8 text-left border-b border-gray-200 flex'>
											<p className='w-[300px] font-medium '>
												Email:
											</p>
											<p className='w-[200px]'>test01@gmail.com</p>
										</div>
										<div className='py-4 px-8 text-left border-b border-gray-200 flex'>
											<p className='w-[300px] font-medium '>
												Mã bàn:
											</p>
											<p className='w-[200px]'>15</p>
										</div>
										<div className='py-4 px-8 text-left border-b border-gray-200 flex'>
											<p className='w-[300px] font-medium '>
												Số lượng khách:
											</p>
											<p className='w-[200px]'>2 người</p>
										</div>
										<div className='py-4 px-8 text-left border-b border-gray-200 flex'>
											<p className='w-[300px] font-medium '>
												Ngày:
											</p>
											<p className='w-[200px]'>12/04/2003</p>
										</div>
										<div className='py-4 px-8 text-left border-b border-gray-200 flex'>
											<p className='w-[300px] font-medium '>Giờ:</p>
											<p className='w-[200px]'>9:20 PM</p>
										</div>
									</div>
									{/*footer*/}
									<div className='flex items-center justify-end p-6 '>
										<button
											className=' background-transparent font-bold uppercase px-6 py-2 text-sm  bg-white border-primary border-[3px] text-primary hover:border-primary hover:text-white 
												hover:bg-primary outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150'
											type='button'
											onClick={() => setShowModal(false)}>
											Xác nhận
										</button>
										<button
											className=' background-transparent font-bold uppercase px-6 py-2 text-sm  bg-white border-primary border-[3px] text-primary hover:border-primary hover:text-white 
												hover:bg-primary outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150'
											type='button'
											onClick={() => setShowModal(false)}>
											Hủy
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
	)
}
