import EditNoteIcon from '@mui/icons-material/EditNote'
function StaffDetail({
	id,
	name,
	position,
	startDate,
	salary,
	shift,
	phoneNumber,
	onEditButtonClick,
}) {
	return (
		<tr className='text-second'>
			<td className='border-b border-gray-200'>
				<input className='mr-4 bg-third' type='checkbox' />
			</td>
			<td className='py-4 px-8 border-b border-gray-200 text-lg text-primary'>
				<center> {id}</center>
			</td>
			<td className='py-4 px-8 border-b border-gray-200 text-lg text-primary'>
				<center>{name}</center>
			</td>
			<td className='py-4 px-8 border-b border-gray-200'>
				<center>{position}</center>
			</td>
			<td className='py-4 px-8 border-b border-gray-200'>
				<center>{startDate}</center>
			</td>
			<td className='py-4 px-8 border-b border-gray-200'>
				<center>{salary}</center>
			</td>
			<td className='py-4 px-8 border-b border-gray-200'>
				<center>{shift}</center>
			</td>
			<td className='py-4 px-8 border-b border-gray-200'>
				<div className='flex gap-6'>{phoneNumber}</div>
			</td>
			<td className='border-b border-gray-200'>
				<EditNoteIcon
					onClick={onEditButtonClick}
					className='hover:cursor-pointer'
				/>
			</td>
		</tr>
	)
}
export default StaffDetail
