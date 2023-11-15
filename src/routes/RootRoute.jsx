import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Homepage } from '~/pages/Homepage'
import { DefaultLayout } from '~/layouts/DefaultLayout'
import { UserLayout } from '~/layouts/User/UserLayout'
import { ProfilePage } from '~/pages/User/ProfilePage'

function RootRoute() {
	return (
		<DefaultLayout>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/user' element={<UserLayout />}>
					<Route path='profile' element={<ProfilePage />} />
					<Route index element={<Navigate to={'profile'} replace/>} />
				</Route>
			</Routes>
		</DefaultLayout>
	)
}

export default RootRoute
