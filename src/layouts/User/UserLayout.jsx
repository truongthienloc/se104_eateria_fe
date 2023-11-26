import React from 'react'
import { User_Sidebar } from '../../components/User_Sidebar'
import { Outlet } from 'react-router-dom'

export const UserLayout = () => {
	return (
		<div className='flex gap-10 bg-third mx-auto max-w-[1400px] mt-1 w-full'>
			<User_Sidebar />
			<div className='flex-1'>
				<Outlet />
			</div>
		</div>
	)
}
