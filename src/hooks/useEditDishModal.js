import React, { useState } from 'react'

function useEditDishModal() {
	const [id, setId] = useState(-1)
	const [name, setName] = useState('')
	const [kind, setKind] = useState('')
	const [imgs, setImgs] = useState([])
	const [price, setPrice] = useState('')
	const [description, setDescription] = useState('')

	const [imageFiles, setImageFiles] = useState([])
	const [deletedImages, setDeletedImages] = useState([])

	const handleChangeName = (e) => setName(e.target.value)
	const handleChangeKind = (e) => setKind(e.target.value);
	const handleChangePrice = (e) => setPrice(e.target.value)
	const handleChangeDescription = (e) => setDescription(e.target.value)

	const handleAddImageFiles = (image) => {
		setImageFiles([...imageFiles, image])
	}

	const handleRemoveImageFiles = (image) => {
		const newImageFiles = imageFiles.filter((value) => value !== image)
		setImageFiles([...newImageFiles])
	}

	const handleDeleteImage = (id) => {
		const image = imgs.find((value) => value.id === id)

		const newImgs = imgs.filter((value) => value.id !== id)
		setImgs(newImgs)
		setDeletedImages([...deletedImages, image])
	}

	const setAll = (id, name, kind, imgs, price, description) => {
		setId(id)
		setName(name)
		setKind(kind)
		setImgs(imgs)
		setPrice(price)
		setDescription(description)
		setImageFiles([])
		setDeletedImages([])
	}

	return {
		id,
		setId,
		name,
		handleChangeName,
		kind,
		handleChangeKind,
		imgs,
		imageFiles,
		handleAddImageFiles,
		handleRemoveImageFiles,
		deletedImages,
		handleDeleteImage,
		price,
		handleChangePrice,
		description,
		handleChangeDescription,
		setAll,
	}
}

export default useEditDishModal
