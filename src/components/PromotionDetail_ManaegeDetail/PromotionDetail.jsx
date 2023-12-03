import EditNoteIcon from '@mui/icons-material/EditNote'
function PromotionDetail({
	id,
	description,
	percent,
	startDay,
	endDay,
	onEditButtonClick,
}) {
	return (
		<tr className='text-second'>
			<td className='py-4 px-2 border-b border-gray-200'>
				<input className='bg-third' type='checkbox' />
			</td>
			<td className='py-4 px-2 border-b border-gray-200 text-lg text-primary text-center'>
				{id}
			</td>
			<td className='py-4 px-2 border-b border-gray-200'>{description}</td>
			<td className='py-4 px-2 border-b border-gray-200'>
				<center>{percent}</center>
			</td>
			<td className='py-4 px-2 border-b border-gray-200 '>
				<center>{startDay}</center>
			</td>
			<td className='py-4 px-2 border-b border-gray-200 text-center'>
				<p className=' text-primary'>{endDay}</p>
			</td>
			<td className='py-4 px-2 border-b border-gray-200'>
				<EditNoteIcon
					onClick={onEditButtonClick}
					className='hover:cursor-pointer'
				/>
			</td>
		</tr>
	)
}
export default PromotionDetail
