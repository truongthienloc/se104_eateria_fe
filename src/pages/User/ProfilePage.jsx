import React from 'react'
import { UserLayout } from '~/layouts/User/UserLayout'

export const ProfilePage = () => {
	return (
		<div className='w-full h-full pl-10 pt-10'>
			<p className='font-bold text-2xl'>Thông tin khách hàng</p>
			<div className='bg-primary w-[600px] h-1 my-3'></div>
			<div className='flex flex-row gap-24'>
				<div className='flex flex-col gap-10'>
					<div className='bg-third'>
						<p>Tên khách hàng</p>
						<input className='bg-third text-second outline-none border-primary border-[2px] w-[300px] h-[40px] rounded-md px-3 mt-2' placeholder="customer's name here" type="text" />
					</div>
					<div>
						<p>Số điện thoại</p>
						<input className='bg-third text-second outline-none border-primary border-[2px] w-[300px] h-[40px] rounded-md px-3 mt-2' placeholder="customer's numbers here" type="text" />
					</div>
				</div>
				<div className='flex flex-col gap-10'>
					<div>
						<p>Số lần ăn tại quán</p>
						<input className='bg-third text-second outline-none border-primary border-[2px] w-[180px] h-[40px] rounded-md px-3 mt-2' type="text" placeholder='data here' disabled/>
					</div>
					<div>
						<p>Điểm thành viên</p>
						<input className='bg-third text-second outline-none border-primary border-[2px] w-[180px] h-[40px] rounded-md px-3 mt-2' type="text" placeholder='data-here' disabled/>
					</div>
				</div>
			</div>
		</div>
	)
}
