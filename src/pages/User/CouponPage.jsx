import React from 'react'
import { Coupon } from '~/components/Coupon'

export const CouponPage = () => {
	return (
		<div className='w-full h-full pl-10 pt-10'>
			<p className='font-bold text-2xl'>Mã giảm giá - ưu đãi dành cho bạn</p>
			<div className='bg-primary w-[600px] h-1 my-3'></div>
			<div className='flex flex-col gap-5 h-[520px] scrollable-div'>
				<Coupon
					code={'h789ss'}
					detail={'Giảm 10% tổng hóa đơn cho hóa đơn trên 500K'}
					release={'20/11'}
					expired={'05/12'}
				/>
				<Coupon
					code={'h789ss'}
					detail={'Giảm 10% tổng hóa đơn cho hóa đơn trên 500K'}
					release={'20/11'}
					expired={'05/12'}
				/>
				<Coupon
					code={'h789ss'}
					detail={'Giảm 10% tổng hóa đơn cho hóa đơn trên 500K'}
					release={'20/11'}
					expired={'05/12'}
				/>
				<Coupon
					code={'h789ss'}
					detail={'Giảm 10% tổng hóa đơn cho hóa đơn trên 500K'}
					release={'20/11'}
					expired={'05/12'}
				/>
			</div>
		</div>
	)
}
