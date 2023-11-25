import { NavBar } from '../NavBar'
import { Footer } from '../Footer'
import { Outlet } from 'react-router-dom'

function DefaultLayout() {
	return (
		<div className='flex flex-col w-full h-screen overflow-auto box-border font-roboto text-second'>
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	)
}

export default DefaultLayout
