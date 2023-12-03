import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { increasement } from '~/features/cart/cartSlice'
import { toast } from 'react-toastify'

function FoodItems({ item }) {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const onNavigate = () => {
		navigate(`/product-detail/${item.id}`)
	}
	const onAdd = (e) => {
		e.stopPropagation()
		dispatch(increasement(item))
		toast.success(`Thêm ${item.dishName.toUpperCase()} vào giỏ hàng`)
	}
	const formattedMoney = (number) => {
		let res = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
		return `${res} VND`
	}

	return (
		<div
			onClick={onNavigate}
			className='flex flex-row w-[590px] h-[180px] border border-third rounded-2xl shadow-xl items-center justify-center gap-5 bg-fourth cursor-pointer hover:opacity-90'>
			<div className='flex flex-col w-[400px] gap-8'>
				<p className='text-primary font-normal text-2xl uppercase'>
					{item.dishName}
				</p>
				<div className='flex justify-between'>
					<p className='text-second text-xl font-normal pt-3'>
						Giá {formattedMoney(item.dishPrice)}
					</p>
					<button
						onClick={onAdd}
						className='flex items-center justify-center font-normal text-2xl text-third bg-primary w-[150px] h-[50px] hover:opacity-80'>
						Thêm
					</button>
				</div>
			</div>

			<div className='w-[150px] h-[150px] flex rounded-xl overflow-hidden'>
				<img
					className='object-fill'
					src={item.images[0]?.imageLink}
					alt={item.dishName}
				/>
			</div>
		</div>
	)
}

export default FoodItems
