import React from 'react'
import facebookIcon from '~/assets/images/facebook.svg'
import zaloIcon from '~/assets/images/zalo.svg'
import instagramIcon from '~/assets/images/instagram.svg'
import gmailIcon from '~/assets/images/gmail.svg'
import momoIcon from '~/assets/images/momo.svg'
import viettelpayIcon from '~/assets/images/viettelpay.svg'
import visaIcon from '~/assets/images/visa.svg'

export default function Footer() {
	return (
		<div className='flex flex-col font-roboto text-white tracking-wider'>
			<div className='flex flex-row py-4 px-16 gap-14 bg-primary justify-evenly'>
				<div className='flex flex-col mt-4'>
					<p className='text-lg font-bold'>CHĂM SÓC KHÁCH HÀNG</p>
					<div className='my-3 ml-6'>
						<p>Điện thoại liên hệ: +84 344444404</p>
						<p>Email: xxx@4food.com</p>
						<p>Giờ làm việc: 7.30 AM - 9.30 PM</p>
					</div>
					<p className='text-lg font-bold'>LIÊN HỆ VỚI CHÚNG TÔI</p>
					<div className='flex flex-row gap-5 mt-3'>
						<img src={facebookIcon} alt='facebook icon' />
						<img src={zaloIcon} alt='zalo icon' />
						<img src={instagramIcon} alt='instagram icon' />
						<img src={gmailIcon} alt='gmail icon' />
					</div>
				</div>

				<div className='flex flex-col mt-4'>
					<p className='text-lg font-bold'>CHẤP NHẬN THANH TOÁN</p>
					<div className='flex flex-row gap-8 mt-5'>
						<img src={momoIcon} alt='momo icon' />
						<img src={viettelpayIcon} alt='viettelpay icon' />
						<img src={visaIcon} alt='visa icon' />
					</div>
				</div>

				<div className='w-[3px] h-full bg-white'></div>

				<div className='flex flex-col mt-4'>
					<p className='text-lg font-bold'>
						4Food - Hệ thống website quản lý quán ăn
					</p>
					<div className='grid grid-cols-2 mt-2 gap-x-5 ml-9'>
						<p>Điều khoản chung</p>
						<p>Hướng dẫn đặt bàn</p>
						<p>Điều khoản giao dịch</p>
						<p>Tuyển dụng</p>
						<p>Chính sách thanh toán</p>
						<p>Liên hệ</p>
						<p>Chính sách bảo mật</p>
					</div>
					<p className='ml-9'>Thông tin thêm</p>
				</div>
			</div>

			<div className='flex justify-center items-center p-3 font-normal bg-second'>
				<p>Copyright © 2023 | Bản quyền thuộc về 4Food</p>
			</div>
		</div>
	)
}
