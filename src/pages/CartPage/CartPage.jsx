import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import DeleteIcon from '@mui/icons-material/Delete';

export const CartPage = () => {
	let Total = 0;
	const handleRemoveCartItem = (productID) => {
		// Xóa sản phẩm khỏi giỏ hàng
	}
	const handleOrderBtn = () => {
		// Đặt món
	}
	const StyledTableCell = styled(TableCell)(({ theme }) => ({
		[`&.${tableCellClasses.head}`]: {
			// backgroundColor: theme.palette.common.black,
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
		let total = parseInt(price) * quantity + ".000 VND";
		Total += parseInt(price) * quantity;
		let imageLink = "https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250230038502.jpg";
		return {dishID, imageLink, dishName, price, quantity, total}
	}

	const rows = [
		createData(1, 'url', 'Phở bò đặc biệt', '65.000 VND', 3),
		createData(1, 'url', 'Phở bò đặc biệt', '65.000 VND', 3),
		createData(1, 'url', 'Phở bò đặc biệt', '65.000 VND', 3),
		createData(1, 'url', 'Phở bò đặc biệt', '65.000 VND', 3),
		createData(1, 'url', 'Phở bò đặc biệt', '65.000 VND', 3),
	]
	return (
		<div className='flex flex-col pb-10 pt-1'>
			<div className='w-full h-[160px] mt-1 mb-5 bg-headerBanner bg-no-repeat bg-cover flex justify-center items-center'>
				<p className='uppercase text-third font-bold text-2xl'>Giỏ hàng</p>
				{/* <img className="w-full h-full object-contain" src={banner}/> */}
			</div>

			<div>
				<TableContainer component={Paper} className='flex justify-center'>
					<Table
						className='min-w-[700px] max-w-[1000px] shadow-none'
						aria-label='customized table'>
						<TableHead className='bg-primary text-third'>
							<TableRow>
								<StyledTableCell className='w-[300px]'>Món ăn</StyledTableCell>
								<StyledTableCell>Tên món ăn</StyledTableCell>
								<StyledTableCell>Đơn giá</StyledTableCell>
								<StyledTableCell>Số lượng</StyledTableCell>
								<StyledTableCell>Thành tiền</StyledTableCell>
								<StyledTableCell>Hủy chọn</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody >
							{rows.map((row) => (
								<StyledTableRow key={row.dishID}>
									<StyledTableCell component='th' scope='row' className='w-[150px]'>
										<div className='w-full h-full'>
											<img src={row.imageLink} className='object-contain'/>
										</div>
									</StyledTableCell>
									<StyledTableCell>{row.dishName}</StyledTableCell>
									<StyledTableCell>{row.price}</StyledTableCell>
									<StyledTableCell>{row.quantity}</StyledTableCell>
									<StyledTableCell>{row.total}</StyledTableCell>
									<StyledTableCell>
										<button className='cursor-pointer' 
										onClick={handleRemoveCartItem}
										id='cart-remove-button'>
											<DeleteIcon className='hover:text-red-500 transition-all'/>
										</button>
									</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
			<div className='flex flex-col w-full py-5'>
				<p className='ml-auto mr-[30%] font-bold text-xl'>Tổng tiền: {Total}.000 VND</p>
				<button className='bg-primary text-third round w-40'> Gọi món </button>
			</div>
		</div>
	)
}
