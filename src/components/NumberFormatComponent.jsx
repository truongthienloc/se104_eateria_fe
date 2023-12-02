import React from 'react'

const formatNumber = (number) => {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const NumberFormatComponent = ({ number }) => {
	const formattedNumber = formatNumberWithCommas(number)

	return `${formattedNumber} VND`
}

export default NumberFormatComponent
