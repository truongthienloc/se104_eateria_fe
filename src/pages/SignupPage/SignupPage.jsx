import React, { useState, useEffect } from 'react'
import { OutlinedInput, InputAdornment, IconButton, styled } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { AuthBar } from '~/components/AuthBar'

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

export default function SignupPage() {
	const [showPassword, setShowPassword] = useState(false)
	const [showRePassword, setShowRePassword] = useState(false)
	const [email, setEmail] = useState('');
	const [fullName, setFullName] = useState('');
	const [password, setPassword] = useState('');
	const [rePassword, setRePassword] = useState('');

	const handleClickShowPassword = () => setShowPassword((show) => !show)
	const handleClickShowRePassword = () => setShowRePassword((show) => !show)
	const handleChangeEmail = e => setEmail(e.target.value);
	const handleChangeFullName = e => setFullName(e.target.value);
	const handleChangePassword = e => setPassword(e.target.value);
	const handleChangeRePassword = e => setRePassword(e.target.value);

	const handleMouseDownPassword = (event) => {
		event.preventDefault()
	}

	const handleSubmit = () => {

	}

	return (
		<div className='flex flex-row font justify-evenly py-16'>
			<AuthBar type={'signup'} />

			<div className='flex flex-col gap-4 p-14 bg-[#FFEFD5] border-primary border-[2px] items-center rounded-lg'>
				<h2 className='font-bold text-2xl'>ĐĂNG KÝ</h2>
				<div className='flex flex-col gap-1'>
					<label htmlFor='phone-number-input'>
						Vui lòng nhập Email *
					</label>
					<FormInput
						id='phone-number-input'
						color='primary'
						placeholder='example@gmail.com'
						value={email}
						onChange={handleChangeEmail}
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<label htmlFor='name-input'>Họ và tên *</label>
					<FormInput
						id='name-input'
						color='primary'
						placeholder='Your fullname'
						value={fullName}
						onChange={handleChangeFullName}
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<label htmlFor='password-input'>Nhập mật khẩu *</label>
					<FormInput
						id='password-input'
						type={showPassword ? 'text' : 'password'}
						sx={{ letterSpacing: '0.1rem' }}
						color='primary'
						placeholder='Input password'
						value={password}
						onChange={handleChangePassword}
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
				</div>
				<div className='flex flex-col gap-1'>
					<label htmlFor='re-password-input'>Xác nhận lại mật khẩu *</label>
					<FormInput
						id='re-password-input'
						type={showRePassword ? 'text' : 'password'}
						sx={{ letterSpacing: '0.1rem' }}
						color='primary'
						placeholder=''
						value={rePassword}
						onChange={handleChangeRePassword}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={handleClickShowRePassword}
									onMouseDown={handleMouseDownPassword}
									edge='end'>
									{showRePassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
					/>
				</div>

				<button className='mt-8 px-8 py-3 bg-primary text-white text-lg'
					onClick={handleSubmit}
				>
					Đăng ký
				</button>
			</div>
		</div>
	)
}
