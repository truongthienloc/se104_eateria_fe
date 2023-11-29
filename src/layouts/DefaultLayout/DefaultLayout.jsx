import { NavBar, NavBar_Login} from '../NavBar'
import { Footer } from '../Footer'
import { Outlet } from 'react-router-dom'
import { ScrollToTopButton } from '~/components/ScrollToTop'

function DefaultLayout() {
	return (
		<div className='flex flex-col min-h-screen overflow-x-hidden box-border font-roboto text-second'>
			<NavBar_Login />
			<Outlet />
			<Footer />
			<ScrollToTopButton />
		</div>
	)
}

export default DefaultLayout
