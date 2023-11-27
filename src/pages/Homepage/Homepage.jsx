// import Component
import FoodItems from '~/components/Food_Items_HomePage/FoodItems'

// import { ChevronLeft, ChevronRight } from "react-feather"

// import svg
import popularDishes_picture1 from '~/assets/images/homePage/popularDishes/image_Dishes_1.svg'
import popularDishes_picture2 from '~/assets/images/homePage/popularDishes/image_Dishes_2.svg'
import popularDishes_picture3 from '~/assets/images/homePage/popularDishes/image_Dishes_3.svg'
import popularDishes_picture4 from '~/assets/images/homePage/popularDishes/image_Dishes_4.svg'
import popularDishes_picture5 from '~/assets/images/homePage/popularDishes/image_Dishes_5.svg'
import info_picture1 from '~/assets/images/homePage/info/image_about_1.svg'
import info_picture2 from '~/assets/images/homePage/info/image_ourStory_1.svg'
import info_picture3 from '~/assets/images/homePage/info/image_about_1 (1).svg'
import info_picture4 from '~/assets/images/homePage/info/image_ourStory_1 (1).svg'

import info_card3 from '~/assets/images/homePage/info/card1-1.svg'
import info_card2 from '~/assets/images/homePage/info/card1-2.svg'
import info_card1 from '~/assets/images/homePage/info/card1.svg'


import { useState } from 'react'
import HomeBanner from '~/components/Carousel/HomeBanner'
// const slides = ['slide_1', 'slide_2', 'slide_3', 'slide_4']
function Homepage() {
	const [tag, setTag] = useState('mainMenu')

	function HandleOnClick(e) {
		setTag(e.target.id)
	}
	return (
		<div className='flex-1 font-roboto font-bold bg-third select-none'>
			<div>
				
				<HomeBanner />

				<div className='mt-14 flex flex-col items-center'>
					<p className='text-4xl mb-10 text-second font-bold '>
						Món Ăn Phổ Biến
					</p>
					<div className='flex gap-x-5'>
						<img src={popularDishes_picture1} alt='' />
						<img src={popularDishes_picture2} alt='' />
						<img src={popularDishes_picture3} alt='' />
						<img src={popularDishes_picture4} alt='' />
						<img src={popularDishes_picture5} alt='' />
					</div>
				</div>

				<div className='flex flex-col items-center'>
					<div>
						<p className='mt-10 text-second text-4xl font-bold'>
							Thực đơn của chúng tôi
						</p>
						<p className='mt-3 text-second text-xl font-normal mb-12'>
							Thank you for choosing Our Restaurant
						</p>
					</div>
					<div className='flex flex-row '>
						<div className='flex items-center'>
							<button
								id='mainMenu'
								className={
									tag === 'mainMenu'
										? 'font-medium text-2xl rounded-xl border-0 text-third bg-primary px-4 w-[242px] focus:outline-none  '
										: 'font-medium text-2xl rounded-xl border-0 text-primary bg-button px-4 w-[242px] focus:outline-none'
								}
								onClick={HandleOnClick}>
								THỰC ĐƠN CHÍNH
							</button>
							<div className='border border-second h-[42px] '></div>
						</div>
						<div className='flex items-center' onClick={HandleOnClick}>
							<button
								id='dessert'
								className={
									tag === 'dessert'
										? 'font-medium text-2xl rounded-xl border-0 text-third bg-primary px-4 w-[242px] focus:outline-none '
										: 'font-medium text-2xl rounded-xl border-0 text-primary bg-button px-4 w-[242px] focus:outline-none'
								}>
								TRÁNG MIỆNG
							</button>
							<div className='border border-second h-[42px] '></div>
						</div>
						<div className='flex items-center' onClick={HandleOnClick}>
							<button
								id='drink'
								className={
									tag === 'drink'
										? 'font-medium text-2xl rounded-xl border-0 text-third bg-primary px-4 w-[242px] focus:outline-none '
										: 'font-medium text-2xl rounded-xl border-0 text-primary bg-button px-4 w-[242px] focus:outline-none'
								}>
								THỨC UỐNG
							</button>
						</div>
					</div>

					{tag === 'mainMenu' && (
						<div div className='mt-14 flex flex-col gap-12'>
							<div className='flex flex-row gap-9 '>
								<FoodItems title='Bun cha Ha Noi ' />
								<FoodItems />
								<FoodItems />
								<FoodItems />
							</div>
							<div className='flex flex-row gap-9'>
								<FoodItems />
								<FoodItems />
								<FoodItems />
								<FoodItems />
							</div>
							<div className='flex flex-row gap-9'>
								<FoodItems />
								<FoodItems />
								<FoodItems />
								<FoodItems />
							</div>
							<div className='flex flex-row gap-9'>
								<FoodItems />
								<FoodItems />
								<FoodItems />
								<FoodItems />
							</div>
						</div>
					)}

					{tag === 'dessert' && (
						<div className='mt-14 flex flex-col gap-12'>
							<div className='flex flex-row gap-9 '>
								<FoodItems title='Cam chanh' />
								<FoodItems />
								<FoodItems />
								<FoodItems />
							</div>
							<div className='flex flex-row gap-9'>
								<FoodItems />
								<FoodItems />
								<FoodItems />
								<FoodItems />
							</div>
						</div>
					)}

					{tag === 'drink' && (
						<div className='mt-14 flex flex-col gap-12'>
							<div className='flex flex-row gap-9 '>
								<FoodItems title='Pepsi vi chanh' />
								<FoodItems />
								<FoodItems />
								<FoodItems />
							</div>
							<div className='flex flex-row gap-9'>
								<FoodItems />
								<FoodItems />
								<FoodItems />
								<FoodItems />
							</div>
						</div>
					)}
					<div className='flex justify-center mb-16 mt-12'>
						<button className='font-normal text-2xl text-third bg-primary leading-6 justify-center p-3 w-[150px]'>
							Xem thêm
						</button>
					</div>
				</div>

				<div className='flex flex-col items-center'>
					<div className='w-[1174px] h-[384px] rounded-2xl border-4 border-primary flex flex-row py-11 pl-16 gap-7'>
						<img src={info_picture1} alt='' />
						<div className='flex flex-col text-lg font-normal text-second gap-5 pr-8 my-7 leading-6'>
							<p>
								Được xây dựng từ những sinh viên nhóm 4, Lớp SE104.O11.
								<br />
								4FOOD là cộng đồng tin cậy cho mọi người có thể tìm kiếm,
								đánh giá, bình luận các món ăn, thức uống tại UIT - từ
								website. Tất cả thành viên từ Web đến Data, Foody kết nối
								những thực khách đến với nới ăn uống lớn nhất UIT.
							</p>
							<p>
								Đến thời điểm hiện tại, 4FOOD với hàng tỷ ngàn địa điểm và
								hàng củ ngàn bình luận, hình ảnh tại UIT, ở hầu hết các
								tỉnh thành. 4FOOD là nơi ngon nhất để bạn có thể thưởng
								thức và lựa chọn địa điểm tốt nhất cho mình và bạn bè.
							</p>
						</div>
					</div>

					<div className='w-[1174px] h-[384px] my-16 rounded-2xl border-4 border-primary flex flex-row py-9 px-16 gap-7 '>
						<div className='justify-center flex-1 '>
							<p className='mb-5 text-4xl font-bold text-primary flex justify-center'>
								TÌM KIẾM DỄ DÀNG
							</p>
							<p className='text-lg font-normal leading-7 mt-14 text-second'>
								Công cụ tìm kiếm thông minh bằng cách gõ: tên địa điểm nơi
								bạn ở, hoặc địa chỉ, hoặc tên đường, hoặc tên món ăn, hoặc
								mục đích, hoặc tên khu vực. Hệ thống tìm kiếm sử dụng gợi
								ý & xem nhanh thông tin, giúp bạn đặt món ăn nhanh nhất và
								những cơ sở 4FOOD gần bạn nhất.
							</p>
						</div>
						<div className='flex-2 items-center flex'>
							<img src={info_picture2} alt='' />
						</div>
					</div>

					<div className='w-[1174px] h-[384px] my-16 rounded-2xl border-4 border-primary flex flex-row py-11 px-7 gap-12 '>
						<div className='flex-2 items-center flex'>
							<img src={info_picture3} alt='' />
						</div>
						<div className='justify-center flex-1 '>
							<p className='mb-5 text-4xl font-bold text-primary flex justify-center'>
								PHÂN LOẠI RÕ RÀNG
							</p>
							<p className='text-lg font-normal leading-7 mt-16 text-second'>
								4FOOD phân loại các địa điểm ra rất chi tiết: loại hình,
								món ăn, giá cả, loại ẩm thực, gần nơi bạn nhất... Điều này
								giúp cộng đồng lọc địa điểm theo mục đích của mình rất
								nhanh chóng.
							</p>
						</div>
					</div>

					<div className='w-[1174px] h-[384px] my-16 rounded-2xl border-4 border-primary flex flex-row py-9 px-16 gap-7'>
						<div className='justify-center flex-1 '>
							<p className='mb-5 text-4xl font-bold text-primary flex justify-center'>
								BÌNH LUẬN VÀ ĐÁNH GIÁ
							</p>
							<p className='text-lg font-normal leading-6 mt-12 text-second'>
								4FOOD cho phép thành viên đánh giá quán ăn với 5 tiêu chí:
								Món ăn, Vị trí, Không gian, Giá cả và Dịch vụ, điều này
								giúp cộng đồng có cái nhìn tổng quan về các tiêu chí của
								mỗi địa điểm. Do đặc thù của mỗi địa điểm khác nhau, ví
								dụ: cộng đồng quan tâm đến chất lượng món ăn, không gian
								và cơ sở vật chất ở cơ sở 4FOOD đó.
							</p>
						</div>
						<div className='flex-2 items-center flex'>
							<img src={info_picture4} alt='' />
						</div>
					</div>
				</div>

				<div className='flex flex-row gap-3 m-14 justify-center'>
					<img src={info_card1} alt='' />
					<img src={info_card2} alt='' />
					<img src={info_card3} alt='' />
				</div>
			</div>
		</div>
	)
}

export default Homepage
