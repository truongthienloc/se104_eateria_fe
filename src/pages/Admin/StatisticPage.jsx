import * as React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { axisClasses } from '@mui/x-charts'

const chartSetting = {
	yAxis: [
		{
			label: 'Doanh thu ( triệu đồng )',
		},
	],
	width: 500,
	height: 300,
	sx: {
		[`.${axisClasses.left} .${axisClasses.label}`]: {
			transform: 'translate(-20px, 0)',
		},
	},
}
const dataset = [
	{
		'Thực đơn chính': 59,
		'Tráng miệng': 57,
		'Thức uống': 86,
		month: 'Tháng 1',
	},
	{
		'Thực đơn chính': 50,
		'Tráng miệng': 52,
		'Thức uống': 78,
		month: 'Tháng 2',
	},
	{
		'Thực đơn chính': 47,
		'Tráng miệng': 53,
		'Thức uống': 106,
		month: 'Tháng 3',
	},
	{
		'Thực đơn chính': 54,
		'Tráng miệng': 56,
		'Thức uống': 92,
		month: 'Tháng 4',
	},
	{
		'Thực đơn chính': 57,
		'Tráng miệng': 69,
		'Thức uống': 92,
		month: 'Tháng 5',
	},
	{
		'Thực đơn chính': 160,
		'Tráng miệng': 130,
		'Thức uống': 193,
		month: 'Tháng 6',
	},
	{
		'Thực đơn chính': 59,
		'Tráng miệng': 60,
		'Thức uống': 105,
		month: 'Tháng 7',
	},
	{
		'Thực đơn chính': 65,
		'Tráng miệng': 60,
		'Thức uống': 106,
		month: 'Tháng 8',
	},
	{
		'Thực đơn chính': 51,
		'Tráng miệng': 51,
		'Thức uống': 95,
		month: 'Tháng 9',
	},
	{
		'Thực đơn chính': 60,
		'Tráng miệng': 65,
		'Thức uống': 97,
		month: 'Tháng 10',
	},
	{
		'Thực đơn chính': 67,
		'Tráng miệng': 64,
		'Thức uống': 76,
		month: 'Tháng 11',
	},
	{
		'Thực đơn chính': 61,
		'Tráng miệng': 70,
		'Thức uống': 103,
		month: 'Tháng 12',
	},
]

const valueFormatter = (value) => `${value}mm`

export function StatisticPage() {
	return (
		<BarChart
			dataset={dataset}
			xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
			series={[
				{ dataKey: 'Thực đơn chính', label: 'Thực đơn chính', valueFormatter },
				{ dataKey: 'Tráng miệng', label: 'Tráng miệng', valueFormatter },
				{ dataKey: 'Thức uống', label: 'Thức uống', valueFormatter },
			]}
			{...chartSetting}
			width={1000}
			height={500}
		/>
	)
}
