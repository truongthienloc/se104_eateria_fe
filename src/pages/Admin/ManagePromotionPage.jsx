import React, { useEffect, useState } from 'react'
import useEditPromotionModal from '~/hooks/useEditPromotionModal'
import PromotionDetail from '~/components/PromotionDetail_ManaegeDetail/PromotionDetail'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import iconNotification from '~/assets/images/icon_notification.svg'
import { api } from '~/services/axios'
import { toast } from 'react-toastify'
import { AddPromotionModal } from '~/components/Modal/AddPromotionModal'
import { Link } from 'react-router-dom'

export const ManagePromotionPage = () => {
	const [showModalAdd, setShowModalAdd] = useState(false)
	const [showModalEdit, setShowModalEdit] = useState(false)
	const [showModalRemove, setShowModalRemove] = useState(false)
	const [promotionData, setPromotionData] = useState([])
	const editPromotionModal = useEditPromotionModal()
	const addPromotionModal = useEditPromotionModal()

	const fetchPromotion = async () => {
		try {
			const res = await api.get('/discount')
			const promotion = res.data.data
			setPromotionData(promotion)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		fetchPromotion()
	}, [])
	const handleEditButtonClick = (id) => {
		const promotion = promotionData.find((value) => value.id === id)
		setShowModalEdit(true)
		if (!promotion) return

		editPromotionModal.setAll(
			promotion.discountCode,
			promotion.discountDescription,
			promotion.discountPercent,
			promotion.startDay,
			promotion.endDay
		)
		setShowModalEdit(true)
	}

	const handleAddButtonClick = () => {
		addPromotionModal.setAll('', '', '', null, null)
		setShowModalAdd(true)
	}

	const handleAddPromotionSubmit = async () => {
		console.log(addPromotionModal)

		if (!addPromotionModal.validate()) {
			toast.error('Tất cả các trường đều không được để trống')
			return
		}

		try {
			const res = await toast.promise(
				api.post('/discount', {
					discountCode: addPromotionModal.id,
					discountDescription: addPromotionModal.description,
					discountPercent: addPromotionModal.percent,
					startDay: addPromotionModal.startDay,
					endDay: addPromotionModal.endDay,
				}),
				{
					pending: 'Đang tạo khuyến mãi',
					success: 'Tạo thành công',
					error: 'Tạo thất bại',
				}
			)

			await fetchPromotion()
			setShowModalAdd(false)
		} catch (error) {}
	}

	return (
		<div>
			<div className='pt-9 w-[1200px]	pl-10 h-full bg-[#f8f8f8]'>
				<div className='mb-12 flex justify-between'>
					<p className='text-primary text-2xl font-normal'>
						Thông tin khuyến mãi
					</p>
					<Link to='/admin/notification'>
						<img
							src={iconNotification}
							alt=''
							className='hover:cursor-pointer'
						/>
					</Link>
				</div>

				<div className='rounded-3xl border-third border-8 px-3 bg-third mb-16'>
					<div className='grid '>
						<table className='text-lg bg-third '>
							<thead className='text-primary '>
								<th className='py-4 px-2 text-left border-b border-gray-200'></th>
								<th className='py-4 px-2 text-left border-b w-[180px] border-gray-200'>
									<center>Mã</center>
								</th>
								<th className='py-4 px-2 text-left border-b w-[380px] border-gray-200'>
									<center>Mô tả</center>
								</th>
								<th className='py-4 px-2 text-left border-b w-[120px] border-gray-200'>
									<center>Mức giảm</center>
								</th>
								<th className='py-4 px-2 text-left border-b w-[220px] border-gray-200 '>
									<center>Ngày bắt đầu</center>
								</th>
								<th className='py-4 px-4 w-[160px] text-left border-b border-gray-200 '>
									<center>Ngày kết thúc</center>
								</th>
								<th className='py-4 px-4 text-left border-b border-gray-200' />
							</thead>
							<tbody>
								{promotionData.map((pro) => (
									<PromotionDetail
										key={pro.id}
										id={pro.id}
										description={pro.discountDescription}
										percent={pro.discountPercent}
										startDay={pro.startDay}
										endDay={pro.endDay}
										onEditButtonClick={() =>
											handleEditButtonClick(pro.id)
										}
									/>
								))}
							</tbody>
						</table>
					</div>
					<div className='mt-40 pl-18 text-xl font-normal flex mb-10 justify-between'>
						<div className='flex gap-9'>
							<button
								className=' h-[50px] py-2 px-8 rounded-2xl  bg-white border-primary border-[3px] text-primary hover:border-primary hover:text-white 
						hover:bg-primary focus:outline-none'
								onClick={handleAddButtonClick}>
								Thêm khuyến mãi
							</button>
							<button
								className='mr-12 h-[50px] px-9 py-2 rounded-2xl bg-white border-primary border-[3px] text-primary hover:border-primary hover:text-white hover:bg-primary focus:outline-none'
								onClick={() => setShowModalRemove(true)}>
								Xóa khuyến mãi
							</button>

							<AddPromotionModal
								isOpen={showModalAdd}
								onClose={() => setShowModalAdd(false)}
								promotionInfo={addPromotionModal}
								onSubmit={handleAddPromotionSubmit}
							/>

							{showModalEdit ? (
								<div>
									<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
										<div className='relative my-6'>
											{/*content*/}
											<div className='border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
												{/*header*/}
												<div className='flex  justify-center p-5 border-b border-solid'>
													<h3 className='text-2xl font-medium text-primary '>
														Sửa khuyến mãi
													</h3>
												</div>
												{/*body*/}
												<div className='justify-center flex gap-7 flex-col px-7 mt-4   '>
													<div className='flex gap-8 items-center text-lg '>
														<p className='w-[160px] font-medium'>
															Mã khuyến mãi:
														</p>
														<input
															type='text'
															className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
															value={editPromotionModal.id}
															onChange={
																editPromotionModal.handleChangeId
															}
														/>
													</div>
													<div className='flex gap-8 items-center text-lg '>
														<p className='w-[160px] font-medium'>
															Mô tả:
														</p>
														<textarea
															name=''
															id=''
															cols=''
															rows=''
															className='w-[300px] h-[150px]  border-2 px-3 border-primary rounded-lg focus:outline-none resize-none'
															value={
																editPromotionModal.description
															}
															onChange={
																editPromotionModal.description
															}></textarea>
													</div>
													<div className='flex gap-8 items-center text-lg '>
														<p className='w-[160px] font-medium'>
															Mức giảm:
														</p>
														<input
															type='text'
															className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
															value={
																editPromotionModal.percent
															}
															onChange={
																editPromotionModal.percent
															}
														/>
													</div>
													<div className='flex gap-8 items-center text-lg '>
														<p className='w-[160px] font-medium'>
															Ngày bắt đầu:
														</p>
														<div className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'>
															<input
																type='text'
																value={
																	editPromotionModal.startDay
																}
																onChange={
																	editPromotionModal.startDay
																}
															/>
														</div>
													</div>
													<div className='flex gap-8 items-center text-lg '>
														<p className='w-[160px] font-medium'>
															Ngày kết thúc
														</p>
														<input
															type='text'
															className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
															value={
																editPromotionModal.endDay
															}
															onChange={
																editPromotionModal.endDay
															}
														/>
													</div>
												</div>
												{/*footer*/}
												<div className='flex items-center justify-end p-6 border-t border-solid rounded-b mt-4'>
													<button
														className=' background-transparent font-bold uppercase px-6 py-2 text-sm  bg-white border-primary border-2 text-primary hover:border-primary hover:text-white 
													hover:bg-primary outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150'
														type='button'
														onClick={() =>
															setShowModalEdit(false)
														}>
														Hủy
													</button>
													<button
														className='bg-white text-primary  border-primary border-2 font-bold uppercase rounded-lg text-sm px-4 py-2 outline-none hover:bg-primary hover:border-primary hover:text-white  focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
														type='button'
														onClick={() =>
															toast.info(
																'Chức năng chưa được hỗ trợ'
															)
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

							{showModalRemove ? (
								<div>
									<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
										<div className='relative '>
											{/*content*/}
											<div className='border-[3px] border-primary bg-[#fff8ee] rounded-xl relative flex flex-col w-full outline-none focus:outline-none'>
												<div className='justify-center flex flex-col px-10 pt-8'>
													<center>
														<p className='w-[260px] font-medium'>
															Bạn có chắc chắn muốn xóa
															khuyến mãi này không ?
														</p>
													</center>
												</div>
												<div className='flex justify-center gap-8 p-6 rounded-b'>
													<button
														className=' background-transparent font-bold uppercase px-6 py-2 text-sm  bg-white border-primary border-2 text-primary hover:border-primary hover:text-white 
													hover:bg-primary outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150'
														type='button'
														onClick={() =>
															setShowModalRemove(false)
														}>
														Hủy
													</button>
													<button
														className='bg-white text-primary  border-primary border-2 font-bold uppercase rounded-lg text-sm px-4 py-2 outline-none hover:bg-primary hover:border-primary hover:text-white  focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
														type='button'
														onClick={() =>
															toast.info(
																'Chức năng chưa được hỗ trợ'
															)
														}>
														Xóa
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
		</div>
	)
}
