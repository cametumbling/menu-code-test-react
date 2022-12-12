import React, { useState, useContext } from 'react';
import OrderContext from '../../store/order-context';

const DishItem = (props) => {
    const orderCtx = useContext(OrderContext);
    // const [selectedItem, setSelectedItem] = useState('');
    // const setItemHandler = (e) => {
    //     setSelectedItem(e.target.value);
    //     props.onAddItemToOrder(selectedItem);
    // };

    const addToOrderHandler = (item) => {
        orderCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
        });
    };

    return (
        <li>
            <button value={props.id} onClick={addToOrderHandler}>
                <h2>{props.name}</h2>
                <div>£{props.price.toFixed(2)}</div>
            </button>
        </li>
    );
};

export default DishItem;
