import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Homepage } from '~/pages/Homepage'
import { LoginPage } from '~/pages/LoginPage'
import { DefaultLayout } from '~/layouts/DefaultLayout'
import { UserLayout } from '~/layouts/User/UserLayout'
import { ProfilePage } from '~/pages/User/ProfilePage'
import { ChangePasswordPage } from '~/pages/User/ChangePasswordPage'
import { CouponPage } from '~/pages/User/CouponPage'
import { CallWaiterPage } from '~/pages/User/CallWaiterPage'
import { ReceiptHistoryPage } from '~/pages/User/ReceiptHistoryPage'
import { ReservationInfoPage } from '~/pages/User/ReservationInfoPage'
import { AboutPage } from '~/pages/AboutPage'
import { ProductPage } from '~/pages/ProductPage'
import { SignupPage } from '~/pages/SignupPage'
import { ForgotPasswordPage } from '~/pages/ForgotPasswordPage'
import { AdminLayout } from '~/layouts/Admin/AdminLayout'
import WebLayout from '~/layouts/WebLayout/WebLayout'
import { CartPage } from '~/pages/CartPage/CartPage'
import { ReservationPage } from '~/pages/ReservationPage/ReservationPage'

function RootRoute() {
	return (
			<DefaultLayout>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/signup' element={<SignupPage />} />
					<Route path='/forgot-password' element={<ForgotPasswordPage />} />
					<Route path='/home' element={<Homepage />} />
					<Route path='/user' element={<UserLayout />}>
						<Route path='profile' element={<ProfilePage />} />
						<Route path='coupon' element={<CouponPage />} />
						<Route path='call-waiter' element={<CallWaiterPage />} />
						<Route path='receipt-history' element={<ReceiptHistoryPage />} />
						<Route path='reservation' element={<ReservationInfoPage />} />
						<Route path='change-password' element={<ChangePasswordPage />} />
						<Route index element={<Navigate to={'profile'} replace />} />
					</Route>
					<Route path='/about' element={<AboutPage />} />
					<Route path='/product' element={<ProductPage />} />
					<Route path='/reservation' element={<ReservationPage />} />
					<Route path='/cart' element={<CartPage />} />
					<Route index element={<Navigate to={'/home'} replace />} />
				</Routes>
			</DefaultLayout>
	)
}

export default RootRoute
