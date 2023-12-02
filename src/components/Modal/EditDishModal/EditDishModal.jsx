import React, { useState, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close'

export default function EditDishModal({ isOpen, editDishModal, onClose, onSubmit }) {
	const [images, setImages] = useState([])
	console.log(editDishModal);
	const handleAddImageClick = () => {
		const input = document.createElement('input')
		input.type = 'file'
		input.accept = 'image/*'
		const handleFileChange = (e) => {
			const file = e.target.files[0]
			// console.log(file);
			if (file) {
				editDishModal.handleAddImageFiles(file)
			}

			input.removeEventListener('change', handleFileChange)
		}
		input.addEventListener('change', handleFileChange)
		input.click()
	}

	useEffect(() => {
		// console.log(editDishModal);
		const newImages = editDishModal.imageFiles.map((image) => {
			const link = URL.createObjectURL(image)

			return {
				id: `${image.name}-${link}`,
				imageLink: link,
			}
		})

		setImages(newImages)

		return () => {
			for (const image of images) {
				URL.revokeObjectURL(image.imageLink)
			}
		}
	}, [editDishModal.imageFiles])

	const handleDeleteImage = (id) => {
		const index = images.findIndex((value) => value.id === id)
		if (index === -1) {
			return
		}

		editDishModal.handleRemoveImageFiles(editDishModal.imageFiles[index])
	}

	const handleDeleteAvailableImage = (id) => {
		editDishModal.handleDeleteImage(id)
	}

	if (!isOpen) return null
	return (
		<div>
			<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
				<div className='relative my-6'>
					{/*content*/}
					<div className='border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
						{/*header*/}
						<div className='flex  justify-center p-5 border-b border-solid'>
							<h3 className='text-2xl font-medium text-primary '>
								Sửa món ăn
							</h3>
						</div>
						{/*body*/}
						<div className='justify-center flex gap-7 flex-col px-7 mt-4   '>
							<div className='flex gap-8 items-center text-lg '>
								<p className='w-[160px] font-medium'>Tên món ăn:</p>
								<input
									type='text'
									className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
									value={editDishModal.name}
									onChange={editDishModal.handleChangeName}
								/>
							</div>
							<div className='flex gap-8 items-center text-lg '>
								<p className='w-[160px] font-medium'>Phân loại món ăn:</p>
								<input
									type='text'
									className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
									value={editDishModal.kind}
									onChange={editDishModal.handleChangeKind}
								/>
							</div>
							<div className='flex gap-8 items-center text-lg '>
								<p className='w-[160px] font-medium'>Giá:</p>
								<input
									type='text'
									className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
									value={editDishModal.price}
									onChange={editDishModal.handleChangePrice}
								/>
							</div>
							<div className='flex gap-8 items-center text-lg '>
								<p className='w-[160px] font-medium'>Hình ảnh:</p>
								<div className='grid grid-flow-row grid-cols-2 gap-4 flex-wrap items-center'>
									{editDishModal.imgs.length > 0 &&
										editDishModal.imgs.map((image) => (
											<ImageItem
												key={image.id}
												image={image}
												onDeleteClick={() =>
													handleDeleteAvailableImage(image.id)
												}
											/>
										))}
									{images.length > 0 &&
										images.map((image) => (
											<ImageItem
												key={image.id}
												image={image}
												onDeleteClick={() =>
													handleDeleteImage(image.id)
												}
											/>
										))}
									<button
										className='w-10 h-10 flex items-center justify-center border-2 border-primary text-primary'
										onClick={handleAddImageClick}>
										+
									</button>
								</div>
							</div>
							<div className='flex gap-8 items-center text-lg '>
								<p className='w-[160px] font-medium'>Mô tả:</p>
								<textarea
									name=''
									id=''
									cols=''
									rows=''
									className='w-[300px] h-[80px] border-2 px-3 border-primary rounded-lg focus:outline-none'
									value={editDishModal.description}
									onChange={
										editDishModal.handleChangeDescription
									}></textarea>
							</div>
						</div>
						{/*footer*/}
						<div className='flex items-center justify-end p-6 border-t border-solid rounded-b mt-4'>
							<button
								className=' background-transparent font-bold uppercase px-6 py-2 text-sm  bg-white border-primary border-2 text-primary hover:border-primary hover:text-white 
													hover:bg-primary outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150'
								type='button'
								onClick={onClose}>
								Hủy
							</button>
							<button
								className='bg-white text-primary  border-primary border-2 font-bold uppercase rounded-lg text-sm px-4 py-2 outline-none hover:bg-primary hover:border-primary hover:text-white  focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
								type='button'
								onClick={onSubmit}>
								Xác nhận
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
		</div>
	)
}

function ImageItem({ image, onDeleteClick }) {
	return (
		<div className='w-32 h-32 relative'>
			<img
				key={image.id}
				src={image.imageLink}
				alt={`dish`}
				className='w-32 h-32'
			/>
			<button
				className='p-1 flex items-center justify-center bg-sub1 transition-opacity hover:opacity-80 absolute top-0 right-0 rounded-full shadow'
				onClick={onDeleteClick}>
				<CloseIcon />
			</button>
		</div>
	)
}
