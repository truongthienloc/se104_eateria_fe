function SaleDetail({billId, time, name, price, status1, status2}) {
	return (
		<tr>
			<td className='py-4 px-8 border-b border-gray-200 text-lg text-primary'>
				<input className='mr-6' type='checkbox' /> {billId}
			</td>
			<td className='py-4 px-8 border-b border-gray-200'>{time}</td>
			<td className='py-4 px-8 border-b border-gray-200'>{name}</td>
			<td className='py-4 px-8 border-b border-gray-200'>{price}</td>
			<td className='py-4 px-8 border-b border-gray-200'>
                <span className='bg-green-100 text-green-800 rounded-full text-base'>
					{status1}
				</span>
				<span className='bg-red-100 text-red-800 rounded-full text-base'>
					{status2}
				</span>
			</td>
		</tr>
	)
}
export default SaleDetail
