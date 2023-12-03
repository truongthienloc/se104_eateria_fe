import EditNoteIcon from '@mui/icons-material/EditNote'
import dayjs from 'dayjs'

function PromotionDetail({
	id,
	description,
	percent,
	startDay,
	endDay,
	onEditButtonClick,
}) {
	return (
		<tr>
			<td className='py-4 px-2 border-b border-gray-200'>
				<input className='' type='checkbox' />
			</td>
			<td className='py-4 px-2 border-b border-gray-200 text-lg text-primary text-center'>
				{id}
			</td>
			<td className='py-4 px-2 border-b border-gray-200'>{description}</td>
			<td className='py-4 px-2 border-b border-gray-200'>
				<center>{percent}</center>
			</td>
			<td className='py-4 px-2 border-b border-gray-200 '>
				<center>{dayjs(startDay).format('DD/MM/YYYY')}</center>
			</td>
			<td className='py-4 px-2 border-b border-gray-200 text-center'>
				<p className=''>{dayjs(endDay).format('DD/MM/YYYY')}</p>
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
