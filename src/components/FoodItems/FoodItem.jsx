import React from 'react'

export const FoodItem = () => {
  return (
    <div>
        FoodItem
        <div className='w-[300px] h-[400px] bg-slate-500 flex flex-col '>
            <div className='w-[250px] h-[150px] object-contain'>
                <img src="https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250230038502.jpg" alt="Food image"/>
            </div>
            <p className='text-primary'>Food Name</p>
            <p className='text-second'>Gía: 50000 VND</p>
        </div>
    </div>
  )
}
