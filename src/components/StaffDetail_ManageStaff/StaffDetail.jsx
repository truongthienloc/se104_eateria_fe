import EditNoteIcon from '@mui/icons-material/EditNote'
function StaffDetail({id, name, position, startDate, salary, shift, phoneNumber, onEditButtonClick}) {
    return(
        <tr>
			<td className='py-4 px-8 border-b border-gray-200 text-lg text-primary'><center>{id}</center></td>
			<td className='py-4 px-8 border-b border-gray-200 text-lg text-primary'><center>{name}</center></td>
			<td className='py-4 px-8 border-b border-gray-200'><center>{position}</center></td>
			<td className='py-4 px-8 border-b border-gray-200'><center>{startDate}</center></td>
			<td className='py-4 px-8 border-b border-gray-200'><center>{salary}</center></td>
			<td className='py-4 px-8 border-b border-gray-200'><center>{shift}</center></td>
			<td className='py-4 px-8 border-b border-gray-200'>
                <div className='flex gap-6'>
                    {phoneNumber}
                    <EditNoteIcon className='hover:cursor-pointer' onClick={onEditButtonClick}/>
                </div>
            </td>
		</tr>
    )
}
export default StaffDetail