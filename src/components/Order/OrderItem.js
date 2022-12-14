import React from 'react';
import { Button } from '../UI/Button';

const OrderItem = (props) => {
    const price = `£${props.price.toFixed(2)}`;

    return (
        <li key={props.id}>
            <h2>{props.name}</h2>
            <div>
                <span>{price}</span>
                <span>{props.diner}</span>
            </div>
            {/* <Button onClick={props.onRemove}>−</Button> */}
        </li>
    );
};

export default OrderItem;
