import React, { useState, useEffect } from 'react'
import { OutlinedInput, InputAdornment, IconButton, styled } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { AuthBar } from '~/components/AuthBar'
import googleIcon from '~/assets/images/google.svg'

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
	const [showPassword, setShowPassword] = useState(false)

	const handleClickShowPassword = () => setShowPassword((show) => !show)

	const handleMouseDownPassword = (event) => {
		event.preventDefault()
	}

	return (
		<div className='flex flex-row font justify-evenly py-16'>
			<AuthBar type={'login'} />

			<div className='flex flex-col gap-4 p-14 bg-[#FFEFD5] border-primary border-[2px] items-center rounded-lg'>
				<h2 className='font-bold text-2xl'>ĐĂNG NHẬP</h2>
				<div className='flex flex-col gap-1'>
					<label htmlFor='phone-number-input'>Số điện thoại *</label>
					<FormInput
						id='phone-number-input'
						color='primary'
						placeholder='090xxxx'
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

				<button className='px-6 py-3 bg-primary text-white text-lg'>
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
