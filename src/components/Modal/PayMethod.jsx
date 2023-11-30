import * as React from 'react'
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
export default function PayMethod() {
	const [expanded, setExpanded] = React.useState(false)

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false)
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
				<img src={momoqr}className='w-[368px]' />
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
					<img src={vtqr} className='w-[368px]'/> 
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
						<Typography sx={{ width: '50%', flexShrink: 0 }}>Visa</Typography>
					</div>
				</AccordionSummary>
				<AccordionDetails>
					<div>
						<div className='flex flex-row'>
							<p>Nhập mã số thẻ</p>
						</div>
						<div className='flex flex-row'></div>
					</div>
				</AccordionDetails>
			</Accordion>
		</div>
	)
}
