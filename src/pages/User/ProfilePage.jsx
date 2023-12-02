import React, { useState } from 'react'
import { UserLayout } from '~/layouts/User/UserLayout'
import { useSelector } from 'react-redux';



export const ProfilePage = () => {
	const user = useSelector((state) =>state.user);
	console.log(user);
	const [url,setURL] = useState('');
	const handleSaveButton = (user_id, customerName, customerPhone) => {

	}
	const handleUploadImage = (e) => {
		const file = e.target.files[0];
		const url = URL.createObjectURL(file);
		setURL(url);
	}
	return (
		<div className='flex flex-row'>
			<div className='h-full pl-10 pt-10'>
				<p className='font-bold text-2xl'>Thông tin khách hàng</p>
				<div className='bg-primary w-[600px] h-1 my-3'></div>

				<div className='flex flex-row gap-24'>
					<div className='flex flex-col gap-10'>
						<div className='bg-third'>
							<p>Tên khách hàng</p>
							<input
								className='bg-third text-second outline-none border-primary border-[2px] w-[300px] h-[40px] rounded-md px-3 mt-2'
								placeholder={user.username}
								type='text'
							/>
						</div>
						<div>
							<p>Số điện thoại</p>
							<input
								className='bg-third text-second outline-none border-primary border-[2px] w-[300px] h-[40px] rounded-md px-3 mt-2'
								placeholder={(user.phoneNumber == null)? 'Bạn chưa cập nhật số điện thoại':user.phoneNumber}
								type='text'
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
				<div className='flex justify-center items-center rounded-md bg-primary
				 text-third w-[150px] h-[40px] cursor-pointer hover:opacity-80 mt-10 select-none'
				 	onClick={handleSaveButton}>
					Lưu thông tin
				</div>
			</div>
			<div className='w-full text-second flex flex-col justify-center items-center pt-20'>
				<div className=' w-[200px] h-[200px] rounded-[50%]  overflow-hidden'>
					<img
					className="w-full h-full object-fill"
					src={url || 'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='} />
				</div>
				<label className='flex justify-center items-center rounded-md bg-primary
				 text-third w-[200px] h-[40px] cursor-pointer hover:opacity-80 mt-10 select-none px-2'>
					Tải ảnh đại diện mới
					<input type="file" hidden onChange={handleUploadImage}/>
				</label>	
			</div>
		</div>
	)
}
