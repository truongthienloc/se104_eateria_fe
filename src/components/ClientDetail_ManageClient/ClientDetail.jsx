function ClientDetail({ id, name, point, timeEat, phoneNumber }) {
	return (
		<tr>
			<td className='py-4 px-8 border-b border-gray-200 text-lg text-primary'>
				<center>{id}</center>
			</td>
			<td className='py-4 px-8 border-b border-gray-200 text-lg'>
				<center>{name}</center>
			</td>
			<td className='py-4 px-8 border-b border-gray-200'>
				<center>
					{point || <div className='w-10 h-[1px] bg-black m-auto' />}
				</center>
			</td>
			<td className='py-4 px-8 border-b border-gray-200'>
				<center>
					{timeEat || <div className='w-10 h-[1px] bg-black m-auto' />}
				</center>
			</td>
			<td className='py-4 px-8 border-b border-gray-200'>
				<center>
					{phoneNumber || <div className='w-10 h-[1px] bg-black m-auto' />}
				</center>
			</td>
		</tr>
	)
}
export default ClientDetail
