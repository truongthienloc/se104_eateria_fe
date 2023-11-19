import { FoodItem } from '~/components/FoodItems/FoodItem'

function Homepage() {
	return (
		<div className='flex-1 fle'>
			<div>
				<p>Khanh lo phan nay</p>
				<FoodItem />
			</div>
		</div>
	)
}

export default Homepage
