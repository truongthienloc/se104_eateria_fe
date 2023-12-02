import React, { useState, useEffect } from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { api } from '~/services/axios'

export const StatisticPage = () => {
	const [data, setData] = useState(0);

	const fetchSale = async () => {
		try {
			const res = await api.get('/bill/all')
			const total = res.data.data.reduce((total, value) => total + value.totalMoney, 0)
			setData(total)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchSale()
	}, [])

	return (
		<div className='pt-9 w-[1230px] pl-10 h-full bg-[#f8f8f8]'>
			<BarChart
				xAxis={[
					{
						id: 'barCategories',
						data: ['Doanh thu tổng'],
						scaleType: 'band',
					},
				]}
				series={[
					{
						data: [data],
					},
				]}
				width={500}
				height={500}
			/>
		</div>
	)
}
