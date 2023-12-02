import React from 'react'
import Rating from '@mui/material/Rating'
import TextField from '@mui/material/TextField'
import { useState } from 'react'

export const ReviewForm = ({onClose}) => {
	const [rating, setRating] = useState(3)
	return (
		<div className='relative bg-white w-[560px] rounded-md flex flex-col py-10 px-10 gap-10 text-lg'>
			<div className='flex flex-col items-center'>
				<p className='uppercase font-bold text-2xl p-3'>Đánh giá món ăn</p>
				<div className='flex flex-row gap-1'>
					<p>Hãy chia sẻ với</p>
					<p className='uppercase font-bold'>4Food</p>
					<p>trải nghiệm của bạn về món ăn nhé!</p>
				</div>
			</div>

			<div className='flex flex-col'>
				<p>Mức độ hài lòng của bạn về món ăn: </p>

				<Rating
          className='w-fit'
					name='simple-controlled'
					value={rating}
					onChange={(event, newValue) => {
						setRating(newValue)
					}}
				/>
			</div>

			<TextField
				className='w-full'
				id='outlined-multiline-static'
				label='Viết đánh giá của bạn ở đây'
				multiline
				rows={5}
				defaultValue=''
			/>
			<div className='flex w-full'>
        <button 
          onClick={onClose}
          className='bg-third border-[1px] w-[160px] h-[60px] hover:opacity-60'>
          Quay lại
        </button>
				<button 
          className='bg-primary text-third w-[160px] h-[60px] ml-auto hover:opacity-60'>
					Gửi Feedback
				</button>
			</div>
		</div>
	)
}
