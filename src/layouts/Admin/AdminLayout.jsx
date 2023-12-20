import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Admin_Sidebar } from '~/components/Admin_Sidebar/Admin_Sidebar'

export const AdminLayout = () => {
	const user = useSelector((state) => state.user)
	console.log(user);
	if (!user.id) {
		console.log('hre');
		toast.error('Bạn cần đăng nhập quyền admin để truy cập chức năng này !!!', {
			toastId: 'needLoginAdmin',
		})
		return <Navigate to={'/admin/login'} replace />
	}
	return (
		<div className='flex flex-col bg-[#f8f8f8] text-second'>
			<div className='bg-primary text-white w-full mx-auto max-w-full flex flex-row pl-24 py-1 gap-14 justify-center'>
				<p>4Food's Administrator</p>
			</div>
			<div className='flex'>
				<Admin_Sidebar />
				<Outlet />
			</div>
		</div>
	)
}
