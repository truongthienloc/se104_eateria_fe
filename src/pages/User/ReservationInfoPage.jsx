import React from 'react'

const handleCancelReservation = (reservation_id, user_id) => {
	// Hủy đặt bàn
}

export const ReservationInfoPage = () => {
	return (
		<div className='w-full h-full pl-10 pt-10'>
			<p className='font-bold text-2xl'>Thông tin đặt bàn</p>
			<div className='bg-primary w-[600px] h-1 my-3'></div>
			<div className='flex flex-row gap-24'>
				<div className='flex flex-col gap-10'>
					<div className='flex flex-col gap-2'>
						<p>Mã đặt bàn: </p>
						<div className='bg-third text-second w-[200px] h-[40px] border-primary border-[2px] rounded flex justify-center items-center'>
							<p id="reservation-id" >Mã đặt bàn</p>
						</div>
					</div>
					<div className='flex flex-col gap-2'>
						<p>Ngày: </p>
						<div className='bg-third text-second w-[200px] h-[40px] border-primary border-[2px] rounded flex justify-center items-center'>
							<p id="reservation-date" >Ngày đặt bàn</p>
						</div>
					</div>
					<div className='flex flex-col gap-2'>
						<p>Số lượng khách: </p>
						<div className='bg-third text-second w-[200px] h-[40px] border-primary border-[2px] rounded flex justify-center items-center'>
							<div>
								<p id="reservation-people" >Số người</p>
							</div>
							<p className='pl-1'>người.</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-10'>
					<div className='flex flex-col gap-2'>
						<p>Vị trí: </p>
						<div className='bg-third text-second w-[200px] h-[40px] border-primary border-[2px] rounded flex justify-center items-center'>
							<p id="table-number" >Mã bàn</p>
						</div>
					</div>
					<div className='flex flex-col gap-2'>
						<p>Giờ: </p>
						<div className='bg-third text-second w-[200px] h-[40px] border-primary border-[2px] rounded flex justify-center items-center'>
							<p id="reservation-time" >Giờ hẹn</p>
						</div>
					</div>
					<div className='flex flex-col gap-2'>
						<p>Trạng thái: </p>
						<div className='bg-third text-second w-[200px] h-[40px] border-primary border-[2px] rounded flex justify-center items-center'>
							<p id="reservation-status" >Trạng thái</p>
						</div>
					</div>
				</div>
			</div>
			<p className='py-10'>* Lưu ý : Bạn đi trễ quá 30 phút, nhà hàng sẽ tự động hủy đơn đặt bàn của bạn!</p>
			<div className='flex justify-center items-center rounded-md ml-40 bg-primary text-third w-[150px] h-[40px] cursor-pointer hover:opacity-80' onClick={handleCancelReservation()}>
				Hủy đặt bàn
			</div>
		</div>
	)
}
