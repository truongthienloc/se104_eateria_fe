const formattedMoney = (number) => {
	let res = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
	return `${res} VND`
}
export default formattedMoney
