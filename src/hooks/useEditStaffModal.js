import React, {useState} from "react";

function useEditStaffModal() {
    const [id, setId] = useState('')
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [startDate, setStartDate] = useState();
    const [salary, setSalary] = useState('');
    const [shift, setShift] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    const handleChangeId = e => setId(e.target.value)
    const handleChangeName = e => setName(e.target.value)
    const handleChangePosition = e => setPosition(e.target.value)
    const handleChangeStartDate = e => setStartDate(e.target.value)
    const handleChangeSalary = e => setSalary(e.target.value)
    const handleChangeShift = e => setShift(e.target.value)
    const handleChangePhoneNumber = e => setPhoneNumber(e.target.value)

    const setAll = (id, name, position, startDate, salary, shift, phoneNumber) => {
        setId(id)       
        setName(name)
        setPosition(position)
        setStartDate(startDate)
        setSalary(salary)
        setShift(shift)
        setPhoneNumber(phoneNumber)
        
    }

    return ({
        id, handleChangeId,
        name, handleChangeName,
        position, handleChangePosition,
        startDate, handleChangeStartDate,
        salary, handleChangeSalary,
        shift, handleChangeShift,
        phoneNumber,handleChangePhoneNumber,
        setAll
    });
}

export default useEditStaffModal;