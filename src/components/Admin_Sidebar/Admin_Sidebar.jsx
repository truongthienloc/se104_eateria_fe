import React from 'react'
import { NavLink } from 'react-router-dom'
import promotionIcon from '~/assets/images/AdminSidebar/Subtract.svg'
import warehouseIcon from '~/assets/images/AdminSidebar/bag-tick-2 (1).svg'
import clientIcon from '~/assets/images/AdminSidebar/Accepted Profile.svg'
import bookTableIcon from '~/assets/images/AdminSidebar/clipboard-tick.svg'
import fourBlocksIcon from '~/assets/images/AdminSidebar/element-3.svg'
import staffIcon from '~/assets/images/AdminSidebar/Icon.svg'
import statisticIcon from '~/assets/images/AdminSidebar/line - chart 24.svg'
import logOutIcon from '~/assets/images/AdminSidebar/Log Out.svg'
import dishIcon from '~/assets/images/AdminSidebar/Noodle.svg'
import changePassIcon from '~/assets/images/AdminSidebar/setting-2 (1).svg'
import saleInfoIcon from '~/assets/images/AdminSidebar/Money.svg'

const menu = [
	{
		href: '/admin/sales-info',
		label: 'Thông tin bán hàng',
		src: saleInfoIcon,
	},

	{
		href: '/admin/manage-statistic',
		label: 'Thống kê',
		src: statisticIcon,
	},
	{
		href: '/admin/manage-booking',
		label: 'Đặt bàn',
		src: bookTableIcon,
	},
	{
		href: '/admin/manage-dish',
		label: 'Món ăn',
		src: dishIcon,
	},
	{
		href: '/admin/manage-staff',
		label: 'Nhân viên',
		src: staffIcon,
	},
	{
		href: '/admin/manage-client',
		label: 'Khách hàng',
		src: clientIcon,
	},
	{
		href: '/admin/manage-promotion',
		label: 'Khuyến mãi',
		src: promotionIcon,
	},
	{
		href: '/admin/manage-warehouse',
		label: 'Nhập xuất kho',
		src: warehouseIcon,
	},
	{
		href: '/admin/change-password',
		label: 'Đổi mật khẩu',
		src: changePassIcon,
	},
	{
		href: '/admin/logout',
		label: 'Đăng xuất',
		src: logOutIcon,
	},
]

export const Admin_Sidebar = () => {
	return (
		<div className='pl-6 pt-8 mb-20 mr-9 w-[232px] h-[800px] bg-[#f8f8f8] flex flex-col gap-10'>
			<div className=' flex gap-5 '>
				<img src={fourBlocksIcon} alt='' />
				<p className='font-normal text-primary text-2xl'>Admin</p>
			</div>

			{menu.map((item) => {
				return (
					<NavLink
						key={item.href}
						to={item.href}
						className={
							'flex gap-4 text-lg text-second font-normal hover:text-primary'
						}>
						<img className='' src={item.src} alt='' />
						{item.label}
					</NavLink>
				)
			})}
		</div>
	)
}
