import React from 'react';

const OrderItem = (props) => {
    const price = `£${props.price.toFixed(2)}`;

    return (
        <li>
            <h2>{props.name}</h2>
            <div>
                <span>{price}</span>
            </div>
            {/* <button onClick={props.onRemove}>−</button> */}
        </li>
    );
};

export default OrderItem;
