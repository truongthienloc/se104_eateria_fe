import React from 'react'

import info_picture1 from '~/assets/images/homePage/info/image_about_1.svg'
import info_picture2 from '~/assets/images/homePage/info/image_ourStory_1.svg'
import info_picture3 from '~/assets/images/homePage/info/image_about_1 (1).svg'
import info_picture4 from '~/assets/images/homePage/info/image_ourStory_1 (1).svg'

import info_card3 from '~/assets/images/homePage/info/card1-1.svg'
import info_card2 from '~/assets/images/homePage/info/card1-2.svg'
import info_card1 from '~/assets/images/homePage/info/card1.svg'

export const AboutPage = () => {
	return (
		<div className='mt-5 max-w-[1400px] mx-auto'>
			<div className='w-full h-[160px] mt-1 mb-5 bg-headerBanner bg-no-repeat bg-cover flex justify-center items-center'>
				<p className='uppercase text-third font-bold text-3xl'>Giới thiệu</p>
			</div>
			<div className='flex flex-col items-center'>
				<div className='w-[1174px] h-[384px] rounded-2xl border-4 border-primary flex flex-row py-11 pl-16 gap-7'>
					<img src={info_picture1} alt='' />
					<div className='flex flex-col text-lg font-normal text-second gap-5 pr-8 my-7 leading-6'>
						<p>
							Được xây dựng từ những sinh viên nhóm 4, Lớp SE104.O11.
							<br />
							4FOOD là cộng đồng tin cậy cho mọi người có thể tìm kiếm, đánh
							giá, bình luận các món ăn, thức uống tại UIT - từ website. Tất
							cả thành viên từ Web đến Data, Foody kết nối những thực khách
							đến với nới ăn uống lớn nhất UIT.
						</p>
						<p>
							Đến thời điểm hiện tại, 4FOOD với hàng tỷ ngàn địa điểm và
							hàng củ ngàn bình luận, hình ảnh tại UIT, ở hầu hết các tỉnh
							thành. 4FOOD là nơi ngon nhất để bạn có thể thưởng thức và lựa
							chọn địa điểm tốt nhất cho mình và bạn bè.
						</p>
					</div>
				</div>

				<div className='w-[1174px] h-[384px] my-16 rounded-2xl border-4 border-primary flex flex-row py-9 px-16 gap-7 '>
					<div className='justify-center flex-1 '>
						<p className='mb-5 text-4xl font-bold text-primary flex justify-center'>
							TÌM KIẾM DỄ DÀNG
						</p>
						<p className='text-lg font-normal leading-7 mt-14 text-second'>
							Công cụ tìm kiếm thông minh bằng cách gõ: tên địa điểm nơi bạn
							ở, hoặc địa chỉ, hoặc tên đường, hoặc tên món ăn, hoặc mục
							đích, hoặc tên khu vực. Hệ thống tìm kiếm sử dụng gợi ý & xem
							nhanh thông tin, giúp bạn đặt món ăn nhanh nhất và những cơ sở
							4FOOD gần bạn nhất.
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
							4FOOD phân loại các địa điểm ra rất chi tiết: loại hình, món
							ăn, giá cả, loại ẩm thực, gần nơi bạn nhất... Điều này giúp
							cộng đồng lọc địa điểm theo mục đích của mình rất nhanh chóng.
						</p>
					</div>
				</div>

				<div className='w-[1174px] h-[384px] my-16 rounded-2xl border-4 border-primary flex flex-row py-9 px-16 gap-7'>
					<div className='justify-center flex-1 '>
						<p className='mb-5 text-4xl font-bold text-primary flex justify-center'>
							BÌNH LUẬN VÀ ĐÁNH GIÁ
						</p>
						<p className='text-lg font-normal leading-6 mt-12 text-second'>
							4FOOD cho phép thành viên đánh giá quán ăn với 5 tiêu chí: Món
							ăn, Vị trí, Không gian, Giá cả và Dịch vụ, điều này giúp cộng
							đồng có cái nhìn tổng quan về các tiêu chí của mỗi địa điểm.
							Do đặc thù của mỗi địa điểm khác nhau, ví dụ: cộng đồng quan
							tâm đến chất lượng món ăn, không gian và cơ sở vật chất ở cơ
							sở 4FOOD đó.
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
	)
}
