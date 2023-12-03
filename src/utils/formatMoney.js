const formattedMoney = (number) => {
	if (number == null) {
		return 'N/A'
	}
	let res = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
	return `${res} VND`
}
export default formattedMoney
