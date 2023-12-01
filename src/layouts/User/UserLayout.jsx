import { React, useEffect} from 'react'
import { User_Sidebar } from '../../components/User_Sidebar'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'
import { toast } from 'react-toastify'

export const UserLayout = () => {
	const user = useSelector((state) =>state.user);
	if (!user.id) {
		toast.error('Bạn cần đăng nhập để thực hiện chức năng này!!!',{toastId: 'needLoginID'})
		return (<Navigate to={'/login'} replace />)
	} 
	return (
		<div className='flex gap-10 bg-third mx-auto max-w-[1400px] mt-1 w-full'>
			<User_Sidebar />
			<div className='flex-1'>
				<Outlet />
			</div>
		</div>
	)
}
