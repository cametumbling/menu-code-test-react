import React from 'react';
import { Button } from '../UI/Button';

const OrderItem = (props) => {
    const price = `£${props.price.toFixed(2)}`;

    return (
        <li>
            <p
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <span>{props.name}</span>
                <span>{price}</span>
                <span>{props.diner}</span>
            </p>
            {/* <Button onClick={props.onRemove}>−</Button> */}
        </li>
    );
};

export default OrderItem;
