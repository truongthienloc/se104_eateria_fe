import React from 'react'
import { Outlet } from 'react-router-dom'
import { Admin_Sidebar } from '~/components/Admin_Sidebar/Admin_Sidebar'

export const AdminLayout = () => {
	return (
		<div className='flex flex-col overflow-auto'>
			<div className='bg-primary text-white w-full mx-auto max-w-full flex flex-row pl-24 py-1 gap-14 justify-center'>
				<p>4Food's Administrator</p>
			</div>
			<div className='flex gap-[37px]'>
				<Admin_Sidebar />
				<Outlet />
			</div>
		</div>
	)
}
