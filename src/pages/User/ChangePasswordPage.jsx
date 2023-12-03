import React, { useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { api } from '~/services/axios'
import { toast } from 'react-toastify'

export const ChangePasswordPage = () => {
	const [isShowCurPassword, setIsShowCurPassword] = useState(false)
	const [isShowNewPassword, setIsShowNewPassword] = useState(false)
	const [isShowRePassword, setIsShowRePassword] = useState(false)
	const [curPassword, setCurPassword] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [rePassword, setRePassword] = useState('')

	const handleChangeCurPassword = (e) => setCurPassword(e.target.value)
	const handleChangeNewPassword = (e) => setNewPassword(e.target.value)
	const handleChangeRePassword = (e) => setRePassword(e.target.value)

	const togglePassword = (prev) => !prev

	const handleSubmit = async () => {
		if (!curPassword) {
			toast.error('Mật khẩu không được để trống')
			return
		}
		if (!newPassword) {
			toast.error('Mật khẩu mới không được để trống')
			return
		}
		if (newPassword !== rePassword) {
			toast.error('Mật khẩu mới không trùng khớp')
			return
		}

		try {
			const res = await toast.promise(
				api.post('/user/change-password', {
					oldPassword: curPassword,
					newPassword: newPassword,
				}),
				{
					pending: 'Đang thay đổi mật khẩu',
					success: 'Đổi mật khẩu thành công',
					error: 'Đổi mật khẩu thất bại',
				}
			)

			setCurPassword('')
			setNewPassword('')
			setRePassword('')
		} catch (error) {
			if (error.response) {
				const status = error.response.status
				if (status === 400) {
					toast.error('Sai mật khẩu')
				}
			}
		}
	}

	const handleRePasswordKeyDown = (e) => {
		if (e.key !== 'Enter') {
			return 
		}

		e.preventDefault()
		handleSubmit()
	}

	return (
		<div className='w-full h-full pl-10 pt-10'>
			<div className='w-full flex justify-center'>
				<div className='w-[420px] h-[540px] flex flex-col items-center bg-[#FFEFD5] border-2 border-primary border-solid rounded-xl gap-5 justify-center'>
					<p className='mb-5 text-2xl text-second font-medium uppercase'>
						Đổi mật khẩu
					</p>
					<div>
						<label className='flex mb-2' htmlFor='current-password'>
							Nhập mật khẩu hiện tại của bạn:{' '}
						</label>
						<div className='text-second bg-third w-[300px] h-[42px] flex flex-row justify-center items-center border-2 border-primary border-solid rounded-md px-4'>
							<input
								className=' bg-third w-full h-full py-2 outline-none'
								type={isShowCurPassword ? 'text' : 'password'}
								id='current-password'
								value={curPassword}
								onChange={handleChangeCurPassword}
							/>
							{isShowCurPassword ? (
								<div
									className='cursor-pointer'
									id='eyeOpen'
									onClick={() => setIsShowCurPassword(togglePassword)}>
									<VisibilityOffIcon />
								</div>
							) : (
								<div
									className='cursor-pointer'
									id='eyeOpen'
									onClick={() => setIsShowCurPassword(togglePassword)}>
									<RemoveRedEyeIcon />
								</div>
							)}
						</div>
					</div>

					<div>
						<label className='flex mb-2' htmlFor='new-password'>
							Nhập mật khẩu mới:{' '}
						</label>
						<div className='text-second bg-third w-[300px] h-[42px] cursor-text flex flex-row justify-center items-center border-2 border-primary border-solid rounded-md px-4'>
							<input
								id='new-password'
								className='bg-third h-full w-full outline-none py-2'
								type={isShowNewPassword ? 'text' : 'password'}
								value={newPassword}
								onChange={handleChangeNewPassword}
							/>
							{isShowNewPassword ? (
								<div
									className='cursor-pointer'
									id='eyeOpen'
									onClick={() => setIsShowNewPassword(togglePassword)}>
									<VisibilityOffIcon />
								</div>
							) : (
								<div
									className='cursor-pointer'
									id='eyeOpen'
									onClick={() => setIsShowNewPassword(togglePassword)}>
									<RemoveRedEyeIcon />
								</div>
							)}
						</div>
					</div>

					<div>
						<label className='flex mb-2' htmlFor='re-password'>
							Xác nhận mật khẩu mới:{' '}
						</label>
						<div className='text-second bg-third w-[300px] h-[42px] cursor-text flex flex-row justify-center items-center border-2 border-primary border-solid rounded-md px-4'>
							<input
								id='re-password'
								className='bg-third h-full w-full outline-none py-2'
								type={isShowRePassword ? 'text' : 'password'}
								value={rePassword}
								onChange={handleChangeRePassword}
								onKeyDown={handleRePasswordKeyDown}
							/>
							{isShowRePassword ? (
								<div
									className='cursor-pointer'
									id='eyeOpen'
									onClick={() => setIsShowRePassword(togglePassword)}>
									<VisibilityOffIcon />
								</div>
							) : (
								<div
									className='cursor-pointer'
									id='eyeOpen'
									onClick={() => setIsShowRePassword(togglePassword)}>
									<RemoveRedEyeIcon />
								</div>
							)}
						</div>
					</div>

					<button
						className='w-[150px] h-[50px] rounded-[10px] mt-5 text-third bg-primary outline-none'
						onClick={handleSubmit}>
						Đổi mật khẩu
					</button>
					<a href='/forgot-password'>Quên mật khẩu ?</a>
				</div>
			</div>
		</div>
	)
}
