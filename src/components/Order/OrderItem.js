import React from 'react';
import { Button } from '../UI/Button';

const OrderItem = (props) => {
    const price = `£${props.price.toFixed(2)}`;

    return (
        <li>
            <span>{props.name}</span>
            <span>{price}</span>
            <span>{props.diner}</span>
            {/* <Button onClick={props.onRemove}>−</Button> */}
        </li>
    );
};

export default OrderItem;
