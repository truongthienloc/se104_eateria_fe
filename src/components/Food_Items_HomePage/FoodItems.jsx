import { useDispatch } from 'react-redux'
import { increasement } from '~/features/cart/cartSlice'
import { toast } from 'react-toastify'
import { api } from '~/services/axios'
import { useNavigate } from 'react-router-dom'


function FoodItems({ item }) {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const onNavigate = () => {
		navigate(`/product-detail/${item.id}`)
	}
	const onAdd = (e) => {
		e.stopPropagation()
		dispatch(increasement(item))
		toast.success(`Thêm ${item.dishName.toUpperCase()} vào giỏ hàng`)
		const pushItemToCart = async () => {
			try {
				const post = await api.post('/bill/dish/add')
			} catch (error) {
				console.log(error)
			}
		}
	}
	const formattedMoney = (number) => {
		let res = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
		return `${res} VND`
	}
	return (
		<div
			onClick={onNavigate} 
			className='flex w-[300px] h-[400px] bg-sub1 border border-sub2 rounded-2xl flex-col items-center justify-between cursor-pointer hover:opacity-90'>
			<div className='h-[150px] overflow-hidden mt-5 rounded-2xl'>
				<img
					className='w-full h-full object-contain'
					src={item.images[0]?.imageLink}
					alt={item.dishName}
				/>
			</div>
			<div className='flex flex-col items-start w-full gap-5 px-6'>
				<p className='text-primary font-normal text-xl uppercase'>
					{item.dishName}
				</p>
				<p className='text-second text-xl font-normal'>
					{formattedMoney(item.dishPrice)}
				</p>
			</div>
			<div className='flex justify-center items-center w-full pb-7'>
				<button
					onClick={onAdd}
					className='font-normal text-2xl text-third bg-primary leading-5 w-[150px] hover:opacity-80'>
					Thêm
				</button>
			</div>
		</div>
	)
}

export default FoodItems
