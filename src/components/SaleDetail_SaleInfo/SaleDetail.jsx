import EditNoteIcon from '@mui/icons-material/EditNote'

function SaleDetail({ billId, time, name, price, status, onStatusClick }) {
	return (
		<tr>
			<td className='text-left border-b border-gray-200'>
				<input className='mr-6' type='checkbox' />
			</td>
			<td className='py-4 border-b border-gray-200 text-lg text-primary text-center'>
				{billId}
			</td>
			<td className='py-4 border-b border-gray-200 text-center'>{time}</td>
			<td className='py-4 border-b border-gray-200 text-center'>{name}</td>
			<td className='py-4 border-b border-gray-200 text-right'><center>{price}</center></td>
			<td className='py-4 border-b border-gray-200 text-center'>
				{status === '0' ? (
					<span
						className='bg-red-100 px-1 py-2 text-red-800 rounded-full text-base cursor-pointer hover:underline'
						onClick={onStatusClick}>
						Chưa thanh toán
					</span>
				) : (
					<span className='bg-green-100 px-1 py-2 text-green-800 rounded-full text-base'>
						Đã thanh toán
					</span>
				)}
			</td>
		</tr>
	)
}
export default SaleDetail
