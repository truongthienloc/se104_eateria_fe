import { useEffect, useState } from 'react'
import { api } from '~/services/axios'
import React from 'react'
import StaffDetail from '~/components/StaffDetail_ManageStaff/StaffDetail'
import useEditStaffModal from '~/hooks/useEditStaffModal'
import { toast } from 'react-toastify'
import { AddStaffModal } from '~/components/Modal/AddStaffModal'
import useStaffInfo from '~/hooks/useStaffInfo'
export const ManageStaffPage = () => {
	const [showModalAdd, setShowModalAdd] = useState(false)
	const [showModalEdit, setShowModalEdit] = useState(false)
	const [showModalRemove, setShowModalRemove] = useState(false)
	const [staffData, setStaffData] = useState([])
	const addStaffInfo = useStaffInfo()
	const editStaffModal = useEditStaffModal()

	const fetchStaff = async () => {
		try {
			const res = await api.get('/employee/')
			const staff = res.data.data
			setStaffData(staff)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		fetchStaff()
	}, [])
	const handleEditButtonClick = (staffCode) => {
		const staff = staffData.find((value) => value.staffCode === staffCode)
		if (!staff) return

		editStaffModal.setAll(
			staff.staffCode,
			staff.employeeName,
			staff.employeePossition,
			staff.startWorkingDay,
			staff.salary,
			staff.workShift,
			staff.phoneNumber
		)

		setShowModalEdit(true)
	}

	const handleAddButtonClick = () => {
		addStaffInfo.setAll()
		setShowModalAdd(true)
	}

	const handleAddStaffSubmit = async () => {
		if (!addStaffInfo.validate()) {
			toast.error('Tất cả các trường đều không được để trống')
			return 
		}

		try {
			console.log(JSON.stringify({
				employeeName : addStaffInfo.name,
				employeePosition : addStaffInfo.role,
				staffCode : addStaffInfo.id,
				startWorkingDay : addStaffInfo.startDate.toISOString(),
				salary : addStaffInfo.salary,
				workShift : addStaffInfo.shift,
				phoneNumber : addStaffInfo.phone,
			}));
			const res = await toast.promise(
				api.post('/employee/', {
					employeeName : addStaffInfo.name,
					employeePosition : addStaffInfo.role,
					staffCode : addStaffInfo.id,
					startWorkingDay : addStaffInfo.startDate.toISOString(),
					salary : addStaffInfo.salary,
					workShift : addStaffInfo.shift,
					phoneNumber : addStaffInfo.phone,
				}),
				{
					pending: 'Đang thêm nhân viên',
					success: 'Thêm nhân viên thành công',
					error: 'Thêm nhân viên thất bại',
				}
			)

			await fetchStaff()
			setShowModalAdd(false)
		} catch (error) {
			
		}
	}

	return (
		<div className='pt-9 w-[1230px] pl-10 h-full bg-[#f8f8f8]'>
			<div className='mb-8'>
				<div className='flex gap-10'>
					<p className='text-primary text-2xl font-normal'>
						Thông tin nhân viên
					</p>
					{/* <NotificationsNoneOutlinedIcon className=''/> */}
				</div>
				<div className='mt-9 flex gap-6 text-lg font-normal text-second'>
					<div className='flex flex-col gap-5'>
						<p>Tên nhân viên</p>
						<input
							type='text'
							className='  placeholder:opacity-90
						 placeholder:text-second w-[264px] h-[48px] border-2 py-[18px] pl-6 pr-[30px] rounded-lg outline-0'
							placeholder='Nhập tên nhân viên'
						/>
					</div>
					<div className='flex flex-col gap-5 '>
						<p>Mã nhân viên</p>
						<input
							type='text'
							placeholder='Nhập mã nhân viên'
							className=' placeholder:opacity-90
						 placeholder:text-second w-[264px] h-[48px] border-2 py-[18px] pl-6 pr-[30px] rounded-lg outline-0'
						/>
					</div>
					<div className='flex flex-col gap-5 '>
						<p>Chức vụ</p>
						<input
							type='text'
							placeholder='Nhập chức vụ'
							className=' placeholder:opacity-90
						 placeholder:text-second w-[264px] h-[48px] border-2 py-[18px] pl-6 pr-[30px] rounded-lg outline-0'
						/>
					</div>
					<div className='flex items-end'>
						<button
							className='px-4 py-2 h-min bg-primary text-white'
							onClick={() => toast.info('Chức năng này chưa được hỗ trợ')}>
							LỌC
						</button>
					</div>
				</div>
			</div>

			<div className='rounded-3xl border-third border-8 px-3 bg-third mb-16'>
				<div className='grid '>
					<table className='text-lg bg-third '>
						<thead className='text-primary '>
							<th className='text-left border-b border-gray-200'></th>
							<th className='py-4 pl-4 text-left border-b border-gray-200'>
								Mã nhân viên
							</th>
							<th className='py-4 px-4 text-left border-b border-gray-200'>
								<center>Họ tên</center>
							</th>
							<th className='py-4 px-4 text-left border-b border-gray-200'>
								<center>Chức vụ</center>
							</th>
							<th className='py-4 px-4 text-left border-b border-gray-200'>
								<center>Ngày vào làm</center>
							</th>
							<th className='py-4 px-4 text-left border-b border-gray-200'>
								<center>Lương</center>
							</th>
							<th className='py-4 px-4 text-left border-b border-gray-200'>
								<center>Ca làm việc</center>
							</th>
							<th className='py-4 px-4 text-left border-b border-gray-200'>
								<center>Số điện thoại</center>
							</th>
							<th className='text-left border-b border-gray-200'></th>
						</thead>
						<tbody>
							{staffData.map((staff) => (
								<StaffDetail
									key={staff.staffCode}
									id={staff.staffCode}
									name={staff.employeeName}
									position={staff.employeePosition}
									startDate={staff.startWorkingDay}
									salary={staff.salary}
									shift={staff.workShift}
									phoneNumber={staff.phoneNumber}
									onEditButtonClick={() =>
										handleEditButtonClick(staff.staffCode)
									}
								/>
							))}
						</tbody>
					</table>
				</div>
				<div className='mt-40 pl-18 text-xl font-normal flex gap-9 mb-10'>
					<button
						className=' h-[50px] py-2 px-8 rounded-2xl  bg-white border-primary border-[3px] text-primary hover:border-primary hover:text-white 
					hover:bg-primary focus:outline-none'
						onClick={handleAddButtonClick}>
						Thêm nhân viên
					</button>

					<button
						className=' h-[50px] px-9 py-2 rounded-2xl bg-white border-primary border-[3px] text-primary hover:border-primary hover:text-white 
					hover:bg-primary focus:outline-none'
						onClick={() => setShowModalRemove(true)}>
						Xóa
					</button>

					<AddStaffModal
						isOpen={showModalAdd}
						onClose={() => setShowModalAdd(false)}
						staffInfo={addStaffInfo}
						onSubmit={handleAddStaffSubmit}
					/>
					{showModalEdit ? (
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
												<p className='w-[160px] font-medium'>
													Mã nhân viên:
												</p>
												<input
													type='text'
													disabled
													className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
													value={editStaffModal.id}
													onChange={
														editStaffModal.handleChangeId
													}
												/>
											</div>
											<div className='flex gap-8 items-center text-lg '>
												<p className='w-[160px] font-medium'>
													Họ tên:
												</p>
												<input
													type='text'
													className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
													value={editStaffModal.name}
													onChange={
														editStaffModal.handleChangeName
													}
												/>
											</div>
											<div className='flex gap-8 items-center text-lg '>
												<p className='w-[160px] font-medium'>
													Chức vụ:
												</p>
												<input
													type='text'
													className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
													value={editStaffModal.position}
													onChange={
														editStaffModal.handleChangePosition
													}
												/>
											</div>
											<div className='flex gap-8 items-center text-lg '>
												<p className='w-[160px] font-medium'>
													Ngày vào làm:
												</p>
												<input
													type='text'
													className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
													value={editStaffModal.startDate}
													onChange={editStaffModal.startDate}
												/>
											</div>
											<div className='flex gap-8 items-center text-lg '>
												<p className='w-[160px] font-medium'>
													Lương:
												</p>
												<input
													type='text'
													className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
													value={editStaffModal.salary}
													onChange={
														editStaffModal.handleChangeSalary
													}
												/>
											</div>
											<div className='flex gap-8 items-center text-lg '>
												<p className='w-[160px] font-medium'>
													Ca làm việc:
												</p>
												<input
													type='text'
													className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
													value={editStaffModal.shift}
													onChange={
														editStaffModal.handleChangeShift
													}
												/>
											</div>
											<div className='flex gap-8 items-center text-lg '>
												<p className='w-[160px] font-medium'>
													Số điện thoại:
												</p>
												<input
													type='text'
													className='w-[300px] h-[40px] border-2 px-3 border-primary rounded-lg focus:outline-none'
													value={editStaffModal.phoneNumber}
													onChange={editStaffModal.phoneNumber}
												/>
											</div>
										</div>
										{/*footer*/}
										<div className='flex items-center justify-end p-6 border-t border-solid rounded-b mt-4'>
											<button
												className=' background-transparent font-bold uppercase px-6 py-2 text-sm  bg-white border-primary border-2 text-primary hover:border-primary hover:text-white 
													hover:bg-primary outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150'
												type='button'
												onClick={() => setShowModalEdit(false)}>
												Hủy
											</button>
											<button
												className='bg-white text-primary  border-primary border-2 font-bold uppercase rounded-lg text-sm px-4 py-2 outline-none hover:bg-primary hover:border-primary hover:text-white  focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
												type='button'
												onClick={() =>
													toast.info(
														'Chức năng này chưa được hỗ trợ'
													)
												}>
												Xác nhận
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
						</div>
					) : null}
					{showModalRemove ? (
						<div>
							<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
								<div className='relative '>
									{/*content*/}
									<div className='border-[3px] border-primary bg-[#fff8ee] rounded-xl relative flex flex-col w-full outline-none focus:outline-none'>
										<div className='justify-center flex flex-col px-10 pt-8'>
											<center>
												<p className='w-[260px] font-medium'>
													Bạn có chắc chắn muốn xóa món ăn này
													không ?
												</p>
											</center>
										</div>
										<div className='flex justify-center gap-8 p-6 rounded-b'>
											<button
												className=' background-transparent font-bold uppercase px-6 py-2 text-sm  bg-white border-primary border-2 text-primary hover:border-primary hover:text-white 
													hover:bg-primary outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150'
												type='button'
												onClick={() => setShowModalRemove(false)}>
												Hủy
											</button>
											<button
												className='bg-white text-primary  border-primary border-2 font-bold uppercase rounded-lg text-sm px-4 py-2 outline-none hover:bg-primary hover:border-primary hover:text-white  focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
												type='button'
												onClick={() =>
													toast.info(
														'Chức năng này chưa được hỗ trợ'
													)
												}>
												Xóa
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
						</div>
					) : null}
				</div>
			</div>
		</div>
	)
}
