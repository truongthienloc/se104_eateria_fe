import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { LogoutModal } from '../Modal/LogoutModal'
import { api } from '~/services/axios'
import promotionIcon from '~/assets/images/AdminSidebar/Subtract.svg'
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
		href: '/admin/change-password',
		label: 'Đổi mật khẩu',
		src: changePassIcon,
	},
]

export const Admin_Sidebar = () => {
	const navigate = useNavigate()
	const [showLogoutModal, setShowLogoutModal] = useState(false)

	const handleLogout = async () => {
		try {
			api.post('/auth/logout')
			setTimeout(() => {
				localStorage.removeItem('access-token')
			}, 500)
			setShowLogoutModal(false)
			navigate('/admin/login')
		} catch (error) {}
	}

	return (
		<div className='pl-8 pt-8 mb-20 w-[240px] h-full bg-[#f8f8f8] flex flex-col gap-10'>
			<div className=' flex gap-5 '>
				<img src={fourBlocksIcon} alt='' />
				<p className='font-normal text-primary text-2xl'>Admin</p>
			</div>

			{menu.map((item) => {
				return (
					<NavLink
						id='admin-sidebar'
						key={item.href}
						to={item.href}
						className={
							'px-[5px] py-[10px] flex gap-4 text-lg text-second font-normal hover:text-primary rounded-sm'
						}>
						<img className='' src={item.src} />
						{item.label}
					</NavLink>
				)
			})}

			<NavLink
				className={
					'px-[5px] py-[10px] flex gap-4 text-lg text-second font-normal hover:text-primary rounded-sm'
				}
				onClick={() => setShowLogoutModal(true)}>
				<img className='' src={logOutIcon} />
				Đăng xuất
			</NavLink>

			<LogoutModal
				isOpen={showLogoutModal}
				onClose={() => setShowLogoutModal(false)}
				onLogout={handleLogout}
			/>
		</div>
	)
}
