import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Homepage } from '~/pages/Homepage'
import { LoginPage } from '~/pages/LoginPage'
import { DefaultLayout } from '~/layouts/DefaultLayout'
import { UserLayout } from '~/layouts/User/UserLayout'
import { ProfilePage } from '~/pages/User/ProfilePage'
import { ChangePasswordPage } from '~/pages/User/ChangePasswordPage'
import { CouponPage } from '~/pages/User/CouponPage'
import { ReceiptHistoryPage } from '~/pages/User/ReceiptHistoryPage'
import { ReservationInfoPage } from '~/pages/User/ReservationInfoPage'
import { AboutPage } from '~/pages/AboutPage'
import { ProductPage } from '~/pages/ProductPage'
import { ProductDetail } from '~/pages/ProductDetail'
import { SignupPage } from '~/pages/SignupPage'
import { ForgotPasswordPage } from '~/pages/ForgotPasswordPage'
import { AdminLayout } from '~/layouts/Admin/AdminLayout'
import { CartPage } from '~/pages/CartPage/CartPage'
import { ReservationPage } from '~/pages/ReservationPage/ReservationPage'
import { AdminLoginPage } from '~/pages/Admin/AdminLoginPage'
import { SalesInfoPage } from '~/pages/Admin/SalesInfoPage'
import { ManageStaffPage } from '~/pages/Admin/ManageStaffPage'
import { ManagePromotionPage } from '~/pages/Admin/ManagePromotionPage'
import { ManageDishPage } from '~/pages/Admin/ManageDishPage'
import { ManageClientPage } from '~/pages/Admin/ManageClientPage'
import { ManageBookingPage } from '~/pages/Admin/ManageBookingPage'
import { StatisticPage } from '~/pages/Admin/StatisticPage'
import { PayPage } from '~/pages/PayPage/PayPage'
import { BillDetailPage } from '~/pages/BillDetailPage'
import { Notification } from '~/pages/Admin/Notification'

function RootRoute() {
	return (
		<>
			<Routes>
				<Route path='/admin/login' element={<AdminLoginPage />} />
				<Route path='/admin' element={<AdminLayout />} >
						<Route path='sales-info' element={<SalesInfoPage />} />
						<Route path='manage-statistic' element={<StatisticPage />} />
						<Route path='manage-booking' element={<ManageBookingPage />} />
						<Route path='manage-dish' element={<ManageDishPage />} />
						<Route path='manage-staff' element={<ManageStaffPage />} />
						<Route path='manage-client' element={<ManageClientPage />} />
						<Route path='manage-promotion' element={<ManagePromotionPage />}/>
						<Route path='change-password' element={<ChangePasswordPage />} />
						<Route path='notification' element={<Notification />} />
						<Route index element={<Navigate to={'login'} replace />} />
				</Route>
				<Route path='/' element={<DefaultLayout />}>
					<Route path='/' element={<Homepage />} />
					<Route path='/home' element={<Homepage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/signup' element={<SignupPage />} />
					<Route path='/forgot-password' element={<ForgotPasswordPage />} />
					<Route path='/pay' element={<PayPage />} />
					<Route path='/cart' element={<CartPage />} />
					<Route path='/reservation' element={<ReservationPage />} />
					<Route path='/bill' element={<BillDetailPage />} />
					<Route path='/user' element={<UserLayout />}>
						<Route path='profile' element={<ProfilePage />} />
						<Route path='coupon' element={<CouponPage />} />
						<Route path='receipt-history' element={<ReceiptHistoryPage />} />
						<Route path='reservation' element={<ReservationInfoPage />} />
						<Route path='change-password' element={<ChangePasswordPage />} />
						<Route index element={<Navigate to={'profile'} replace />} />
					</Route>
					<Route path='/about' element={<AboutPage />} />
					<Route path='/product' element={<ProductPage />} />
					<Route path='/product-detail' element={<ProductDetail />} />
					<Route index element={<Navigate to={'/home'} replace />} />
				</Route>
			</Routes>
		</>
	)
}

export default RootRoute
