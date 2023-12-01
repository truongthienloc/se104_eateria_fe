import React, {useState} from "react";

function useEditPromotionModal() {
    const [id, setId] = useState('');
    const [description, setDescription] = useState('');
    const [percent, setPercent] = useState('');
    const [startDay, setStartDay] = useState('');
    const [endDay, setEndDay] = useState('');
    

    const handleChangeId = e => setId(e.target.value)
    const handleChangeDescription = e => setDescription(e.target.value)
    const handleChangePercent = e => setPercent(e.target.value)
    const handleChangeStartDay = e => setStartDay(e.target.value)
    const handleChangeEndDay = e => setEndDay(e.target.value)

    const setAll = (id, description, percent, startDay, endDay) => {
        setId(id)
        setDescription(description)
        setPercent(percent)
        setStartDay(startDay)
        setEndDay(endDay)
    }

    return ({
        id, handleChangeId,
        description, handleChangeDescription,
        percent, handleChangePercent,
        startDay, handleChangeStartDay,
        endDay, handleChangeEndDay,
        setAll
    });
}

export default useEditPromotionModal;