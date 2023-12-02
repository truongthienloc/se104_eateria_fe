import React, { useState } from 'react'
import FoodReview from '~/components/ProductDetail_Review/FoodReview'
import FoodItems from '~/components/Food_Items_ProductPage/FoodItems'
import { FaStar } from 'react-icons/fa'

export const ProductDetail = (props) => {
	const [rating, setRating] = useState(null)
	const [hover, setHover] = useState(null)
	var title = props.title || 'Bún Chả Hà Nội'
	return (
		<div className='flex-1 flex'>
			<div>
				<div className='w-screen ml-7 bg-no-repeat items-center text-center text-fourth bg-[url(src/assets/images/productPage/banner/image_items_bg.svg)]'>
					<p className=' pt-10 text-3xl'>Phở Bò</p>
					<div className='flex flex-row justify-center pb-10'>
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
										size={50}
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
				</div>
				<div className='grid grid-cols-2 gap-4'>
					<div class='... grid grid-cols-2 gap-4 m-12'>
						<div class='col-span-2 ...'>
							<img src='src/assets/images/productPage/food/image_itemsList_1.svg' />
						</div>
						<div class='...'>
							<img src='src/assets/images/productPage/food/image_itemsList_1.svg' />
						</div>
						<div class='...'>
							<img src='src/assets/images/productPage/food/image_itemsList_1.svg' />
						</div>
					</div>

					<div class='... flex flex-col mt-12'>
						<p className='text-second font-bold'>
							Tổng lượt bán: <span className='text-primary'>1000</span>
						</p>
						<br />

						<p className='max-w-xl font-normal'>
							Phở bò là một món ăn truyền thống của Việt Nam, được làm từ
							bánh phở, thịt bò, nước dùng và các loại gia vị khác. Nước
							dùng được ninh từ xương bò trong nhiều giờ, tạo nên hương vị
							thơm ngon, đậm đà. Thịt bò được thái mỏng, có thể là thịt chín
							hoặc thịt tái. Bánh phở được làm từ bột gạo, có thể là bánh
							phở tươi hoặc bánh phở khô. Ngoài ra, phở bò còn được ăn kèm
							với các loại rau thơm như hành lá, húng quế, giá đỗ,... Phở bò
							của nhà hàng chúng tôi được làm từ những nguyên liệu tươi ngon
							nhất, được tuyển chọn kỹ lưỡng. Nước dùng được ninh từ xương
							bò trong nhiều giờ, tạo nên hương vị thơm ngon, đậm đà. Thịt
							bò được thái mỏng, mềm mại, chín tái vừa phải. Bánh phở được
							làm từ bột gạo thượng hạng, dai ngon, thấm vị. Ngoài ra, phở
							bò của nhà hàng chúng tôi còn được ăn kèm với các loại rau
							thơm tươi ngon, tạo nên hương vị hấp dẫn khó quên.
						</p>
						<div className='ml-80'>
							<p className='my-6 text-second text-xl font-extrabold pt-3'>
								Giá 59.000 VND
							</p>
							<button className='font-normal text-2xl text-third bg-primary leading-5 w-[150px] h-[50px] '>
								Thêm
							</button>
						</div>
					</div>
				</div>
				<div>
					<div className='flex items-center justify-center my-8 text-second'>
						<p className='text-4xl'>Đánh giá của khách hàng</p>
					</div>
					<div className='flex flex-row ml-40'>
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
										size={36}
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
						<p className='text-2xl ml-2'>
							<span className='text-primary'>5/5</span> (1000 đánh giá)
						</p>
					</div>
				</div>
				<div div className='mt-14 flex flex-col gap-16 items-center'>
					<div className='flex flex-row gap-20 '>
						<FoodReview />
						<FoodReview />
					</div>
					<div className='flex flex-row gap-20 '>
						<FoodReview />
						<FoodReview />
					</div>
					<div className='flex flex-row gap-20 '>
						<FoodReview />
						<FoodReview />
					</div>
				</div>
				<div className='flex items-center justify-center my-8 text-second'>
					<p className='text-4xl'>Xem thêm món ăn</p>
				</div>
				<div div className='mt-14 flex flex-col gap-12 items-center'>
					<div className='flex flex-row gap-9 '>
						<FoodItems />
						<FoodItems />
					</div>
					<div className='flex flex-row gap-9'>
						<FoodItems />
						<FoodItems />
					</div>
					<div className='flex flex-row gap-9'>
						<FoodItems />
						<FoodItems />
					</div>
					<div className='flex flex-row gap-9'>
						<FoodItems />
						<FoodItems />
					</div>
					<div className='flex flex-row gap-9'>
						<FoodItems />
						<FoodItems />
					</div>
				</div>
				<div>
					<img
						className='w-screen'
						src='src\assets\images\productPage\banner\image_itemsList_ooffer_2.svg'
						alt='banner image'
					/>
				</div>
				<div div className='mt-14 mb-10 flex flex-col gap-12 items-center'>
					<div className='flex flex-row gap-9 '>
						<FoodItems title='Bun cha Ha Noi ' />
						<FoodItems />
					</div>
					<div className='flex flex-row gap-9'>
						<FoodItems />
						<FoodItems />
					</div>
					<div className='flex flex-row gap-9'>
						<FoodItems />
						<FoodItems />
					</div>
					<div className='flex flex-row gap-9'>
						<FoodItems />
						<FoodItems />
					</div>
					<div className='flex flex-row gap-9'>
						<FoodItems />
						<FoodItems />
					</div>
				</div>
			</div>
		</div>
	)
}
