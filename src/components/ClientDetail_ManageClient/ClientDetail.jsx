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
				<center>{point}</center>
			</td>
			<td className='py-4 px-8 border-b border-gray-200'>
				<center>{timeEat}</center>
			</td>
			<td className='py-4 px-8 border-b border-gray-200'>
				<center>{phoneNumber}</center>
			</td>
		</tr>
	)
}
export default ClientDetail
