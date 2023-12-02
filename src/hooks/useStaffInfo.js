import { useState } from 'react'

const useStaffInfo = () => {
	const [id, setId] = useState('')
	const [name, setName] = useState('')
	const [role, setRole] = useState('')
	const [startDate, setStartDate] = useState(null) // You might want to set a default date here
	const [salary, setSalary] = useState('')
	const [shift, setShift] = useState('')
	const [phone, setPhone] = useState('')

	const handleChangeId = (event) => {
		setId(event.target.value)
	}

	const handleChangeName = (event) => {
		setName(event.target.value)
	}

	const handleChangeRole = (event) => {
		setRole(event.target.value)
	}

	const handleChangeStartDate = (date) => {
		setStartDate(date)
	}

	const handleChangeSalary = (event) => {
		setSalary(event.target.value)
	}

	const handleChangeShift = (event) => {
		setShift(event.target.value)
	}

	const handleChangePhoneNumber = (event) => {
		setPhone(event.target.value)
	}

	const setAll = (
		newId,
		newName,
		newRole,
		newStartDate,
		newSalary,
		newShift,
		newPhone
	) => {
		setId(newId || '')
		setName(newName || '')
		setRole(newRole || '')
		setStartDate(newStartDate || null)
		setSalary(newSalary || '')
		setShift(newShift || '')
		setPhone(newPhone || '')
	}

	const validate = () => {
		if (!id || !name || !role || !startDate || !salary || !shift || !phone) {
			return false
		}

		return true
	}

	return {
		id,
		name,
		role,
		startDate,
		salary,
		shift,
		phone,
		handleChangeId,
		handleChangeName,
		handleChangeRole,
		handleChangeStartDate,
		handleChangeSalary,
		handleChangeShift,
		handleChangePhoneNumber,
		setAll,
		validate,
	}
}

export default useStaffInfo
