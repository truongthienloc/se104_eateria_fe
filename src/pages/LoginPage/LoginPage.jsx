import React, { useState } from 'react'
import { OutlinedInput, InputAdornment, IconButton, styled } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { AuthBar } from '~/components/AuthBar'
import { toast } from 'react-toastify'
import googleIcon from '~/assets/images/google.svg'
import { api } from '~/services/axios'
import { useDispatch } from 'react-redux'
import { initUserValue } from '~/features/user/userSlice'
const FormInput = styled(OutlinedInput)`
	width: 300px;
	background-color: white;
	border-radius: 0.5rem;
	border-width: 2px;
	border-color: var(--primary-color);
	&:hover {
		.MuiOutlinedInput-notchedOutline {
			border-color: transparent;
		}
	}
	&.Mui-focused {
		outline: 2px solid var(--primary-color);
		.MuiOutlinedInput-notchedOutline {
			border-color: transparent;
		}
	}
`

export default function LoginPage() {
	const navigate = useNavigate()
	const [showPassword, setShowPassword] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const handleClickShowPassword = () => setShowPassword((show) => !show)
	const handleChangeEmail = (e) => setEmail(e.target.value)
	const handleChangePassword = (e) => setPassword(e.target.value)

	const handleMouseDownPassword = (event) => {
		event.preventDefault()
	}

	const handleEmailKeyDown = (e) => {
		if (e.key !== 'Enter') {
			return
		}

		e.preventDefault()
		document.querySelector('#password-input').focus()
	}

	const handlePasswordKeyDown = (e) => {
		if (e.key !== 'Enter') {
			return
		}

		e.preventDefault()
		handleSubmit()
	}

	const handleSubmit = async () => {
		if (email === '') {
			toast.error('Không được để trống email')
			return
		}
		if (password === '') {
			toast.error('Không được để trống password')
			return
		}

		try {
			const res = await toast.promise(
				api.post('/auth/login', {
					email: email,
					password: password,
				}),
				{
					pending: 'Đang đăng nhập',
					success: 'Đăng nhập thành công',
					error: 'Đăng nhập thất bại',
				}
			)

			const token = res.data.accessToken
			if ( token) {
				const resUserInfo = await api.get('user/me/info',{
					headers: {
						Authorization: `bearer ${token}`
					}
				})
				dispatch(initUserValue(resUserInfo.data.data))
			}
			localStorage.setItem('access-token', token)

			setTimeout(() => {
				navigate('/')
			}, 3000)
		} catch (error) {
			console.log('error: ', error)
			if (error.response) {
				const status = error.response.status
				if (status === 401) {
					toast.error('Sai email hoặc password')
				}
			}
		}
	}

	return (
		<div className='flex flex-row font justify-evenly py-16'>
			<AuthBar type={'login'} />

			<div className='flex flex-col gap-4 p-14 bg-[#FFEFD5] border-primary border-[2px] items-center rounded-lg'>
				<h2 className='font-bold text-2xl'>ĐĂNG NHẬP</h2>
				<div className='flex flex-col gap-1'>
					<label htmlFor='email-input'>Email *</label>
					<FormInput
						id='email-input'
						color='primary'
						placeholder='example@gmail.com'
						value={email}
						onChange={handleChangeEmail}
						onKeyDown={handleEmailKeyDown}
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<label htmlFor='password-input'>Mật khẩu *</label>
					<FormInput
						id='password-input'
						type={showPassword ? 'text' : 'password'}
						sx={{ letterSpacing: '0.1rem' }}
						color='primary'
						placeholder='Input password'
						value={password}
						onChange={handleChangePassword}
						onKeyDown={handlePasswordKeyDown}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge='end'>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
					/>
					<a
						href='/forgot-password'
						className='text-second hover:text-second hover:opacity-60'>
						Quên mật khẩu?
					</a>
				</div>

				<div className='w-full flex flex-row gap-2 items-center'>
					<input
						type='checkbox'
						name='remember-me'
						id='remember-me'
						className='w-5 h-5 cursor-pointer'
					/>
					<label htmlFor='remember-me' className='cursor-pointer'>
						Remember me
					</label>
				</div>

				<button
					className='px-6 py-3 bg-primary text-white text-lg'
					onClick={handleSubmit}>
					Đăng nhập
				</button>
				<button className='w-full flex flex-row items-center justify-center gap-5 font-bold text-lg border-primary'>
					<img src={googleIcon} alt='google icon' />
					<p>Đăng nhập với Google</p>
				</button>
			</div>
		</div>
	)
}
