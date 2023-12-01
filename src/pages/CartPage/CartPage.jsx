import { React, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import DeleteIcon from '@mui/icons-material/Delete'
import { useNavigate } from 'react-router-dom'
import { OrderSuccess } from '~/components/Modal/OrderSuccess'

export const CartPage = () => {
	let Total = 0
	const navigate = useNavigate();
	const [openModal, setopenModal] = useState(false)
	const [openMessage, setopenMessage] = useState(false);
	const handleRemoveCartItem = (productID) => {
		// Xóa sản phẩm khỏi giỏ hàng
	}
	const handleOrderBtn = () => {
		setopenModal(true)
	}
	const handleCloseModal = () => {
		setopenModal(false)
	}
	const handleCloseMessage = () => {
		setopenMessage(false)
		navigate('/home')
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	const StyledTableCell = styled(TableCell)(({ theme }) => ({
		[`&.${tableCellClasses.head}`]: {
			color: theme.palette.common.white,
		},
		[`&.${tableCellClasses.body}`]: {
			fontSize: 14,
		},
	}))

	const StyledTableRow = styled(TableRow)(({ theme }) => ({
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
		// hide last border
		'&:last-child td, &:last-child th': {
			border: 0,
		},
	}))

	function createData(dishID, imgLink, dishName, price, quantity) {
		let total = parseInt(price) * quantity + '.000 VND'
		Total += parseInt(price) * quantity
		let imageLink =
			'https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250230038502.jpg'
		return { dishID, imageLink, dishName, price, quantity, total }
	}

	const rows = [
		createData(1, 'url', 'Phở bò đặc biệt', '65.000 VND', 3),
		createData(2, 'url', 'Phở bò đặc biệt', '65.000 VND', 3),
		createData(3, 'url', 'Phở bò đặc biệt', '65.000 VND', 3),
		createData(4, 'url', 'Phở bò đặc biệt', '65.000 VND', 3),
		createData(5, 'url', 'Phở bò đặc biệt', '65.000 VND', 3),
	]
	return (
		<div className='flex flex-col pb-10 pt-1 items-center'>
			<div className='w-full h-[160px] mt-1 mb-5 bg-headerBanner bg-no-repeat bg-cover flex justify-center items-center'>
				<p className='uppercase text-third font-bold text-3xl'>Giỏ hàng</p>
				{/* <img className="w-full h-full object-contain" src={banner}/> */}
			</div>

			<div>
				<TableContainer
					component={Paper}
					className='flex justify-center shadow-none'>
					<Table
						className='min-w-[1000px] max-w-[1400px]'
						aria-label='customized table'>
						<TableHead className='bg-primary text-third'>
							<TableRow>
								<StyledTableCell className='w-[200px]'>
									Món ăn
								</StyledTableCell>
								<StyledTableCell>Tên món ăn</StyledTableCell>
								<StyledTableCell>Đơn giá</StyledTableCell>
								<StyledTableCell>Số lượng</StyledTableCell>
								<StyledTableCell>Thành tiền</StyledTableCell>
								<StyledTableCell>Hủy chọn</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<StyledTableRow key={row.dishID}>
									<StyledTableCell
										component='th'
										scope='row'
										className='w-[150px]'>
										<div className='w-full h-full'>
											<img
												src={row.imageLink}
												className='object-contain'
											/>
										</div>
									</StyledTableCell>
									<StyledTableCell>{row.dishName}</StyledTableCell>
									<StyledTableCell>{row.price}</StyledTableCell>
									<StyledTableCell>{row.quantity}</StyledTableCell>
									<StyledTableCell>{row.total}</StyledTableCell>
									<StyledTableCell>
										<button
											className='cursor-pointer'
											onClick={handleRemoveCartItem}
											id='cart-remove-button'>
											<DeleteIcon className='hover:text-red-500 transition-all' />
										</button>
									</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
			<div className='flex flex-col w-[1000px] py-5 items-center gap-10'>
				<p className='font-bold text-xl ml-auto'>Tổng tiền: {Total}.000 VND</p>
				<button
					className='bg-primary text-third round w-40'
					onClick={handleOrderBtn}>
					{' '}
					Gọi món{' '}
				</button>
			</div>

			{openModal && (
				<>
					<div className='fixed inset-0 bg-black opacity-50 backdrop-filter backdrop-blur-lg z-50'></div>
					<div className='fixed inset-0 flex items-center justify-center z-50'>
						<div className='modal-container bg-fourth py-8 px-20 rounded-md'>
							<h2 className='text-2xl font-bold mb-8'>Bạn muốn ?</h2>
							<p className='italic mb-8'>*Lưu ý: Mã giảm giá chỉ có thể áp dụng khi thanh toán trực tuy</p>
							<div className='flex justify-center flex-col items-center gap-10'>
								<div className='flex flex-row'>
									<button
										className='bg-primary text-third font-semibold w-[280px] h-[44px] rounded mx-5 border-primary border-[1px]'
										onClick={() => {
											handleCloseModal();
											setopenMessage(true);
											setTimeout(handleCloseMessage,3000);
										}}>
										Thanh toán bằng tiền mặt sau
									</button>
									<button
										className='bg-primary text-third font-semibold w-[280px] h-[44px] rounded mx-5 border-primary border-[1px]'
										onClick={() => {
											navigate('/pay')
										}}>
										Thanh toán trực tuyến ngay
									</button>
								</div>
								<button
									className='bg-third text-primary font-semibold w-[120px] h-[44px] rounded mx-5 border-primary border-[1px]'
									onClick={handleCloseModal}>
									Quay lại
								</button>
							</div>
						</div>
					</div>
				</>
			)}
			{openMessage && (
				<>
				<div className='fixed inset-0 bg-black opacity-50 backdrop-filter backdrop-blur-lg z-50'></div>
				<div className='fixed inset-0 flex items-center justify-center z-50'>
						<OrderSuccess />
				</div>
				</>
			)}
		</div>
	)
}
