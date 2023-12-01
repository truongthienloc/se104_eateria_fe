import EditNoteIcon from '@mui/icons-material/EditNote'
function PromotionDetail({id, description, percent, startDay, endDay, onEditButtonClick}) {
	return(
    <tr>
		<td className='py-4 px-2 border-b border-gray-200 text-lg text-primary'>
			<input className='mr-3' type='checkbox' /> {id}
		</td>
		<td className='py-4 px-2 border-b border-gray-200'>{description}</td>
		<td className='py-4 px-2 border-b border-gray-200'><center>{percent}</center></td>
		<td className='py-4 px-2 border-b border-gray-200 '><center>{startDay}</center></td>
		<td className='py-4 px-2 border-b border-gray-200'>
                <center className='font-medium flex gap-6'>
                    <p className=' text-primary'>{endDay}</p>										
                    <EditNoteIcon onClick={onEditButtonClick} className='hover:cursor-pointer'/> 
                </center>
        </td>	
	</tr>
    )
}
export default PromotionDetail
