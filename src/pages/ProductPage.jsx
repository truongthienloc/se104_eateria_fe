import React, { useState } from 'react'
import FoodItems from '~/components/Food_Items_ProductPage/FoodItems'
import { FaSearch } from 'react-icons/fa';


export const ProductPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    // Handle the search logic here
    console.log('Searching for:', inputValue, 'in category:', price, 'sorted by:', selectedSortOption);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className='flex-1 flex'>
      <div>
        <div className='items-center'>
          <img className='w-screen' src="src\assets\images\productPage\banner\image_items_bg.svg" alt="banner image" />
        </div>
        <p className='text-center text-second text-4xl font-normal mt-8'>
          Hãy lựa chọn và thưởng thức món ngon bạn yêu thích !!
        </p>
        <div className='flex items-center justify-center mt-8 mb-6'>
          <input className='w-[360px] h-[80px] border rounded-2xl border-primary pl-4 pr-8 text-2xl font-normal'
            type="text"
            placeholder="Bạn muốn tìm món gì?"
            value={inputValue}
            onChange={handleChange}
          />
          <FaSearch className='-ml-8 cursor-pointer mr-12 text-xl' />
          <button className='w-[80px] h-[80px] bg-primary border-primary rounded-2xl text-2xl pl-4 font-normal' onClick={handleSearch}>Tìm</button>
        </div>

        <div className='flex items-center justify-center text-second mt-10'>
          <select className='w-[230px] h-[50px] border rounded-xl border-primary pl-3 mr-4'
            onChange={handlePrice}
            value={price}
          >
            <option value="" disabled hidden>Giá</option>
            <option value="price1">0 -&gt; 50.000 VND</option>
            <option value="price2">50.000 -&gt; 100.000 VND</option>
            <option value="price3">100.000 -&gt; 200.000 VND</option>
            <option value="price4">200.000 -&gt; 500.000 VND</option>
          </select>

          <select className='w-[230px] h-[50px] border rounded-xl border-primary pl-3 mr-4'
            onChange={handleCategory}
            value={category}
          >
            <option value="" disabled hidden>Phân loại</option> 
            <option value="category1">Thực đơn chính</option>
            <option value="category2">Tráng miệng</option>
            <option value="category3">Thức uống</option>
          </select>
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
          <img className='w-screen' src="src\assets\images\productPage\banner\image_itemsList_ooffer_2.svg" alt="banner image" />
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
