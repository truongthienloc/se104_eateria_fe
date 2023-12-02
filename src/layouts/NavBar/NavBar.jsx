import WatchLaterIcon from '@mui/icons-material/WatchLater'
import CallIcon from '@mui/icons-material/Call'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import logo from '~/assets/images/logo.svg'
import deliveryImg from '~/assets/images/delivery.svg'
import { Link } from 'react-router-dom'

function NavBar() {
	return (
		<div className='w-full flex flex-col shadow-md bg-third'>
			<div className='bg-primary text-white'>
				<div className='w-primary mx-auto max-w-full flex flex-row pl-24 py-1 gap-14'>
					<div className='flex flex-row gap-2 items-center '>
						<WatchLaterIcon />
						<p>7.30 AM - 9.30 PM</p>
					</div>
					<div className='flex flex-row gap-2 items-center'>
						<CallIcon />
						<p>+84 344444404</p>
					</div>
				</div>
			</div>

			<div>
				<div className='w-primary mx-auto max-w-full flex flex-row h-24 gap-12 py-3 px-20 items-center'>
					<div className='flex flex-1'>
						<Link to={'/'} className='my-0 mx-auto'>
							<img src={logo} alt='logo' />
						</Link>
					</div>
					{/* Update các endpoint vào của các trang vào đây */}
					<NavItem href={'/'} text={'TRANG CHỦ'} />
					<NavItem href={'/product'} text={'SẢN PHẨM'} />
					<NavItem href={'/reservation'} text={'ĐẶT BÀN'} />
					<NavItem href={'/about'} text={'GIỚI THIỆU'} />

					{/* Update endpoint của trang giỏ hàng vào đây */}
					<Link
						className='bg-second text-white w-14 h-14 rounded-full flex flex-col items-center justify-center transition-opacity hover:opacity-40 hover:text-white'
						to={'/cart'}>
						<p className='font-bold'>0</p>
						<ShoppingCartIcon />
					</Link>

					<div className='flex flex-col text-second'>
						<p className='font-bold text-xl'>Giao Hàng</p>
						<p className='text-base'>+84 344444404</p>
					</div>

					<img src={deliveryImg} alt='delivery' />

					<Link
						className='py-1 px-3 bg-primary text-white font-bold rounded-lg transition-opacity hover:opacity-40 hover:text-white'
						to={'/login'}>
						Đăng nhập
					</Link>
				</div>
			</div>
		</div>
	)
}

export default NavBar

function NavItem({ href, text }) {
	return (
		<Link to={href} className='uppercase text-second font-bold'>
			{text}
		</Link>
	)
}
