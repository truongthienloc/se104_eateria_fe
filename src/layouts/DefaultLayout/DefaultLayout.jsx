import { NavBar, NavBar_Login} from '../NavBar'
import { Footer } from '../Footer'
import { Outlet } from 'react-router-dom'
import { ScrollToTopButton } from '~/components/ScrollToTop'
import { useSelector} from 'react-redux'
import { useEffect} from 'react'

function DefaultLayout() {
	const user = useSelector((state) =>state.user)
	return (
		<div className='flex flex-col min-h-screen overflow-x-hidden box-border font-roboto text-second'>
			{user && user.id ? <NavBar_Login /> : <NavBar />}
			<Outlet />
			<Footer />
			<ScrollToTopButton />
		</div>
	)
}

export default DefaultLayout
