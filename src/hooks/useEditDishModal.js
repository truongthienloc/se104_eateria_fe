import React, {useState} from "react";

function useEditDishModal() {
    const [name, setName] = useState('');
    const [kind, setKind] = useState('');
    const [imgs, setImgs] = useState([]);
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleChangeName = e => setName(e.target.value)
    const handleChangeKind = e => setKind(e.target.value)
    const handleChangeImgs = e => setImgs(e.target.src)
    const handleChangePrice = e => setPrice(e.target.value)
    const handleChangeDescription = e => setDescription(e.target.value)

    const setAll = (name, kind, imgs, price, description) => {
        setName(name)
        setKind(kind)
        setImgs(imgs)
        setPrice(price)
        setDescription(description)
    }

    return ({
        name, handleChangeName,
        kind, handleChangeKind,
        imgs, handleChangeImgs,
        price, handleChangePrice,
        description, handleChangeDescription,
        setAll
    });
}

export default useEditDishModal;