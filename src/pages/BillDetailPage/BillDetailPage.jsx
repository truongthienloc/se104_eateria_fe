import { React, useState, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { ReviewForm } from '~/components/Modal/ReviewForm'

export const BillDetailPage = () => {
	let Total = 0
	const billID = '40109283'
	const createdDate = '01/12/2023'

	const [openReview, setopenReview] = useState(false)

	const handleReviewBtn = () => {
		setopenReview(true)
	}
	const handleCloseModal = () => {
		setopenReview(false)
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
				<p className='uppercase text-third font-bold text-3xl'>Hóa đơn</p>
			</div>
			<div className='w-[1000px] mx-auto'>
				<div className='flex flex-col gap-3'>
					<div className='flex flex-row gap-2 items-center text-lg'>
						<p className='uppercase font-bold '>MÃ HÓA ĐƠN: </p>
						<p>{billID}</p>
					</div>
					<div className='flex flex-row gap-2 items-center text-lg'>
						<p className='uppercase font-bold '>THỜI GIAN TẠO ĐƠN: </p>
						<p>{createdDate}</p>
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
										<StyledTableCell align='center'>
											Số lượng
										</StyledTableCell>
										<StyledTableCell align='left'>
											Thành tiền
										</StyledTableCell>
										<StyledTableCell align='center'>
											Hủy chọn
										</StyledTableCell>
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
											<StyledTableCell>
												{row.dishName}
											</StyledTableCell>
											<StyledTableCell>{row.price}</StyledTableCell>
											<StyledTableCell align='center'>
												{row.quantity}
											</StyledTableCell>
											<StyledTableCell align='left'>
												{row.total}
											</StyledTableCell>
											<StyledTableCell align='center'>
												<button
													className='cursor-pointer bg-primary px-4 py-3 text-third'
													id='add-review-button'
													onClick={handleReviewBtn}>
													Đánh giá
												</button>
											</StyledTableCell>
										</StyledTableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</div>
				</div>

				<div className='flex flex-col w-[400px] ml-auto mt-5'>
					<div className='flex flex-row justify-between'>
						<p className='uppercase font-bold'>Tổng tiền</p>
						<p>{Total}.000 VND</p>
					</div>
					<div className='w-full h-[3px] bg-primary mt-1 mb-5'></div>

					<div className='flex flex-row justify-between'>
						<p className='uppercase font-bold'>Giảm giá (chiết khấu)</p>
						<p>{Total}.000 VND</p>
					</div>
					<div className='w-full h-[3px] bg-primary mt-1 mb-5'></div>

					<div className='flex flex-row justify-between'>
						<p className='uppercase font-bold'>Tổng tiền</p>
						<p>{Total}.000 VND</p>
					</div>
					<div className='w-full h-[3px] bg-primary mt-1 mb-5'></div>
				</div>
			</div>
			{openReview && (
				<>
					<div className='fixed inset-0 flex items-center justify-center z-50'>
						<div
							onClick={handleCloseModal}
							className='absolute inset-0 bg-black opacity-50 backdrop-filter backdrop-blur-lg'></div>
						<ReviewForm
              onClose={handleCloseModal} />
					</div>
				</>
			)}
		</div>
	)
}
