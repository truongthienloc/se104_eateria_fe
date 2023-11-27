import React, {useState} from 'react'
import { OutlinedInput, styled } from '@mui/material'
import { api } from '~/services/axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

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
	const navigate = useNavigate();
	const [email, setEmail] = useState('');

	const handleChangeEmail = (e) => setEmail(e.target.value);

	const handleSubmit = async () => {
		if (email === '') {
			toast.error('Email không được để trống')
			return
		}

		try {
			const res = await toast.promise(
				api.post('/user/forgot-password', {
					email: email
				}),
				{
					pending: 'Đang gửi yêu cầu',
					success: 'Gửi thành công, vui lòng check mail',
					error: 'Gửi thất bại'
				}
			)

			setTimeout(() => {
				navigate('/login')
			}, 1000)
			
		} catch (error) {
			console.log(error);
			if (error.response) {
				const status = error.response.status
				if (status === 404) {
					toast.error('Email không tồn tại');
				}
			}
		}
	}

	return (
		<div className='flex flex-row font justify-evenly py-16'>

			<div className='flex flex-col gap-4 p-14 bg-[#FFEFD5] border-primary border-[2px] items-center rounded-lg'>
				<h2 className='font-bold text-2xl'>QUÊN MẬT KHẨU</h2>
				<div className='flex flex-col gap-1 items-center'>
					<label htmlFor='email-input'>Vui lòng nhập email của bạn *</label>
					<FormInput
						id='email-input'
						color='primary'
						placeholder='example@gmail.com'
						value={email}
						onChange={handleChangeEmail}
					/>
				</div>
				
                <p>Mật khẩu mới sẽ được gửi đến email của bạn!</p>

				<button className='px-6 py-3 bg-primary text-white text-lg'
					onClick={handleSubmit}
				>
					Gửi mật khẩu
				</button>
			</div>
		</div>
	)
}
