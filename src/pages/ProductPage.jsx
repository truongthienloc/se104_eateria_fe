import { React, useState, useEffect } from 'react'
import FoodItems from '~/components/Food_Items_ProductPage/FoodItems'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { FaSearch } from 'react-icons/fa'
import { api } from '~/services/axios'
import { toast } from 'react-toastify'
import { useSearchParams } from 'react-router-dom'
import bannerImage from '~/assets/images/productPage/banner/image_itemsList_ooffer_2.svg'


export const ProductPage = () => {
	const [inputValue, setInputValue] = useState('')
	const [price, setPrice] = useState('')
	const [category, setCategory] = useState('')
	const [data, setdata] = useState([])
	const [firstList, setfirstList] = useState([])
	const [secondList, setsecondList] = useState([])
	const [searchParams, setSearchParams] = useSearchParams()
	const HandleOnClick = (name) => {
		setSearchParams({
			menu: slugifyFn(name),
		})
	}
	const handleChange = (e) => {
		setInputValue(e.target.value)
	}

	const handleSearch = () => {
		if (!inputValue?.trim()) return;
		setSearchParams({keyword: inputValue})
	}
	const onKeyDown = (e) => {
		if (e.key !== 'Enter') return;
		handleSearch()
	}
	const clearInput = () =>{
		setInputValue('')
	}
	const handlePrice = (e) => {
		setPrice(e.target.value)
	}
	const handleCategory = (e) => {
		setCategory(e.target.value)
	}
	useEffect(() => {
		if (inputValue === searchParams.get('keyword')) return;
		setInputValue(searchParams.get('keyword'));
	}, [searchParams.get('keyword')]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await api.get('/dish')
				setdata(res.data.data)
				let foods = res.data.data.slice(0, 10)
				let food2s = res.data.data.slice(10)
				setfirstList(foods)
				setsecondList(food2s)
			} catch (error) {
				console.log(error)
			}
		}
		const fetchSearchInput = async (search) =>{
			try {
				const res = await api.get('/dish/all/search',{params: { 'keyword' : search}})
				setfirstList(res.data.data)
				setsecondList([])
				console.log(res.data);
			} catch (error) {
				console.log(error);
			}
		}
		const search = searchParams.get('keyword');
		console.log('search',search);
		search?.trim() ? fetchSearchInput(search) : fetchData();
	}, [searchParams.get('keyword')])

	console.log('1stlist',inputValue);
	return (
		<div className='flex-1 flex-col justify-center'>
			<div>
				<div className='w-full h-[160px] mt-1 mb-5 bg-headerBanner bg-no-repeat bg-cover flex justify-center items-center'>
					<p className='uppercase text-third font-bold text-3xl'>Sản phẩm</p>
				</div>
				<p className='text-center text-second text-4xl font-normal mt-8'>
					Hãy lựa chọn và thưởng thức món ngon bạn yêu thích !!
				</p>
				<div className='w-full flex justify-center'>
					<div className='w-[560px] h-[80px] flex items-center justify-between my-8 bg-third border-4 rounded-2xl border-primary'>
						<input
							className=' bg-third px-6 text-2xl font-normal outline-none'
							type='text'
							placeholder='Bạn muốn tìm món gì?'
							value={inputValue}
							onChange={handleChange}
							onKeyDown={onKeyDown}
						/>
						<div className='flex flex-row justify-center'>
						{inputValue && <HighlightOffIcon onClick={clearInput} className='cursor-pointer'/>}
						<FaSearch 
						className='mx-8 cursor-pointer text-xl text-second'
						onClick={handleSearch} />
						</div>
					</div>
				</div>

				<div className='flex items-center justify-center text-second mt-10'>
					<select
						className='w-[230px] h-[50px] bg-third border-2 rounded-xl border-primary pl-3 mr-4 outline-none'
						onChange={handlePrice}
						value={price}>
						<option value='' disabled hidden>
							Giá
						</option>
						<option value='price1'>0 -&gt; 50.000 VND</option>
						<option value='price2'>50.000 -&gt; 100.000 VND</option>
						<option value='price3'>100.000 -&gt; 200.000 VND</option>
						<option value='price4'>200.000 -&gt; 500.000 VND</option>
					</select>

					<select
						className='w-[230px] h-[50px] bg-third border-2 rounded-xl border-primary pl-3 mr-4 outline-none'
						onChange={handleCategory}
						value={category}>
						<option value='' disabled hidden>
							Phân loại
						</option>
						<option value='category1'>Thực đơn chính</option>
						<option value='category2'>Tráng miệng</option>
						<option value='category3'>Thức uống</option>
					</select>
				</div>

				<div className='max-w-[1400px] mx-auto my-10 flex flex-wrap gap-12 items-center justify-center'>
					{firstList.length > 0 &&
						firstList.map((item) => {
							return <FoodItems key={item.id} item={item} />
						})}
				</div>

				<div className='max-w-[1400px] mx-auto'>
					<img
						className='w-full object-fill'
						src={bannerImage}
						alt='banner image'
					/>
				</div>
				<div className='max-w-[1400px] mx-auto my-10 flex flex-wrap gap-12 items-center justify-center'>
					{secondList.length > 0 &&
						secondList.map((item) => {
							return <FoodItems key={item.id} item={item} />
						})}
				</div>
			</div>
		</div>
	)
}
