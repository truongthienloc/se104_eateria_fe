import React, { useState, useEffect } from 'react'
import FoodReview from '~/components/ProductDetail_Review/FoodReview'
import FoodItems from '~/components/Food_Items_ProductPage/FoodItems'
import Rating from '@mui/material/Rating'
import { api } from '~/services/axios'
import formattedMoney from '~/utils/formatMoney'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useDispatch } from 'react-redux'
import { increasement } from '~/features/cart/cartSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const ProductDetail = () => {
	const dispatch = useDispatch()
	const [rating, setRating] = useState(null)
	const [hover, setHover] = useState(null)
	const [dish, setDish] = useState()
	const [dishImage, setDishImage] = useState([])
	let { id } = useParams()

	const onAdd = () => {
		console.log('here')
		dispatch(increasement(dish))
		toast.success(`Thêm ${dish.dishName.toUpperCase()} vào giỏ hàng`)
		const pushItemToCart = async () => {
			try {
				const post = await api.post('/bill/dish/add')
			} catch (error) {
				console.log(error)
			}
		}
	}
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await api.get(`/dish/${id}`)
				let dishData = res.data
				setDish(dishData.data)
				setDishImage(dishData.data.images)
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [])
	console.log(dishImage)
	return (
		<div className='flex flex-col pb-10 pt-1 items-center'>
			<div className='w-full h-[160px] mt-1 mb-5 bg-headerBanner bg-no-repeat bg-cover flex flex-col justify-center items-center gap-5'>
				<p className='uppercase text-third font-bold text-3xl'>
					{dish?.dishName}
				</p>
				<Rating name='read-only' value={5} readOnly />
			</div>
			<div className='flex flex-row gap-10'>
				<div className='flex flex-col w-[600px]'>
					<div className='rounded-xl overflow-hidden'>
						<Swiper slidesPerView={1}>
							{dishImage.length > 0 &&
								dishImage.map((item) => {
									return (
										<SwiperSlide key={item.id}>
											<img
												className='w-full h-full'
												src={item?.imageLink}
												alt={dish?.dishName}
											/>
										</SwiperSlide>
									)
								})}
						</Swiper>
					</div>
				</div>

				<div className='flex flex-col mt-12'>
					<p className='text-second font-bold'>
						Tổng lượt bán:{' '}
						<span className='text-primary'>{dish?.totalOrder}</span>
					</p>
					<br />

					<p className='max-w-xl font-normal'>{dish?.dishDescription}</p>
					<div className='ml-80'>
						<p className='my-6 text-second text-xl font-extrabold pt-3'>
							{formattedMoney(dish?.dishPrice)}
						</p>
						<button
							onClick={onAdd}
							className='flex items-center justify-center font-normal text-2xl text-third bg-primary w-[150px] h-[50px] hover:opacity-75'>
							Thêm
						</button>
					</div>
				</div>
			</div>

			<div className='my-10'>
				<div className='flex items-center justify-center my-8 text-second'>
					<p className='text-4xl'>Đánh giá của khách hàng</p>
				</div>
				<div className='flex flex-row'>
					<Rating name='read-only' value={5} readOnly />
					<p className='text-2xl ml-2'>
						<span className='text-primary'>5/5</span> (1000 đánh giá)
					</p>
				</div>
			</div>
		</div>
	)
}
