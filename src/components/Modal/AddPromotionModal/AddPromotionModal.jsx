import { DatePicker } from '@mui/x-date-pickers'
import React from 'react'

export default function AddPromotionModal({ isOpen, promotionInfo, onClose, onSubmit }) {
	if (!isOpen) return null
	return (
		<div>
			<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
				<div className='relative my-6'>
					{/*content*/}
					<div className='border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
						{/*header*/}
						<div className='flex  justify-center p-5 border-b border-solid'>
							<h3 className='text-2xl font-medium text-primary '>
								Thêm khuyến mãi
							</h3>
						</div>
						{/*body*/}
						<div className='justify-center flex gap-7 flex-col px-7 mt-4   '>
							<div className='flex gap-8 items-center text-lg '>
								<p className='w-[160px] font-medium'>Mã khuyến mãi:</p>
								<input
									type='text'
									className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
									value={promotionInfo.id}
									onChange={promotionInfo.handleChangeId}
								/>
							</div>
							<div className='flex gap-8 items-center text-lg '>
								<p className='w-[160px] font-medium'>Mô tả:</p>
								<textarea
									name=''
									id=''
									cols=''
									rows=''
									className='w-[300px] h-[100px]  border-2 px-3 border-primary rounded-lg focus:outline-none resize-none'
									value={promotionInfo.description}
									onChange={
										promotionInfo.handleChangeDescription
									}></textarea>
							</div>
							<div className='flex gap-8 items-center text-lg '>
								<p className='w-[160px] font-medium'>Mức giảm:</p>
								<input
									type='text'
									className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
									value={promotionInfo.percent}
									onChange={promotionInfo.handleChangePercent}
								/>
							</div>
							<div className='flex gap-8 items-center text-lg '>
								<p className='w-[160px] font-medium'>Ngày bắt đầu:</p>
								<DatePicker
									className='flex-1'
									format='DD/MM/YYYY'
									value={promotionInfo.startDay}
									onChange={promotionInfo.handleChangeStartDay}
								/>
							</div>
							<div className='flex gap-8 items-center text-lg '>
								<p className='w-[160px] font-medium'>Ngày kết thúc</p>
								<DatePicker
									className='flex-1'
									format='DD/MM/YYYY'
									value={promotionInfo.endDay}
									onChange={promotionInfo.handleChangeEndDay}
								/>
							</div>
						</div>
						{/*footer*/}
						<div className='flex items-center justify-end p-6 border-t border-solid rounded-b mt-4'>
							<button
								className=' background-transparent font-bold uppercase px-6 py-2 text-sm  bg-white border-primary border-2 text-primary hover:border-primary hover:text-white 
													hover:bg-primary outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150'
								type='button'
								onClick={onClose}>
								Hủy
							</button>
							<button
								className='bg-white text-primary  border-primary border-2 font-bold uppercase rounded-lg text-sm px-4 py-2 outline-none hover:bg-primary hover:border-primary hover:text-white  focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
								type='button'
								onClick={onSubmit}>
								Xác nhận
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
		</div>
	)
}
