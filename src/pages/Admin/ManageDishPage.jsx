import React, { useEffect, useState } from 'react'
import DishDetail from '~/components/DishDetail_ManageDish/DishDetail'
import { api } from '~/services/axios'
import useEditDishModal from '~/hooks/useEditDishModal'
import iconNotification from '~/assets/images/icon_notification.svg'
import { EditDishModal } from '~/components/Modal/EditDishModal'
import { AddDishModal } from '~/components/Modal/AddDishModal'
import { DeleteDishModal } from '~/components/Modal/DeleteDishModal'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

export const ManageDishPage = () => {
	const [showModalAdd, setShowModalAdd] = useState(false)
	const [showModalEdit, setShowModalEdit] = useState(false)
	const [showModalRemove, setShowModalRemove] = useState(false)
	const [dishesData, setDishesData] = useState([])
	const editDishModal = useEditDishModal()
	const addDishModal = useEditDishModal()

	const fetchDish = async () => {
		try {
			const res = await api.get('/dish/')
			const dishes = res.data.data.map((value) => ({ ...value, isCheck: false }))
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

	const handleCheck = (e, id) => {
		const newDishes = dishesData.map((dish) => {
			if (dish.id !== id) return dish
			return { ...dish, isCheck: !dish.isCheck }
		})
		setDishesData(newDishes)
	}

	const handleEditDishSubmit = async () => {
		try {
			const formData = new FormData()
			formData.append('dishName', editDishModal.name)
			formData.append('menuName', editDishModal.kind)
			formData.append('dishPrice', editDishModal.price)
			formData.append('dishDescription', editDishModal.description)
			for (const image of editDishModal.imageFiles) {
				formData.append('images', image)
			}

			const excutePromise = new Promise(async (resolve, reject) => {
				try {
					if (editDishModal.deletedImages.length > 0) {
						await Promise.all(
							editDishModal.deletedImages.map(async (image) => {
								console.log(image)
								await api.delete(`/dish/images/${image.id}`)
							})
						)
					}

					const res = await api.put(`/dish/${editDishModal.id}`, formData, {
						headers: {
							'Content-Type': 'multipart/form-data',
						},
					})

					resolve(res)
				} catch (error) {
					reject(error)
				}
			})

			const res = await toast.promise(excutePromise, {
				pending: 'Đang sửa thông tin món ăn',
				success: 'Sửa thông tin món ăn thành công',
				error: 'Sửa thông tin món ăn thất bại',
			})

			await fetchDish()
			setShowModalEdit(false)
		} catch (error) {}
	}

	const handleAddDishClick = () => {
		addDishModal.setAll(0, '', '', [], 0, '')
		setShowModalAdd(true)
	}

	const handleAddDishSubmit = async () => {
		if (addDishModal.name === '') {
			toast.error('"Tên món ăn" không được để trống')
			return
		}

		if (addDishModal.kind === '') {
			toast.error('"Phân loại món ăn" không được để trống')
			return
		}

		try {
			const formData = new FormData()
			formData.append('dishName', addDishModal.name)
			formData.append('menuName', addDishModal.kind)
			formData.append('dishPrice', addDishModal.price)
			formData.append('dishDescription', addDishModal.description)
			// console.log(addDishModal.imageFiles);
			for (const image of addDishModal.imageFiles) {
				console.log(image)
				formData.append('images', image)
			}

			const res = await toast.promise(
				api.post('/dish/', formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}),
				{
					pending: 'Đang thêm món ăn',
					success: 'Thêm món ăn thành công',
					error: 'Thêm món ăn thất bại',
				}
			)

			await fetchDish()
			setShowModalAdd(false)
		} catch (error) {
			console.log(error)
		}
	}

	const handleDeleteButtonClick = () => {
		const deletedDishes = dishesData.filter((dish) => dish.isCheck === true)
		if (deletedDishes.length === 0) {
			toast.error('Chưa chọn bất cứ món ăn nào để xóa')
			return
		}
		setShowModalRemove(true)
	}

	const handleDeleteDishSubmit = async () => {
		const deletedDishes = dishesData.filter((dish) => dish.isCheck === true)
		if (deletedDishes.length === 0) {
			toast.error('Chưa chọn bất cứ món ăn nào để xóa')
			return
		}

		try {
			const promises = deletedDishes.map(async (dish) => {
				await api.delete(`/dish/${dish.id}`)
			})

			await toast.promise(Promise.all(promises), {
				pending: 'Đang xóa món ăn',
				success: 'Xóa thành công',
				error: 'Xóa thất bại',
			})

			await fetchDish()
			setShowModalRemove(false)
		} catch (error) {
			console.log(error)
			setShowModalRemove(false)
		}
	}

	return (
		<div className='pt-9 w-[1200px]	pl-10 h-full bg-[#f8f8f8]'>
			<div className='mb-12 flex justify-between'>
				<p className='text-primary text-2xl font-normal'>Quản lý món ăn</p>
				<Link to='/admin/notification'>
					<img src={iconNotification} alt='' className='hover:cursor-pointer' />
				</Link>
			</div>

			<div className='rounded-3xl border-third border-8 px-3 bg-third mb-16'>
				<div className='grid '>
					<table className='text-lg bg-third '>
						<thead className='text-primary text-left'>
							<th className='py-4 px-2 text-left border-b w-[80px] border-gray-200'>
								<center>STT</center>
							</th>
							<th className='py-4 px-2 text-left border-b  border-gray-200'>
								<center>Phân loại</center>
							</th>
							<th className='py-4 px-2 text-left border-b w-[120px] border-gray-200'>
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
									isCheck={dish.isCheck}
									kind={dish.menu.menuName}
									name={dish.dishName}
									description={dish.dishDescription}
									price={dish.dishPrice}
									imgs={dish.images}
									onEditButtonClick={() =>
										handleEditButtonClick(dish.id)
									}
									onCheck={(e) => handleCheck(e, dish.id)}
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
							onClick={handleAddDishClick}>
							Thêm món ăn
						</button>
						<button
							className='mr-12 h-[50px] px-9 py-2 rounded-2xl bg-white border-primary border-[3px] text-primary hover:border-primary hover:text-white 
						hover:bg-primary focus:outline-none'
							onClick={handleDeleteButtonClick}>
							Xóa món ăn
						</button>

						<AddDishModal
							isOpen={showModalAdd}
							addDishModal={addDishModal}
							onClose={() => setShowModalAdd(false)}
							onSubmit={handleAddDishSubmit}
						/>

						<EditDishModal
							editDishModal={editDishModal}
							isOpen={showModalEdit}
							onClose={() => setShowModalEdit(false)}
							onSubmit={handleEditDishSubmit}
						/>

						<DeleteDishModal
							isOpen={showModalRemove}
							onClose={() => setShowModalRemove(false)}
							onSubmit={handleDeleteDishSubmit}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
