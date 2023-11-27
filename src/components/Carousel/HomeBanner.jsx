import React, { useRef, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'

//Import Banner
import slide_1 from '~/assets/images/homePage/slider/Group 1000002349.svg'
import slide_2 from '~/assets/images/homePage/slider/Frame 1 Home page.svg'
import slide_3 from '~/assets/images/homePage/slider/Frame 2 Home page.svg'
import slide_4 from '~/assets/images/homePage/slider/Frame 3 Home page.svg'

const HomeBanner = () => {
	return (
		<div className='flex'>
			<div className='max-w-[1200px] mx-auto relative group '>
				<Swiper
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
					navigation={{
						prevEl: '.prev',
						nextEl: '.next',
					}}
					modules={[Navigation, Autoplay]}
					className='mySwiper'>
					<SwiperSlide>
						<div className='px-10 select-none'>
							<img className='w-full' src={slide_1} alt='' srcset='' />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='px-10 select-none'>
							<img className='w-full' src={slide_2} alt='' srcset='' />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='px-10 select-none'>
							<img className='w-full' src={slide_3} alt='' srcset='' />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='px-10 select-none'>
							<img className='w-full' src={slide_4} alt='' srcset='' />
						</div>
					</SwiperSlide>
				</Swiper>
				<div
					className='z-10 prev bg-black/20 absolute top-[50%] translate-y-[-50%] h-[100px] rounded bottom-0 left-0 w-fit px-1 items-center justify-center hidden group-hover:flex cursor-pointer'>
					<ArrowBackIosIcon className='text-white translate-x-[4px]' fontSize='large'/>
				</div>
				<div
					className='z-10 next bg-black/20 absolute top-[50%] translate-y-[-50%] h-[100px] rounded bottom-0 right-0 w-fit px-1 items-center justify-center hidden group-hover:flex cursor-pointer'>
					<ArrowForwardIosIcon className='text-white' fontSize='large'/>
				</div>
			</div>
		</div>
	)
}

export default HomeBanner
