import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

function FoodReview(props) {
	const [rating, setRating] = useState(null)
	const [hover, setHover] = useState(null)

	var title = props.title || 'Bún Chả Hà Nội'
	return (
		<div className='w-[590px] h-[200px] border-2 rounded-2xl space-x-4 shadow-xl'>
			<div className='ml-5 my-3'>
				<p className='text-second'>Nguyễn Văn A</p>
			</div>
			<div className='flex flex-row pb-10'>
				{[...Array(5)].map((star, index) => {
					const currentRating = index + 1
					return (
						<label>
							<input
								className='hidden'
								type='radio'
								name='rating'
								value={currentRating}
								onClick={() => setRating(currentRating)}
							/>
							<FaStar
								size={24}
								color={
									currentRating <= (hover || rating)
										? '#ffc107'
										: '#e4e5e9'
								}
								onMouseEnter={() => setHover(currentRating)}
								onMouseLeave={() => setHover(null)}
							/>
						</label>
					)
				})}
			</div>
			<div className='ml-5 my-3'>
				<p className='text-second'>
					Bún bò Huế - món ăn thơm ngon, hấp dẫn của xứ Huế.
				</p>
			</div>
		</div>
	)
}

export default FoodReview
