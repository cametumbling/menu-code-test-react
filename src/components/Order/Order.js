import React, { useContext, useState } from 'react';
import DinerContext from '../../store/diner-context';
import OrderContext from '../../store/order-context';
import OrderItem from './OrderItem';
import ValidateOrder from './ValidateOrder';

const Order = (props) => {
    const orderCtx = useContext(OrderContext);
    const dinerCtx = useContext(DinerContext);
    const totalAmount = `£${orderCtx.totalAmount.toFixed(2)}`;
    const orderNumber = 42;

    const hasItems = orderCtx.items.length > 0;
    const hasEnoughItems = orderCtx.items.length >= 4 && orderCtx.items.length <= 6;

    let order = orderCtx.items;
    console.log(order);

    const orderItems = (
        <ul>
            {orderCtx.items.map((item) => (
                <OrderItem
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    diner={item.diner}
                    // onRemove={orderItemRemoveHandler.bind(null, item.id)}
                />
            ))}
        </ul>
    );
    return (
        <>
            <header>
                <div>Order No. {orderNumber}</div>
                <div>{props.user}</div>
            </header>
            <div className="container">
                <div>
                    {orderItems}
                    {hasItems && (
                        <div>
                            <span>Total Bill Amount</span>
                            <span>{totalAmount}</span>
                        </div>
                    )}
                    <div>
                        <button>Clear</button>
                        {hasEnoughItems && <ValidateOrder />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;
