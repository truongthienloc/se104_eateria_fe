import React from 'react'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
export function ManageBookingPage() {
	const [showModalAdd, setShowModalAdd] = React.useState(false)
	const [showModalRemove, setShowModalRemove] = React.useState(false)
	const [showModalCancel, setShowModalCancel] = React.useState(false)
	const [isHovered, setIsHovered] = React.useState(false);
	const handleMouseEnter = () => {
	  setIsHovered(true);
	};
	const handleMouseLeave = () => {
	  setIsHovered(false);
	};
	return (
		<div className='pt-9 w-[1130px] pl-10 h-full bg-[#f8f8f8]'>
			<div className=''>
				<div className='flex gap-10'>
					<p className='text-primary text-2xl font-normal'>Quản lý đặt bàn</p>
					{/* <NotificationsNoneOutlinedIcon className=''/> */}
				</div>
				<div className='mt-9 flex gap-20 text-lg font-normal text-second'>
					<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
						<div className='flex gap-3 cursor-pointer items-center'>
							<span>Tình trạng</span>
							<ExpandMoreRoundedIcon />
						</div>
					
						{isHovered && (<div className=' gap-[6px] flex flex-col mt-3'>
							<p className='py-1 px-5 rounded-xl bg-white border-primary border-[2px]
							 text-primary justify-center flex cursor-pointer
							 hover:text-white hover:bg-primary focus:outline-none '>Đã đặt</p>
							<p className='py-1 px-5 rounded-xl bg-white border-primary border-[2px]
							 text-primary justify-center flex cursor-pointer
							 hover:text-white hover:bg-primary focus:outline-none '>Trống</p>	
						</div>)}
						
					</div>
					<div className='flex gap-3 cursor-pointer '>
						<span>Ngày đặt</span>		
						<div>
							<ExpandMoreRoundedIcon />
						</div>
						<div className=''>
							<input className='' type="date" />
						</div>
					</div>
				</div>
			</div>
			<div className='rounded-3xl border-third border-8 px-3 bg-third mb-16 mt-6'>
				<div className='grid '>
					<table className='text-lg bg-third '>
						<thead className='text-primary '>
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
						</thead>
						<tbody>
							<tr>
								<td className='py-4 px-4  border-b border-gray-200 text-lg text-primary'>
									<input className='mr-6' type='checkbox' /> RV001
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									Bàn 1
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									<span className='bg-green-100 text-green-800 py-1 px-2 rounded-full text-base'>
										Trống
									</span>
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									19:40 - 08/11/2023
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									4
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									Lê Tuấn Anh
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									0256516941
								</td>
							</tr>
							<tr>
								<td className='py-4 px-4  border-b border-gray-200 text-lg text-primary'>
									<input className='mr-6' type='checkbox' /> RV001
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									Bàn 1
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									<span className='bg-green-100 text-green-800 py-1 px-2 rounded-full text-base'>
										Trống
									</span>
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									19:40 - 08/11/2023
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									4
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									Lê Tuấn Anh
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									0256516941
								</td>
							</tr>
							<tr>
								<td className='py-4 px-4  border-b border-gray-200 text-lg text-primary'>
									<input className='mr-6' type='checkbox' /> RV001
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									Bàn 1
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									<span className='bg-red-100 text-red-800 py-1 px-2 rounded-full text-base'>
										Đã được đặt
									</span>
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									19:40 - 08/11/2023
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									4
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									Lê Tuấn Anh
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									0256516941
								</td>
							</tr>
							<tr>
								<td className='py-4 px-4  border-b border-gray-200 text-lg text-primary'>
									<input className='mr-6' type='checkbox' /> RV001
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									Bàn 1
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									<span className='bg-green-100 text-green-800 py-1 px-2 rounded-full text-base'>
										Trống
									</span>
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									19:40 - 08/11/2023
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									4
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									Lê Tuấn Anh
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									0256516941
								</td>
							</tr>
							<tr>
								<td className='py-4 px-4  border-b border-gray-200 text-lg text-primary'>
									<input className='mr-6' type='checkbox' /> RV001
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									Bàn 1
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									<span className='bg-red-100 text-red-800 py-1 px-2 rounded-full text-base'>
										Đã được đặt
									</span>
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									19:40 - 08/11/2023
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									4
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									Lê Tuấn Anh
								</td>
								<td className='py-4 px-4 text-center border-b border-gray-200'>
									0256516941
								</td>
							</tr>
							
							
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
						
						{showModalAdd ? (
							<div>
								<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
									<div className='relative my-6'>
										{/*content*/}
										<div className='border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
											{/*header*/}
											<div className='flex  justify-center p-5 border-b border-solid'>
												<h3 className='text-2xl font-medium text-primary '>
													Thêm bàn
												</h3>
											</div>
											{/*body*/}
												<div className='justify-center flex gap-7 flex-col px-7 mt-4  '>
													<div className='flex gap-8 items-center text-lg'>
														<p className='w-[100px]'>Mã bàn:</p>
														<input type="text" className='w-[150px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'/>
													</div>
													<div className='flex gap-8 items-center text-lg '>
														<p className='w-[100px]'>Vị trí:</p>
														<input type="text" className='w-[150px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'/>
													</div>
					
												</div>
											{/*footer*/}
											<div className='flex items-center justify-end p-6 border-t border-solid rounded-b mt-4'>
												<button
													className=' background-transparent font-bold uppercase px-6 py-2 text-sm  bg-white border-primary border-2 text-primary hover:border-primary hover:text-white 
													hover:bg-primary outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150'
													type='button'
													onClick={() => setShowModalAdd(false)}>
													Hủy
												</button>
												<button
													className='bg-white text-primary  border-primary border-2 font-bold uppercase rounded-lg text-sm px-4 py-2 outline-none hover:bg-primary hover:border-primary hover:text-white  focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
													type='button'
													onClick={() => setShowModalAdd(false)}>
													Xác nhận
												</button>
											</div>
										</div>
									</div>
								</div>
								<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
							</div>
						) : null}

						{showModalRemove ? (
							<div>
								<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
									<div className='relative my-6'>
										{/*content*/}
										<div className='border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
											{/*header*/}
											<div className='flex  justify-center p-5 border-b border-solid'>
												<h3 className='text-2xl font-medium text-primary '>
													Xóa bàn
												</h3>
											</div>
											{/*body*/}
												<div className='justify-center flex gap-7 flex-col px-7 mt-4  '>
													<div className='flex gap-8 items-center text-lg'>
														<p className='w-[100px]'>Mã bàn:</p>
														<input type="text" className='w-[150px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'/>
													</div>
													<div className='flex gap-8 items-center text-lg '>
														<p className='w-[100px]'>Vị trí:</p>
														<input type="text" className='w-[150px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'/>
													</div>
					
												</div>
											{/*footer*/}
											<div className='flex items-center justify-end p-6 border-t border-solid rounded-b mt-4'>
												<button
													className=' background-transparent font-bold uppercase px-6 py-2 text-sm  bg-white border-primary border-2 text-primary hover:border-primary hover:text-white 
													hover:bg-primary outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150'
													type='button'
													onClick={() => setShowModalRemove(false)}>
													Hủy
												</button>
												<button
													className='bg-white text-primary  border-primary border-2 font-bold uppercase rounded-lg text-sm px-4 py-2 outline-none hover:bg-primary hover:border-primary hover:text-white  focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
													type='button'
													onClick={() => setShowModalRemove(false)}>
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
					<div>
						<button
						className='h-[50px] py-2 px-8 rounded-2xl mr-8 bg-white border-primary border-[3px] text-primary hover:border-primary hover:text-white 
						hover:bg-primary focus:outline-none'
							onClick={() => setShowModalCancel(true)}>
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
														<p className='font-medium w-48'>Họ và tên: </p>
														<p className='w-40 justify-center flex'>Bùi Minh Đức</p>
													</div>
													<div className='flex py-2 px-8 border-b border-gray-200'>
														<p className='font-medium w-48'>Số điện thoại: </p>
														<p className='w-40 justify-center flex'>0989.123.789</p>
													</div>
													<div className='flex py-2 px-8 border-b border-gray-200'>
														<p className='font-medium w-48'>Vị trí: </p>
														<p className='w-40 justify-center flex'>Tầng 2</p>
													</div>
													<div className='flex py-2 px-8 border-b border-gray-200'>
														<p className='font-medium w-48'>Mã bàn: </p>
														<p className='w-40 justify-center flex'>15</p>
													</div>
													<div className='flex py-2 px-8 border-b border-gray-200'>
														<p className='font-medium w-48'>Số lượng khách: </p>
														<p className='w-40 justify-center flex'>2 người</p>
													</div>
													<div className='flex py-2 px-8 border-b border-gray-200'>
														<p className='font-medium w-48'>Ngày: </p>
														<p className='w-40 justify-center flex'>12/04/2003</p>
													</div>
													<div className='flex py-2 px-8 border-b border-gray-200'>
														<p className='font-medium w-48'>Giờ: </p>
														<p className='w-40 justify-center flex'>9:20 PM</p>
													</div>
												</div>
											{/*footer*/}
											<div className='flex items-center justify-end p-6 rounded-b'>
												<button
													className=' background-transparent font-bold uppercase px-6 py-2 text-sm  bg-white border-primary border-2 text-primary hover:border-primary hover:text-white 
													hover:bg-primary outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150'
													type='button'
													onClick={() => setShowModalCancel(false)}>
													Hủy
												</button>
												<button
													className='bg-white text-primary  border-primary border-2 font-bold uppercase rounded-lg text-sm px-4 py-2 outline-none hover:bg-primary hover:border-primary hover:text-white  focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
													type='button'
													onClick={() => setShowModalCancel(false)}>
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
		</div>
	)
}
