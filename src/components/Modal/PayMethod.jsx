import * as React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import momoLogo from '../../assets/images/momo.svg'
import viettelLogo from '../../assets/images/viettelpay.svg'
import visa from '../../assets/images/visa.svg'
import mbb from '../../assets/images/mobile-banking.png'
import vnpay from '../../assets/images/vnpay.png'
import momoqr from '../../assets/images/momoqr.svg'
import vtqr from '../../assets/images/vtpayqr.svg'
import { OrderSuccess } from './OrderSuccess'
import { deleteAll } from '~/features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function PayMethod() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [openModal, setopenModal] = useState(false)
	const [expanded, setExpanded] = useState(false)
	const [validMonth, setvalidMonth] = useState('')

	const handleChangeValid = (event) => {
		setAge(event.target.value)
	}
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false)
	}
	const handlePay = () => {
		setopenModal(true)
		dispatch(deleteAll())
		setTimeout(() => {
			setopenModal(false)
			navigate('/home')
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		}, 3000)
	}
	return (
		<div>
			<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1bh-content'
					id='panel1bh-header'>
					<div className='flex flex-row items-center gap-2 w-full'>
						<div>
							<img src={momoLogo} />
						</div>
						<Typography sx={{ width: '50%', flexShrink: 0 }}>Momo</Typography>
					</div>
				</AccordionSummary>
				<AccordionDetails>
					<div className='w-full h-full '>
						<img src={momoqr} className='w-[368px]' />
					</div>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel2bh-content'
					id='panel2bh-header'>
					<div className='flex flex-row items-center gap-2 w-full'>
						<div>
							<img src={viettelLogo} />
						</div>
						<Typography sx={{ width: '50%', flexShrink: 0 }}>
							ViettelPay
						</Typography>
					</div>
				</AccordionSummary>
				<AccordionDetails>
					<div className='w-full h-full '>
						<img src={vtqr} className='w-[368px]' />
					</div>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel3bh-content'
					id='panel3bh-header'>
					<div className='flex flex-row items-center gap-2 w-full '>
						<div className='w-[50px] h-[50px] overflow-hidden flex items-center justify-center'>
							<img
								className='w-full h-full object-contain scale-[1.3]'
								src={mbb}
							/>
						</div>
						<Typography sx={{ width: '50%', flexShrink: 0 }}>
							Internet Banking
						</Typography>
					</div>
				</AccordionSummary>
				<AccordionDetails>
					<img src={vnpay} />
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel4bh-content'
					id='panel4bh-header'>
					<div className='flex flex-row items-center gap-2 w-full'>
						<div>
							<img src={visa} />
						</div>
						<Typography sx={{ width: '50%', flexShrink: 0 }}>
							Thẻ Visa/Thẻ ATM
						</Typography>
					</div>
				</AccordionSummary>
				<AccordionDetails>
					<div className='flex flex-col gap-5 items-center'>
						<div className='w-full flex flex-row items-center justify-between'>
							<p>Nhập mã số thẻ: </p>
							<input
								type='text'
								placeholder='Mã số thẻ'
								className='rounded-md bg-third border-[1px] border-primary text-second px-4 py-2 outline-none'
							/>
						</div>
						<div className='w-full flex flex-row items-center justify-between'>
							<p>Hạn thẻ: </p>
							<div className='flex flex-row gap-2'>
								<input
									type='text'
									placeholder='Tháng'
									className='w-[104px] rounded-md bg-third border-[1px] border-primary text-second px-4 py-2 outline-none'
								/>
								<input
									type='text'
									placeholder='Năm'
									className='w-[104px] rounded-md bg-third border-[1px] border-primary text-second px-4 py-2 outline-none'
								/>
							</div>
						</div>
						<button
							className='bg-primary text-third round w-40'
							onClick={handlePay}>
							Thanh toán
						</button>
					</div>
				</AccordionDetails>
			</Accordion>
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
