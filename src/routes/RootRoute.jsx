import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Homepage } from '~/pages/Homepage'
import { DefaultLayout } from '~/layouts/DefaultLayout'

function RootRoute() {
	return (
		<DefaultLayout>
			<Routes>
				<Route path='/' element={<Homepage />} />
			</Routes>
		</DefaultLayout>
	)
}

export default RootRoute
