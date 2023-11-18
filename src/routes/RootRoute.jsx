import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Homepage } from '~/pages/Homepage'
import { LoginPage } from '~/pages/LoginPage'
import { DefaultLayout } from '~/layouts/DefaultLayout'

function RootRoute() {
	return (
		<DefaultLayout>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/login' element={<LoginPage />} />
			</Routes>
		</DefaultLayout>
	)
}

export default RootRoute
