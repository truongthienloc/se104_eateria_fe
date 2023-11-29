import React from 'react'
import { ReservationGroup, ReservationExp } from '~/components/ReservationGroup'
import { ReservationForm } from '~/components/ReservationForm'

const tableData = {
	floor1: [
		{
			name: '1',
			status: 1
		},
		{
			name: '2',
			status: 2
		},
		{
			name: '3',
			status: 0
		},
		{
			name: '4',
			status: 0
		},
		{
			name: '5',
			status: 0
		},
		{
			name: '6',
			status: 0
		},
		{
			name: '7',
			status: 0
		},
		{
			name: '8',
			status: 0
		},
		{
			name: '9',
			status: 0
		},
		{
			name: '10',
			status: 0
		},
		{
			name: '11',
			status: 0
		},
		{
			name: '12',
			status: 0
		},
	],
	floor2: [
		{
			name: '13',
			status: 0
		},
		{
			name: '14',
			status: 0
		},
		{
			name: '15',
			status: 0
		},
		{
			name: '16',
			status: 0
		},
		{
			name: '17',
			status: 0
		},
		{
			name: '18',
			status: 0
		},
		{
			name: '19',
			status: 0
		},
		{
			name: '20',
			status: 1
		},
		{
			name: '21',
			status: 1
		},
		{
			name: '22',
			status: 2
		},
		{
			name: '23',
			status: 0
		},
		{
			name: '24',
			status: 0
		},
		{
			name: '25',
			status: 0
		},
		{
			name: '26',
			status: 0
		},
		{
			name: '27',
			status: 0
		},
		{
			name: '28',
			status: 0
		},
	]
}

export const ReservationPage = () => {
	return (
		<div className="flex flex-row p-8">
			<div className="flex flex-col w-[50%] gap-4 items-center">
				<ReservationGroup title={'Tầng 1'} data={tableData.floor1}/>
				<ReservationGroup title={'Tầng 2'} data={tableData.floor2}/>
				<ReservationExp />
			</div>
			<div className="flex flex-col pt-16">
				<ReservationForm />
			</div>
		</div>
	)
}
