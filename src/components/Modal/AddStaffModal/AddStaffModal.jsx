import { DatePicker } from '@mui/x-date-pickers'
import React from 'react'

export default function AddStaffModal({ isOpen, staffInfo, onClose, onSubmit }) {
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
								Thêm nhân viên
							</h3>
						</div>
						{/*body*/}
						<div className='justify-center flex gap-7 flex-col px-7 mt-4   '>
							<div className='flex gap-8 items-center text-lg '>
								<p className='w-[160px] font-medium'>Mã nhân viên:</p>
								<input
									type='text'
									className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
									value={staffInfo.id}
									onChange={staffInfo.handleChangeId}
								/>
							</div>
							<div className='flex gap-8 items-center text-lg '>
								<p className='w-[160px] font-medium'>Họ tên:</p>
								<input
									type='text'
									className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
									value={staffInfo.name}
									onChange={staffInfo.handleChangeName}
								/>
							</div>
							<div className='flex gap-8 items-center text-lg '>
								<p className='w-[160px] font-medium'>Chức vụ:</p>
								<input
									type='text'
									className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
									value={staffInfo.role}
									onChange={staffInfo.handleChangeRole}
								/>
							</div>
							<div className='flex gap-8 items-center text-lg '>
								<p className='w-[160px] font-medium'>Ngày vào làm:</p>
								{/* <input
									type='text'
									className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
								/> */}
								<DatePicker
									format='DD/MM/YYYY'
									value={staffInfo.startDate}
									onChange={staffInfo.handleChangeStartDate}
								/>
							</div>
							<div className='flex gap-8 items-center text-lg '>
								<p className='w-[160px] font-medium'>Lương:</p>
								<input
									type='text'
									className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
									value={staffInfo.salary}
									onChange={staffInfo.handleChangeSalary}
								/>
							</div>
							<div className='flex gap-8 items-center text-lg '>
								<p className='w-[160px] font-medium'>Ca làm việc:</p>
								<input
									type='text'
									className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
									value={staffInfo.shift}
									onChange={staffInfo.handleChangeShift}
								/>
							</div>
							<div className='flex gap-8 items-center text-lg '>
								<p className='w-[160px] font-medium'>Số điện thoại:</p>
								<input
									type='text'
									className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
									value={staffInfo.phone}
									onChange={staffInfo.handleChangePhoneNumber}
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
