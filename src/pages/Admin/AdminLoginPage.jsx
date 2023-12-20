import React, { useState, useEffect } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { api } from '~/services/axios'
import { initUserValue } from '~/features/user/userSlice'
import { useDispatch } from 'react-redux'

export function AdminLoginPage() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)

	const handleChangeEmail = (e) => setEmail(e.target.value)
	const handleChangePassword = (e) => setPassword(e.target.value)
	const handleShowPasswordClick = () => {
		setShowPassword(!showPassword)
	}

	useEffect(() => {
		localStorage.removeItem('access-token')
	}, [])

	const handleSubmit = async () => {
		if (email === '') {
			toast.error('Vui lòng không để trống email')
			return
		}

		if (password === '') {
			toast.error('Vui lòng không để trống password')
			return
		}

		try {
			const res = await toast.promise(
				new Promise(async (resolve, reject) => {
					try {
						const res = await api.post('/auth/login', {
							email: email,
							password: password,
						})

						const accessToken = res.data.accessToken
						localStorage.setItem('access-token', accessToken)

						const res_cur = await api.get('user/me/info')

						if (res_cur.data.data.isAdmin) {
							dispatch(initUserValue(res_cur.data.data))
							resolve(res)
						} else {
							localStorage.removeItem('access-token')
							reject({ response: { status: 411 } })
						}
					} catch (error) {
						reject(error)
					}
				}),
				{
					pending: 'Đang đăng nhập',
					success: 'Đăng nhập thành công',
					error: 'Đăng nhập thất bại',
				}
			)

			const accessToken = res.data.accessToken

			localStorage.setItem('access-token', accessToken)
			setTimeout(() => {
				navigate('/admin/sales-info')
			}, 1000)
		} catch (error) {
			console.log(error)
			if (error.response) {
				const status = error.response.status
				if (status === 401) {
					toast.error('Email hoặc password sai')
				} else if (status === 411) {
					toast.error('Tài khoản của bạn không có quyền admin')
				}
			}
		}
	}

	const handlePasswordKeyDown = (e) => {
		if (e.key !== 'Enter') {
			return
		}

		e.preventDefault()
		handleSubmit()
	}

	return (
		<div className='bg-third w-full min-h-screen flex flex-col gap-48'>
			{/* chỗ này tui hard code gap, ae nào biết chỉ với */}
			<div className='bg-primary text-white w-full mx-auto max-w-full flex flex-row justify-center'>
				<p>4Food's Administrator</p>
			</div>
			<div className='w-full flex justify-center '>
				<div className='w-[420px] h-[390px] flex flex-col items-center bg-[#FFEFD5] border-2 border-primary border-solid rounded-xl'>
					<p className='pt-14 text-2xl text-second font-medium mb-11'>
						ĐĂNG NHẬP
					</p>
					<input
						className='text-second bg-third w-[300px] h-[42px] border-2 border-primary border-solid rounded-md mb-11 px-5 outline-none'
						type='text'
						placeholder='Nhập tài khoản'
						value={email}
						onChange={handleChangeEmail}
					/>
					<div className='text-second bg-third w-[300px] h-[42px] cursor-text flex flex-row justify-center items-center border-2 border-primary border-solid rounded-md px-5'>
						<input
							id='pass'
							className='bg-third h-full w-full outline-none'
							type={showPassword ? 'text' : 'password'}
							placeholder='Nhập mật khẩu'
							value={password}
							onChange={handleChangePassword}
							onKeyDown={handlePasswordKeyDown}
						/>
						<div
							className='cursor-pointer'
							id='eyeOpen'
							onClick={handleShowPasswordClick}>
							{showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
						</div>
					</div>
					<button
						className='w-[150px] h-[50px] rounded-[10px] mt-10 text-third bg-primary'
						onClick={handleSubmit}>
						Đăng nhập
					</button>
				</div>
			</div>
		</div>
	)
}
