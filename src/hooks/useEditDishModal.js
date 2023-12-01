import React, {useState} from "react";

function useEditDishModal() {
    const [id, setId] = useState(-1);
    const [name, setName] = useState('');
    const [kind, setKind] = useState('');
    const [imgs, setImgs] = useState([]);
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleChangeName = e => setName(e.target.value)
    const handleChangeKind = e => setKind(e.target.value)
    const handleChangePrice = e => setPrice(e.target.value)
    const handleChangeDescription = e => setDescription(e.target.value)

    const handleAddImgs = image => {
        setImgs([...imgs, image]);
    }

    const handleRemoveImgs = image => {
        const newImgs = imgs.filter(value => value !== image);
        setImgs([...newImgs]);
    }

    const setAll = (id, name, kind, imgs, price, description) => {
        setId(id)
        setName(name)
        setKind(kind)
        setImgs(imgs)
        setPrice(price)
        setDescription(description)
    }

    return ({
        id, setId,
        name, handleChangeName,
        kind, handleChangeKind,
        imgs, handleAddImgs, handleRemoveImgs,
        price, handleChangePrice,
        description, handleChangeDescription,
        setAll
    });
}

export default useEditDishModal;