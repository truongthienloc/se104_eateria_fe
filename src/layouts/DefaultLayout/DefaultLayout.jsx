import { NavBar } from '../NavBar'
import { Footer } from '../Footer'

function DefaultLayout({ children }) {
	return (
		<div className='flex flex-col w-full h-screen overflow-auto box-border font-roboto text-second'>
			<NavBar />
			{children}
			<Footer />
		</div>
	)
}

export default DefaultLayout
