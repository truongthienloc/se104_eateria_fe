import dayjs from 'dayjs'

function BookingDetail({
	id,
	isCheck,
	tableName,
	status,
	time,
	numOfClient,
	clientName,
	email,
	onCheck,
}) {
	return (
		<tr>
			<td className='py-4 px-4  border-b border-gray-200 text-lg text-primary'>
				<input
					className='mr-6'
					type='checkbox'
					checked={isCheck}
					onChange={onCheck}
				/>{' '}
				{id}
			</td>
			<td className='py-4 px-4 text-center border-b border-gray-200'>
				{tableName}
			</td>
			<td className='py-4 px-4 text-center border-b border-gray-200'>
				{status === 'Available' ? (
					<span className='bg-green-100 text-green-800 py-1 px-2 rounded-full text-base'>
						Còn trống
					</span>
				) : (
					<span className='bg-red-100 text-red-800 py-1 px-2 rounded-full text-base'>
						Đã được đặt
					</span>
				)}
			</td>
			<td className='py-4 px-4 text-center border-b border-gray-200'>
				{time ? (
					<pre className='font-roboto'>{`${dayjs(time).format(
						'DD/MM/YYYY'
					)}\n${dayjs(time).format('HH:mm')}`}</pre>
				) : (
					<div className='w-10 h-[1px] bg-black m-auto'></div>
				)}
			</td>
			<td className='py-4 px-4 text-center border-b border-gray-200'>
				{numOfClient || <div className='w-10 h-[1px] bg-black m-auto'></div>}
			</td>
			<td className='py-4 px-4 text-center border-b border-gray-200'>
				{clientName || <div className='w-10 h-[1px] bg-black m-auto'></div>}
			</td>
			<td className='py-4 px-4 text-center border-b border-gray-200'>
				{email || <div className='w-10 h-[1px] bg-black m-auto'></div>}
			</td>
		</tr>
	)
}
export default BookingDetail
