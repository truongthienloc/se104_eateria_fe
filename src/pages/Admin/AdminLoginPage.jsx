import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

export function AdminLoginPage() {
	var x = true
	const Show = (e) => {
		if (x) {
			document.getElementById('pass').type = 'text'
			document.getElementById('eyeOpen').classList.add('hidden')
			document.getElementById('eyeClose').classList.remove('hidden')
			x = false
		} else {
			document.getElementById('pass').type = 'password'
			document.getElementById('eyeClose').classList.add('hidden')
			document.getElementById('eyeOpen').classList.remove('hidden')
			x = true
		}
	}
	return (
		<div className='bg-third w-full min-h-screen flex flex-col items-center justify-center '>
			<div className='bg-primary text-white w-full mx-auto max-w-full flex flex-row justify-center'>
				<p>4Food's Administrator</p>
			</div>
			<div className='w-full h-full flex flex-col items-center justify-center '>
				<div className='w-[420px] h-[390px] flex flex-col items-center bg-[#FFEFD5] border-2 border-primary border-solid rounded-xl'>
					<p className='pt-14 text-2xl text-second font-medium mb-11'>
						ĐĂNG NHẬP
					</p>
					<input
						className='text-second bg-third w-[300px] h-[42px] border-2 border-primary border-solid rounded-md mb-11 px-5 outline-none'
						type='text'
						placeholder='Nhập tài khoản'
					/>
					<div className='text-second bg-third w-[300px] h-[42px] cursor-text flex flex-row justify-center items-center border-2 border-primary border-solid rounded-md px-5'>
						<input
							id='pass'
							className='bg-third h-full w-full outline-none'
							type='password'
							placeholder='Nhập mật khẩu'></input>
						<div className='cursor-pointer' id='eyeOpen' onClick={Show}>
							<VisibilityOffIcon />
						</div>
						<div
							className='hidden cursor-pointer'
							id='eyeClose'
							onClick={Show}>
							<RemoveRedEyeIcon />
						</div>
					</div>
					<button className='w-[150px] h-[50px] rounded-[10px] mt-10 text-third bg-primary'>
						Đăng nhập
					</button>
				</div>
			</div>
		</div>
	)
}
