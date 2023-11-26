import React from 'react'
import { NavLink } from 'react-router-dom'
const menu = [
	{
		href: '/user/profile',
		label: 'Thông tin khách hàng',
	},
	{
		href: '/user/coupon',
		label: 'Ưu đãi',
	},
	{
		href: '/user/call-waiter',
		label: 'Gọi phục vụ',
	},
	{
		href: '/user/receipt-history',
		label: 'Lịch sử hóa đơn',
	},
	{
		href: '/user/reservation',
		label: 'Thông tin đặt bàn',
	},
	{
		href: '/user/change-password',
		label: 'Thay đổi mật khẩu',
	},
	{
		href: '/user/logout',
		label: 'Đăng xuất',
	},
]

export const User_Sidebar = () => {
	return (
		<div className='flex flex-col items-center gap-8 bg-third shadow-lg w-[400px] h-[800px] ml-[40px] rounded-lg my-8 border-slate-900 border'>
			<div>
				<div className='w-[120px] rounded-[50%] overflow-hidden mt-[30px]'>
					<img src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=' />
				</div>
				<p className='text-second mt-3'>Nguyễn Thị Nở</p>
			</div>
			{menu.map((item) => {
				return (
					<NavLink
						id='user-sidebar'
						key={item.href}
						to={item.href}
						className={
							'w-[250px] h-[40px] flex items-center justify-center rounded-md text-second border-slate-900 border hover:opacity-80 hover:text-primary transition-all'
						}>
						{item.label}
					</NavLink>
				)
			})}
		</div>
	)
}
