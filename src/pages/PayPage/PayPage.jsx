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
import { Accordion, TextField } from '@mui/material'
import PayMethod from '~/components/Modal/PayMethod'
import { OrderSuccess } from '~/components/Modal/OrderSuccess'
import { useNavigate, Navigate } from 'react-router-dom'
import { useSelector} from 'react-redux'
import { toast } from 'react-toastify'

export const PayPage = () => {
	const user = useSelector((state) =>state.user);
	if (!user.id) {
		toast.error('Bạn cần đăng nhập để thực hiện chức năng này!!!',{toastId: 'needLoginID'})
		return (<Navigate to={'/login'} replace />)
	} 
	let Total = 0
	let Discount = 0
	const navigate = useNavigate()
	const [openModal, setopenModal] = useState(false)
	const handleRemoveCartItem = (productID) => {
		// Xóa sản phẩm khỏi giỏ hàng
	}
	const handleOpenModal = () => {
		setopenModal(true)
		setTimeout(handleCloseModal, 3000)
	}
	const handleCloseModal = () => {
		setopenModal(false)

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
				<p className='uppercase text-third font-bold text-3xl'>Thanh toán</p>
				{/* <img className="w-full h-full object-contain" src={banner}/> */}
			</div>
			<div className='flex w-[1000px] py-4'>
				<p className='text-second font-bold text-2xl mr-auto'>Giỏ hàng của bạn</p>
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
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
			<div className='flex flex-col w-[1000px] py-10'>
				<p className='text-second font-bold text-2xl mr-auto'>Thanh toán</p>
				<div className='flex flex-row w-full justify-between'>
					<div className='flex-[0.4]'>
						<p>Phương thức thanh toán</p>
						<PayMethod />
					</div>
					<div className='flex flex-col flex-[0.4] gap-5'>
						<TextField
							id='coupon-filled-search'
							label='Mã giảm giá'
							type='search'
							variant='filled'
						/>
						<div className='flex flex-row justify-between'>
							<p>Tổng tiền</p>
							<p>{Total}.000 VND</p>
						</div>
						<div className='flex flex-row justify-between'>
							<p>Giảm giá</p>
							<p>{Discount}.000 VND</p>
						</div>
						<div className='bg-primary w-full h-1 '></div>
						<div className='flex flex-row justify-between'>
							<p>Tổng tiền</p>
							<p>{Total - Discount}.000 VND</p>
						</div>
						<button
							className='bg-primary text-third'
							onClick={handleOpenModal}>
							Đã hoàn tất thanh toán
						</button>
					</div>
				</div>
			</div>
			{openModal && (
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
