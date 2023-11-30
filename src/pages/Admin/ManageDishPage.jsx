import React, { useEffect, useState } from 'react'
import DishDetail from '~/components/DishDetail_ManageDish/DishDetail'
import { api } from '~/services/axios'
import useEditDishModal from '~/hooks/useEditDishModal'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { EditDishModal } from '~/components/Modal/EditDishModal'
import { toast } from 'react-toastify'

export const ManageDishPage = () => {
	const [showModalAdd, setShowModalAdd] = useState(false)
	const [showModalEdit, setShowModalEdit] = useState(false)
	const [showModalRemove, setShowModalRemove] = useState(false)
	const [dishesData, setDishesData] = useState([])
	const editDishModal = useEditDishModal()

	const fetchDish = async () => {
		try {
			const res = await api.get('/dish/')
			const dishes = res.data.data
			setDishesData(dishes)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchDish()
	}, [])

	const handleEditButtonClick = (id) => {
		const dish = dishesData.find((value) => value.id === id)
		if (!dish) return

		editDishModal.setAll(
			dish.id,
			dish.dishName,
			dish.menu.menuName,
			dish.images,
			dish.dishPrice,
			dish.dishDescription
		)

		setShowModalEdit(true)
	}

	const handleEditDishSubmit = async () => {
		try {
			const formData = new FormData()
			formData.append('dishName', editDishModal.name);
			formData.append('menuName', editDishModal.kind);
			formData.append('dishPrice', editDishModal.price);
			formData.append('dishDescription', editDishModal.description)
			// formData.append('images', )
			const res = await toast.promise(
				api.put(`/dish/${editDishModal.id}`, formData),
				{
					pending: 'Đang sửa thông tin món ăn',
					success: 'Sửa thông tin món ăn thành công',
					error: 'Sửa thông tin món ăn thất bại'
				}
			)

			await fetchDish();
			setShowModalEdit(false);
		} catch (error) {
			
		}
	}

	return (
		<div className='pt-9 w-[1280px]	pl-10 h-full bg-[#f8f8f8]'>
			<div className='mb-12'>
				<p className='text-primary text-2xl font-normal'>Quản lý món ăn</p>
				<NotificationsNoneOutlinedIcon sx={{width: '100px', height: '100px'}}/>
			</div>

			<div className='rounded-3xl border-third border-8 px-3 bg-third mb-16'>
				<div className='grid '>
					<table className='text-lg bg-third '>
						<thead className='text-primary text-left'>
							<th className='py-4 px-2 text-left border-b border-gray-200'>
								<center>STT</center>
							</th>
							<th className='py-4 px-2 text-left border-b border-gray-200'>
								<center>Phân loại</center>
							</th>
							<th className='py-4 px-2 text-left border-b border-gray-200'>
								<center>Tên</center>
							</th>
							<th className='py-4 px-2 text-left border-b w-[300px] border-gray-200 '>
								<center>Hình ảnh</center>
							</th>
							<th className='py-4 px-4 w-[380px] text-left border-b border-gray-200 '>
								<center>Mô tả</center>
							</th>
							<th className='py-4 px-2 text-left border-b border-gray-200'>
								<center>Giá</center>
							</th>
						</thead>
						<tbody>
							{dishesData.map((dish) => (
								<DishDetail
									key={dish.id}
									id={dish.id}
									kind={dish.menu.menuName}
									name={dish.dishName}
									description={dish.dishDescription}
									price={dish.dishPrice}
									imgs={dish.images}
									onEditButtonClick={() =>
										handleEditButtonClick(dish.id)
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
							onClick={() => setShowModalAdd(true)}>
							Thêm món ăn
						</button>
						<button
							className='mr-12 h-[50px] px-9 py-2 rounded-2xl bg-white border-primary border-[3px] text-primary hover:border-primary hover:text-white 
						hover:bg-primary focus:outline-none'
							onClick={() => setShowModalRemove(true)}>
							Xóa món ăn
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
													Thêm món ăn
												</h3>
											</div>
											{/*body*/}
											<div className='justify-center flex gap-7 flex-col px-7 mt-4   '>
												<div className='flex gap-8 items-center text-lg '>
													<p className='w-[160px] font-medium'>
														Tên món ăn:
													</p>
													<input
														type='text'
														className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
													/>
												</div>
												<div className='flex gap-8 items-center text-lg '>
													<p className='w-[160px] font-medium'>
														Phân loại món ăn:
													</p>
													<input
														type='text'
														className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
													/>
												</div>
												<div className='flex gap-8 items-center text-lg '>
													<p className='w-[160px] font-medium'>
														Giá:
													</p>
													<input
														type='text'
														className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
													/>
												</div>
												<div className='flex gap-8 items-center text-lg '>
													<p className='w-[160px] font-medium'>
														Hình ảnh:
													</p>
													<div className=''>
														<input type='file' />
													</div>
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
														className='w-[300px] h-[80px] border-2 px-3 border-primary rounded-lg focus:outline-none'></textarea>
												</div>
											</div>
											{/*footer*/}
											<div className='flex items-center justify-end p-6 border-t border-solid rounded-b mt-4'>
												<button
													className=' background-transparent font-bold uppercase px-6 py-2 text-sm  bg-white border-primary border-2 text-primary hover:border-primary hover:text-white 
													hover:bg-primary outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150'
													type='button'
													onClick={() =>
														setShowModalAdd(false)
													}>
													Hủy
												</button>
												<button
													className='bg-white text-primary  border-primary border-2 font-bold uppercase rounded-lg text-sm px-4 py-2 outline-none hover:bg-primary hover:border-primary hover:text-white  focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
													type='button'
													onClick={() =>
														setShowModalAdd(false)
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
						{showModalEdit ? (
							<EditDishModal
								editDishModal={editDishModal}
								isOpen={showModalEdit}
								onClose={() => setShowModalEdit(false)}
								onSubmit={handleEditDishSubmit}
							/>
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
														Bạn có chắc chắn muốn xóa món ăn
														này không ?
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
														setShowModalRemove(false)
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
	)
}
