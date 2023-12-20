import React from 'react'
import { DatePicker, TimePicker } from '@mui/x-date-pickers'
import { OutlinedInput } from '@mui/material'

export default function ReservationForm({
	isOpen,
	onClose,
	date,
	onDateChange,
	time,
	onTimeChange,
	count,
	onCountChange,
	tableName,
	onSubmit,
}) {
	return (
		<div className='min-w-[425px] flex flex-col border-2 border-primary rounded p-8 gap-8'>
			<div className='flex flex-col gap-4'>
				<p className='font-bold'>Chọn thời gian đặt bàn:</p>
				<div className='flex flex-row items-center justify-between gap-2'>
					<label htmlFor='' className='flex-1'>
						Chọn ngày:{' '}
					</label>
					<DatePicker
						className='flex-[2]'
						format='DD/MM/YYYY'
						value={date}
						onChange={onDateChange}
					/>
				</div>
				<div className='flex flex-row items-center justify-between gap-2'>
					<label htmlFor='' className='flex-1'>
						Chọn giờ:{' '}
					</label>
					<TimePicker
						className='flex-[2]'
						format='HH:mm'
						value={time}
						onChange={onTimeChange}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-4'>
				<div className='flex flex-row gap-2 items-center'>
					<label htmlFor='' className='font-bold flex-1'>
						Số lượng khách:
					</label>
					<OutlinedInput
						className='flex-[2] [&_input]:text-center'
						placeholder='0'
						value={count}
						onChange={onCountChange}
					/>
				</div>
				<div className='flex flex-row gap-2 items-center'>
					<label htmlFor='' className='font-bold flex-1'>
						Mã bàn:
					</label>
					<OutlinedInput
						className='flex-[2] [&_input]:text-center'
						placeholder='15'
						value={tableName}
						disabled
					/>
				</div>
			</div>
			<button
				className='py-2 bg-primary text-white transition-opacity hover:opacity-80 border-none'
				onClick={onSubmit}>
				Kiểm tra thông tin đặt bàn
			</button>
		</div>
	)
}
