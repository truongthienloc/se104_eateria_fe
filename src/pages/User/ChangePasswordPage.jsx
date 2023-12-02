import React, { useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

export const ChangePasswordPage = () => {
	const [isShow, setIsShow] = useState(false)
	const onTogglePassword = () => {
		setIsShow(!isShow)
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
								type='text'
								id='current-password'
							/>
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
								type={isShow ? 'text' : 'password'}></input>
							{isShow ? (
								<div
									className='cursor-pointer'
									id='eyeOpen'
									onClick={onTogglePassword}>
									<VisibilityOffIcon />
								</div>
							) : (
								<div
									className='cursor-pointer'
									id='eyeOpen'
									onClick={onTogglePassword}>
									<RemoveRedEyeIcon />
								</div>
							)}
						</div>
					</div>

					<div>
						<label className='flex mb-2' htmlFor='new-password'>
							Xác nhận mật khẩu mới:{' '}
						</label>
						<div className='text-second bg-third w-[300px] h-[42px] cursor-text flex flex-row justify-center items-center border-2 border-primary border-solid rounded-md px-4'>
							<input
								id='new-password'
								className='bg-third h-full w-full outline-none py-2'
								type={isShow ? 'text' : 'password'}></input>
							{isShow ? (
								<div
									className='cursor-pointer'
									id='eyeOpen'
									onClick={onTogglePassword}>
									<VisibilityOffIcon />
								</div>
							) : (
								<div
									className='cursor-pointer'
									id='eyeOpen'
									onClick={onTogglePassword}>
									<RemoveRedEyeIcon />
								</div>
							)}
						</div>
					</div>

					<button className='w-[150px] h-[50px] rounded-[10px] mt-5 text-third bg-primary outline-none'>
						Đổi mật khẩu
					</button>
					<a href='/forgot-password'>Quên mật khẩu ?</a>
				</div>
			</div>
		</div>
	)
}
