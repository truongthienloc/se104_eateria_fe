import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import styles from '~/styles/auth.module.scss'

export default function AuthBar() {
	return (
		<div className='flex flex-col gap-6'>
			<Link
				to={'/login'}
				className={clsx(
					'w-64 bg-primary text-2xl text-white hover:opacity-80 hover:text-white',
					styles['auth-item'],
					styles['active']
				)}>
				Đăng nhập
			</Link>
			<Link
				to={'/signup'}
				className={clsx(
					'w-64 bg-[#D9D9D9] text-2xl text-black hover:opacity-80 hover:text-black',
					styles['auth-item']
				)}>
				Đăng ký
			</Link>
		</div>
	)
}
