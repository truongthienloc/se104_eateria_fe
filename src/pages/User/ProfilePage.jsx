import React, { useState, useEffect } from 'react'
import { UserLayout } from '~/layouts/User/UserLayout'
import { useDispatch, useSelector } from 'react-redux'
import defaultProfileImg from '~/assets/images/default_profile_image.svg'
import { useForm } from 'react-hook-form'
import { api } from '~/services/axios'
import axios from 'axios'
import { initUserValue } from '~/features/user/userSlice'
import { toast } from 'react-toastify'

export const ProfilePage = () => {
	const user = useSelector((state) => state.user)
	const dispatch = useDispatch()
	const [url, setURL] = useState('')
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			username: '',
			phoneNumber: '',
		},
	})

	const onSubmit = async (data) => {
		const form = new FormData()
		form.append('username', data.username)
		form.append('phoneNumber', data.phoneNumber)
		const res = await api.put(`/user/${user.id}`, form, {
			headers: { 'content-type': 'multipart/form-data' },
		})
		if (res.data.status === 200) {
			dispatch(initUserValue({username: data.username, phoneNumber: data.phoneNumber}))
			toast.success('Cập nhật thông tin thành công')
		}
	}
	const handleSaveButton = (user_id, customerName, customerPhone) => {}
	const handleUploadImage = (e) => {
		const file = e.target.files[0]
		const url = URL.createObjectURL(file)
		setURL(url)
	}
	useEffect(() => {
		if (!user.id) return
		reset({
			username: user.username,
			phoneNumber: user.phoneNumber,
		})
	}, [reset, user.id])
	return (
		<div className='flex flex-row'>
			<div className='h-full pl-10 pt-10'>
				<p className='font-bold text-2xl'>Thông tin khách hàng</p>
				<div className='bg-primary w-[600px] h-1 my-3'></div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='flex flex-row gap-24'>
						<div className='flex flex-col gap-10'>
							<div className='bg-third'>
								<p>Tên khách hàng</p>
								<input
									className='bg-third text-second outline-none border-primary border-[2px] w-[300px] h-[40px] rounded-md px-3 mt-2'
									placeholder={user.username}
									type='text'
									{...register('username')}
								/>
							</div>
							<div>
								<p>Số điện thoại</p>
								<input
									className='bg-third text-second outline-none border-primary border-[2px] w-[300px] h-[40px] rounded-md px-3 mt-2'
									placeholder={
										user.phoneNumber == null
											? 'Bạn chưa cập nhật số điện thoại'
											: user.phoneNumber
									}
									type='text'
									{...register('phoneNumber')}
								/>
							</div>
						</div>
						<div className='flex flex-col gap-10'>
							<div>
								<p>Số lần ăn tại quán</p>
								<input
									className='bg-third text-second outline-none border-primary border-[2px] w-[180px] h-[40px] rounded-md px-3 mt-2'
									type='text'
									placeholder='1'
									disabled
								/>
							</div>
							<div>
								<p>Điểm thành viên</p>
								<input
									className='bg-third text-second outline-none border-primary border-[2px] w-[180px] h-[40px] rounded-md px-3 mt-2'
									type='text'
									placeholder='100'
									disabled
								/>
							</div>
						</div>
					</div>
					<button
						type='submit'
						className='flex justify-center items-center rounded-md bg-primary
					text-third w-[150px] h-[40px] cursor-pointer hover:opacity-80 mt-10 select-none'
						onClick={handleSaveButton}>
						Lưu thông tin
					</button>
				</form>
			</div>
			<div className='w-full text-second flex flex-col justify-center items-center pt-20'>
				<div className=' w-[200px] h-[200px] rounded-[50%]  overflow-hidden'>
					<img
						className='w-full h-full object-fill'
						src={url || defaultProfileImg}
					/>
				</div>
				<label
					className='flex justify-center items-center rounded-md bg-primary
				 text-third w-[200px] h-[40px] cursor-pointer hover:opacity-80 mt-10 select-none px-2'>
					Tải ảnh đại diện mới
					<input type='file' hidden onChange={handleUploadImage} />
				</label>
			</div>
		</div>
	)
}
