import React, { useState } from 'react'
import Rating from '@mui/material/Rating'

function FoodReview(props) {
	const [rating, setRating] = useState(null)
	const [hover, setHover] = useState(null)

	var title = props.title || 'Bún Chả Hà Nội'
	return (
		<div className='w-[590px] h-[200px] border-2 rounded-2xl space-x-4 shadow-xl'>
			<div className='ml-5 my-3'>
				<p className='text-second'>Nguyễn Văn A</p>
			</div>
			<Rating name='read-only' value={5} readOnly />
			<div className='ml-5 my-3'>
				<p className='text-second'>
					Bún bò Huế - món ăn thơm ngon, hấp dẫn của xứ Huế.
				</p>
			</div>
		</div>
	)
}

export default FoodReview
