import React from 'react'
import ClientDetail from '~/components/ClientDetail_ManageClient/ClientDetail'
import iconNotification from '~/assets/images/icon_notification.svg'
import { Link } from 'react-router-dom'

export const ManageClientPage = () => {
	const [showModalAdd, setShowModalAdd] = React.useState(false)
		const [showModalEdit, setShowModalEdit] = React.useState(false)
		const [showModalRemove, setShowModalRemove] = React.useState(false)
	return (
		<div className='pt-9 w-[1200px] pl-10 h-full bg-[#f8f8f8] text-second'>
		<div className='mb-8'>
			<div className='flex justify-between'>
				<p className='text-primary text-2xl font-normal'>
					Thông tin khách hàng
				</p>
				<Link to="/admin/notification">
						<img src={iconNotification} alt="" className='hover:cursor-pointer' />
				</Link>
			</div>
			<div className='mt-9 flex gap-6 text-lg font-normal text-second'>
				<div className='flex flex-col gap-5'>
					<p>Mã khách hàng</p>
					<input
						type='text'
						className='  placeholder:opacity-90 bg-third
					 placeholder:text-second w-[264px] h-[48px] border-2 py-[18px] pl-6 pr-[30px] rounded-lg outline-0'
						placeholder='Nhập mã khách hàng'
					/>
				</div>
				<div className='flex flex-col gap-5 '>
					<p>Tên khách hàng</p>
					<input
						type='text'
						placeholder='Nhập tên khách hàng'
						className=' placeholder:opacity-90 bg-third
					 placeholder:text-second w-[264px] h-[48px] border-2 py-[18px] pl-6 pr-[30px] rounded-lg outline-0'
					/>
				</div>
				<div className='flex flex-col gap-5 '>
					<p>Thông tin liên lạc</p>
					<input
						type='text'
						placeholder='Nhập số điện thoại'
						className=' placeholder:opacity-90 bg-third
					 placeholder:text-second w-[264px] h-[48px] border-2 py-[18px] pl-6 pr-[30px] rounded-lg outline-0'
					/>
				</div>
			</div>
		</div>

		<div className='rounded-3xl border-third border-8 px-3 bg-third mb-16'>
			<div className='grid '>
				<table className='text-lg bg-third '>
					<thead className='text-primary '>
						<th className='py-4 pl-4 text-left border-b border-gray-200'>
							Mã khách hàng
						</th>
						<th className='py-4 px-4 text-left border-b border-gray-200'>
							<center>Họ Tên</center>
						</th>
						<th className='py-4 px-4 text-left border-b border-gray-200'>
							<center>Điểm thành viên</center>						
						</th>
						<th className='py-4 px-4 text-left border-b border-gray-200'>
							<center>Số lần ăn tại quán </center>
						</th>
						<th className='py-4 px-4 text-left border-b border-gray-200'>
							<center>Số điện thoại</center>
						</th>
					</thead>
					<tbody>
						<ClientDetail id={'484999'} name={'Nguyễn Trọng Nhân'} point={'100'} timeEat={'06'} phoneNumber={'0925698459'} />
						<ClientDetail id={'485000'} name={'Lê Tuấn Anh'} point={'100'} timeEat={'02'} phoneNumber={'0955965498'} />
						<ClientDetail id={'485001'} name={'Trần Đình Khánh'} point={'100'} timeEat={'01'} phoneNumber={'0945236468'} />
						<ClientDetail id={'485002'} name={'Nguyễn Thế Sương'} point={'300'} timeEat={'06'} phoneNumber={'0958716359'} />
						<ClientDetail id={'485003'} name={'Nguyễn Thị Kim Chi'} point={'400'} timeEat={'09'} phoneNumber={'0958741355'} />
						<ClientDetail id={'485004'} name={'Huỳnh Nhật Phát'} point={'600'} timeEat={'11'} phoneNumber={'0958741356'} />
						<ClientDetail id={'485005'} name={'Nguyễn Thị Mai'} point={'200'} timeEat={'01'} phoneNumber={'0955793598'} />
						<ClientDetail id={'485006'} name={'Trương Thế Bảo'} point={'100'} timeEat={'01'} phoneNumber={'0958589423'} />
						<ClientDetail id={'485008'} name={'Lê Mỹ Diệu'} point={'100'} timeEat={'01'} phoneNumber={'0926986985'} />
					</tbody>
				</table>
			</div>
		</div>
	</div>
	)
}
