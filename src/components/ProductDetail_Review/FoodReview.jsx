import React, { useState } from 'react'
import Rating from '@mui/material/Rating'

const commentsData = [
	{
		username: 'Nguyễn Thị Mai Anh',
		comment:
			'Món ăn này thật sự ngon miệng và hấp dẫn! Chắc chắn sẽ quay lại thưởng thức nhiều lần nữa.',
	},
	{
		username: 'Trần Văn Hải',
		comment:
			'Hương vị của món ăn này độc đáo và phong phú, làm tôi không thể quên. Thực sự là một trải nghiệm ẩm thực tuyệt vời!',
	},
	{
		username: 'Lê Thị Thu Hương',
		comment:
			'Khám phá hương vị mới là điều tuyệt vời nhất khi thưởng thức món ăn này. Rất ấn tượng!',
	},
	{
		username: 'Phạm Đình Quang',
		comment:
			'Chất lượng nguyên liệu và cách kết hợp gia vị tạo nên một bữa ăn tuyệt vời. Thực sự là nghệ thuật ẩm thực!',
	},
	{
		username: 'Vũ Thị Linh Chi',
		comment:
			'Mọi thành phần trong món ăn đều hoàn hảo hòa quyện, tạo nên một bản hòa âm vị giác tuyệt vời.',
	},
	{
		username: 'Hoàng Minh Tuấn',
		comment:
			'Không phải chỉ là một bữa ăn, mà còn là một trải nghiệm thú vị cho giác quan. Rất ấn tượng với sự sáng tạo!',
	},
	{
		username: 'Ngọc Anh Đỗ',
		comment:
			'Một sự kết hợp tuyệt vời giữa hương vị truyền thống và sự độc đáo. Nên thử ngay!',
	},
	{
		username: 'Lâm Quốc Việt',
		comment:
			'Chắc chắn món ăn này sẽ làm hài lòng cả những người khó tính nhất về ẩm thực. Đỉnh cao của sự ngon miệng!',
	},
	{
		username: 'Bùi Thị Ngọc Trâm',
		comment:
			'Đặc điểm độc đáo của món ăn khiến tôi cảm thấy như đang du hành qua vị giác. Quả thực là một trải nghiệm khó quên.',
	},
	{
		username: 'Đặng Minh Khánh',
		comment:
			'Mỗi miếng ngon đều là một hành trình đến với thế giới của hương vị. Món ăn này thật sự xuất sắc!',
	},
]

function FoodReview({ id }) {
	const [rating, setRating] = useState(null)
	const [hover, setHover] = useState(null)
	let random = Math.floor(Math.random() * 10)
	return (
		<div className='w-[390px] h-[200px] border-2 rounded-2xl space-x-4 shadow-xl'>
			<div className='ml-5 my-3'>
				<p className='text-second'>{commentsData[id].username}</p>
			</div>
			<Rating name='read-only' value={5} readOnly />
			<div className='ml-5 my-3'>
				<p className='text-second'>{commentsData[id].comment}</p>
			</div>
		</div>
	)
}

export default FoodReview
