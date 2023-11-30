import React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

export const ReceiptHistoryPage = () => {
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

	function createData(receiptID, date, paymentMethod, totalBill, detail) {
		let payMethod = "Thanh toán tiền mặt";
		console.log(paymentMethod);
		if (paymentMethod !== "cash") {
			 payMethod = (paymentMethod === "banking") ? "Chuyển khoản ngân hàng" : "Ví điện tử Momo";
		}
		return { receiptID, date, payMethod, totalBill, detail }
	}

	const rows = [
		createData("BI7411","28/01/2023","cash","500.000 VND","Xem"),
		createData("BI7411","28/01/2023","cash","500.000 VND","Xem"),
		createData("BI7411","28/01/2023","cash","500.000 VND","Xem"),
		createData("BI7411","28/01/2023","cash","500.000 VND","Xem"),
		createData("BI7411","28/01/2023","cash","500.000 VND","Xem"),
	]
	return (
		<div className='w-full h-full px-10 pt-10 '>
			<div className='mb-10'>
				<p className='font-bold text-2xl'>Lịch sử hóa đơn</p>
				<div className='bg-primary w-full h-1 my-3'></div>
			</div>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label='customized table'>
					<TableHead className='bg-primary'>
						<TableRow>
							<StyledTableCell>Mã hóa đơn</StyledTableCell>
							<StyledTableCell>Ngày tạo đơn</StyledTableCell>
							<StyledTableCell>Phương thức thanh toán</StyledTableCell>
							<StyledTableCell>Tổng thanh toán</StyledTableCell>
							<StyledTableCell align='center'>Chi tiết hóa đơn</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<StyledTableRow key={row.receiptID}>
								<StyledTableCell component='th' scope='row'>
									{row.receiptID}
								</StyledTableCell>
								<StyledTableCell align='justify'>
									{row.date}
								</StyledTableCell>
								<StyledTableCell align='justify'>{row.payMethod}</StyledTableCell>
								<StyledTableCell align='justify'>
									{row.totalBill}
								</StyledTableCell>
								<StyledTableCell className='flex items-center'>
									<a href={`/bill/id?${row.receiptID}`}>Xem chi tiết</a>
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}
