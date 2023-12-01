function FoodItems({id, imageURL, title, price}) {
	return (
		<div className='flex w-[300px] h-[400px] bg-sub1 border border-sub2 rounded-2xl flex-col items-center justify-between'>
			<div className='h-[150px] overflow-hidden mt-5 rounded-2xl'>
				<img className="w-full h-full object-contain" src={imageURL} alt={title} />
			</div>
			<div className='flex flex-col items-start w-full gap-5 px-6'>
				<p className='text-primary font-normal text-xl uppercase'>{title}</p>
				<p className='text-second text-xl font-normal'>{price}</p>
			</div>
			<div className='flex justify-center items-center w-full pb-7'>
				<button 
                    className='font-normal text-2xl text-third bg-primary leading-5 w-[150px]'
                >
					Thêm
				</button>
			</div>
		</div>
	)
}

export default FoodItems
