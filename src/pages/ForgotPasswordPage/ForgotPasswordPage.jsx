import React from 'react'
import { OutlinedInput, styled } from '@mui/material'

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

export default function ForgotPasswordPage() {
	return (
		<div className='flex flex-row font justify-evenly py-16'>

			<div className='flex flex-col gap-4 p-14 bg-[#FFEFD5] border-primary border-[2px] items-center rounded-lg'>
				<h2 className='font-bold text-2xl'>QUÊN MẬT KHẨU</h2>
				<div className='flex flex-col gap-1 items-center'>
					<label htmlFor='phone-number-input'>Vui lòng nhập số điện thoại của bạn *</label>
					<FormInput
						id='phone-number-input'
						color='primary'
						placeholder='090xxxx'
					/>
				</div>
				
                <p>Mật khẩu mới sẽ được gửi đến số điện thoại của bạn!</p>

				<button className='px-6 py-3 bg-primary text-white text-lg'>
					Đăng nhập
				</button>
			</div>
		</div>
	)
}
