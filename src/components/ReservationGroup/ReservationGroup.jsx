import React from 'react'
import clsx from 'clsx'

export default function ReservationGroup({ title, data, onTableClick }) {
	return (
		<div className='w-96 flex flex-col gap-4 items-center border-primary border p-4 pb-8'>
			<p className='font-bold'>{title}</p>
			<div className='flex flex-row flex-wrap gap-5 justify-center'>
				{data.map((value) => (
					<ReservationItem
						key={value.id}
						name={value.tablePosition}
						status={value.tableStatus}
						onClick={() => onTableClick(value)}
					/>
				))}
			</div>
		</div>
	)
}

function ReservationItem({ name, status, onClick }) {
	return (
		<button
			disabled={status === 'Occupied'}
			className={clsx(
				'w-16 h-10 flex items-center justify-center bg-[#ECECEC] border-none rounded hover:opacity-80 transition-opacity',
				{
					'bg-unreserve text-white': status === 'Occupied',
					'bg-reserved text-white': status === 'Chose',
				}
			)}
			onClick={onClick}>
			{name}
		</button>
	)
}

export function ReservationExp() {
	return (
		<div className='flex flex-col gap-4'>
			<div className='flex flex-row gap-4 mt-2'>
				<div className='flex flex-row gap-1 items-center'>
					<div className='w-6 h-6 bg-reserved border border-second rounded'></div>
					<p>Đang được chọn</p>
				</div>
				<div className='flex flex-row gap-1 items-center'>
					<div className='w-6 h-6 bg-unreserve border border-second rounded'></div>
					<p>Đã được đặt</p>
				</div>
				<div className='flex flex-row gap-1 items-center'>
					<div className='w-6 h-6 bg-[#ECECEC] border border-second rounded'></div>
					<p>Trống</p>
				</div>
			</div>

			<div className='flex flex-row gap-2'>
				<p className='text-primary font-bold'>*Lưu ý:</p>
				<p className='font-bold'>Chỉ được chọn 1 bàn / 1 lần.</p>
			</div>
		</div>
	)
}
