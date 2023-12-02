import EditNoteIcon from '@mui/icons-material/EditNote'

function DishDetail({
	id,
	isCheck,
	kind,
	name,
	description,
	price,
	imgs,
	onEditButtonClick,
	onCheck,
}) {
	return (
		<tr>
			<td className='py-4 px-2 border-b border-gray-200 text-lg text-primary'>
				<input className='mr-4' type='checkbox' checked={isCheck} onChange={onCheck}/> {id}
			</td>
			<td className='py-4 px-2 border-b border-gray-200'>{kind}</td>
			<td className='py-4 px-2 border-b border-gray-200'>{name}</td>
			<td className='py-4 border-b border-gray-200 '>
				<div className='flex gap-1 flex-wrap '>
					{imgs &&
						imgs.map((img) => (
							<img src={img.imageLink} key={img.id} className='w-[130px]' />
						))}
				</div>
			</td>
			<td className='py-4 px-2 border-b border-gray-200 '>
				<p className=''>{description}</p>
			</td>
			<td className='py-4 px-2 border-b border-gray-200'>
				<div className='flex gap-6 font-medium'>
					<p className=' text-primary'>{price}</p>
					<EditNoteIcon
						onClick={onEditButtonClick}
						className='hover:cursor-pointer'
					/>
				</div>
			</td>
		</tr>
	)
}
export default DishDetail
