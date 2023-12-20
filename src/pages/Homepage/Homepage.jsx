// import Component
import FoodItems from '~/components/Food_Items_HomePage/FoodItems'

// import { ChevronLeft, ChevronRight } from "react-feather"

// import svg
import popularDishes_picture1 from '~/assets/images/homePage/popularDishes/image_Dishes_1.svg'
import popularDishes_picture2 from '~/assets/images/homePage/popularDishes/image_Dishes_2.svg'
import popularDishes_picture3 from '~/assets/images/homePage/popularDishes/image_Dishes_3.svg'
import popularDishes_picture4 from '~/assets/images/homePage/popularDishes/image_Dishes_4.svg'
import popularDishes_picture5 from '~/assets/images/homePage/popularDishes/image_Dishes_5.svg'

import { useState, useEffect } from 'react'
import HomeBanner from '~/components/Carousel/HomeBanner'
import { api } from '~/services/axios'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import slugifyFn from '~/utils/slugifyFn'

function Homepage() {
	const [tag, setTag] = useState('mainMenu')
	const [menuList, setmenuList] = useState([])
	const [data, setdata] = useState([])
	const [foodItem, setfoodItem] = useState([])
	const [searchParams, setSearchParams] = useSearchParams()
	const selectMenu = searchParams.get('menu') || menuList[0] || ''
	const foods =
		data.filter((item) => {
			return slugifyFn(item.name) === slugifyFn(selectMenu)
		})?.[0]?.data || []
	const HandleOnClick = (name) => {
		setSearchParams({
			menu: slugifyFn(name),
		})
	}
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await api.get('/dish')
				const resData = res.data
				if (resData.statusCode === 200) {
					const menu = []
					resData.data.forEach((item) => {
						const menuName = item.menu.menuName
						if (menuName && !menu.includes(menuName)) {
							menu.push(menuName)
						}
					})
					const list = menu.reduce((prev, item) => {
						const obj = {
							name: item,
							data: [],
						}
						resData.data.forEach((food) => {
							if (food.menu.menuName === item) {
								obj.data.push(food)
							}
						})
						return [...prev, obj]
					}, [])
					setmenuList(menu)
					setdata(list)
				}
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [])

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

				<div className='flex flex-col items-center justify-center'>
					<div>
						<p className='mt-10 text-second text-4xl font-bold'>
							Thực đơn của chúng tôi
						</p>
						<p className='mt-3 text-second text-xl font-normal mb-12 text-center'>
							Thank you for choosing Our Restaurant
						</p>
					</div>
					<div className='flex flex-row '>
						{menuList.length > 0 &&
							menuList.map((menu, index) => {
								return (
									<div
										key={menu}
										className='flex items-center hover:opacity-70'>
										<button
											id='mainMenu'
											className={
												slugifyFn(selectMenu) === slugifyFn(menu)
													? 'font-medium text-2xl rounded-xl border-0 text-third bg-primary px-4 w-[242px] focus:outline-none  '
													: 'font-medium text-2xl rounded-xl border-0 text-primary bg-button px-4 w-[242px] focus:outline-none'
											}
											onClick={() => HandleOnClick(menu)}>
											{menu}
										</button>
										{index !== menuList.length - 1 && (
											<div className='border border-second h-[42px] mx-4'></div>
										)}
									</div>
								)
							})}
					</div>

					<div className='w-[1400px] mt-14'>
						<div className='flex flex-row justify-center gap-7 flex-wrap'>
							{foods.length > 0 &&
								foods.map((item) => {
									return <FoodItems key={item.id} item={item} />
								})}
						</div>
					</div>

					<div className='flex justify-center mb-16 mt-12'>
						<button className='font-normal text-2xl text-third bg-primary leading-6 justify-center p-3 w-[150px]'>
							Xem thêm
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Homepage
