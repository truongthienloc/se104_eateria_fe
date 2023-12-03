import React, { useState } from 'react'

function useEditPromotionModal() {
	const [id, setId] = useState('')
	const [description, setDescription] = useState('')
	const [percent, setPercent] = useState('')
	const [startDay, setStartDay] = useState()
	const [endDay, setEndDay] = useState()

	const handleChangeId = (e) => setId(e.target.value)
	const handleChangeDescription = (e) => setDescription(e.target.value)
	const handleChangePercent = (e) => setPercent(e.target.value)
	const handleChangeStartDay = (date) => setStartDay(date)
	const handleChangeEndDay = (date) => setEndDay(date)

	const setAll = (id, description, percent, startDay, endDay) => {
		setId(id)
		setDescription(description)
		setPercent(percent)
		setStartDay(startDay)
		setEndDay(endDay)
	}

	const validate = () => {
		if (!id || !description || !percent || !startDay || !endDay) {
			return false
		}

		return true
	}

	return {
		id,
		handleChangeId,
		description,
		handleChangeDescription,
		percent,
		handleChangePercent,
		startDay,
		handleChangeStartDay,
		endDay,
		handleChangeEndDay,
		setAll,
		validate,
	}
}

export default useEditPromotionModal
