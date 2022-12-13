import React, { useState, useContext } from 'react';
import DinerContext from '../../store/diner-context';
import OrderContext from '../../store/order-context';

const DishItem = (props) => {
    const orderCtx = useContext(OrderContext);
    const dinerCtx = useContext(DinerContext);
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
            diner: dinerCtx.diner,
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
