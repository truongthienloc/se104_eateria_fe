function AdminNotification({ title, name, email, date, onShowModalClick }) {
	return (
		<div className='bg-[#fff8ee] text-lg text-second w-[530px] p-7 border-[3px] rounded-3xl shadow-md'>
			<p className='text-primary text-xl font-medium mb-4 '>{title}</p>
			<div className='pl-2'>
				<div className='flex gap-6'>
					<p className='font-medium w-28'>Họ và tên: </p>
					<p>{name}</p>
				</div>
				<div className='flex gap-2'>
					<div>
						<div className='flex gap-6'>
							<p className='font-medium w-28 '>Email:</p>
							<p className='w-48'>{email}</p>
						</div>
						<div className='flex gap-6'>
							<p className='font-medium w-28'>Ngày:</p>
							<p>{date}</p>
						</div>
					</div>
					<button
						className='text-xl font-normal text-third p-2 bg-primary border-2 rounded-xl hover:cursor-pointer'
						onClick={onShowModalClick}>
						Xem chi tiết
					</button>
				</div>
			</div>
		</div>
	)
}
export default AdminNotification
