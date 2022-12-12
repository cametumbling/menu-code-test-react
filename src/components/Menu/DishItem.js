import React, { useState } from 'react';

const DishItem = (props) => {
    const [selectedItem, setSelectedItem] = useState('');
    const setItemHandler = (e) => {
        setSelectedItem(e.target.value);
    };

    return (
        <li>
            <button value={props.id} onClick={setItemHandler}>
                <h2>{props.name}</h2>
                <div>£{props.price}</div>
            </button>
        </li>
    );
};

export default DishItem;
