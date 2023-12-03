import React from 'react'

export const Coupon = ({ code, detail, release, expired }) => {
	return (
		<div className='w-[600px] h-[170px] bg-fourth px-5 py-3 flex flex-col gap-4'>
			<p id='coupon-code' className='text-primary text-2xl uppercase'>
				{code}
			</p>
			<p id='coupon-detail' className='font-semibold'>
				{detail}
			</p>
			<div className='flex flex-row justify-between'>
				<p id='coupon-period'>
					Từ ngày {release} đến ngày {expired}
				</p>
				<div
					className='w-[130px] h-[44px] bg-primary text-third flex items-center justify-center
            text-base hover:opacity-80'
					role='button'>
					Áp mã
				</div>
			</div>
		</div>
	)
}
