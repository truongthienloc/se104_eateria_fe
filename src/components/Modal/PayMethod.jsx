import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

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
					<Typography sx={{ width: '33%', flexShrink: 0 }}>
						Momo
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						QR momo
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel2bh-content'
					id='panel2bh-header'>
					<Typography sx={{ width: '33%', flexShrink: 0 }}>ViettelPay</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						ViettelPay QR
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel3bh-content'
					id='panel3bh-header'>
					<Typography sx={{ width: '33%', flexShrink: 0 }}>
						Internet Banking
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Bank
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel4bh-content'
					id='panel4bh-header'>
					<Typography sx={{ width: '33%', flexShrink: 0 }}>
						Thẻ ngân hàng, thẻ VISA
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						card
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	)
}
