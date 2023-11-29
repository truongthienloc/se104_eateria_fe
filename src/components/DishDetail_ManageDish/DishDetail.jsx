import EditNoteIcon from '@mui/icons-material/EditNote'
function DishDetail({kind, name, description, price, img1, img2, img3, onEditButtonClick}) {
    return (
            <tr>
                <td className='py-4 px-2 border-b border-gray-200 text-lg text-primary'>
                    <input className='mr-4' type='checkbox' /> 1
                </td>
                <td className='py-4 px-2 border-b border-gray-200'>
                    {kind}
                </td>
                <td className='py-4 px-2 border-b border-gray-200'>
                    {name}
                </td>
                <td className='py-4 border-b border-gray-200 '>
                    <div className='flex justify-around '>
                        <img src={img1} alt="" className='w-24'/>
                        <img src={img2} alt="" className='w-24'/>
                        <img src={img3} alt="" className='w-24'/>
                    </div>
                </td>	
                <td className='py-4 px-2 border-b border-gray-200 '>
                    <p className='' >
                        {description}
                    </p>
                </td>
                <td className='py-4 px-2 border-b border-gray-200'>
                    <div className='flex gap-6 font-medium'>
                        <p className=' text-primary'>{price}</p>										
                        <EditNoteIcon onClick={onEditButtonClick} className='hover:cursor-pointer'/> 
                    </div>
                </td>	
            </tr>
    )
}
export default DishDetail