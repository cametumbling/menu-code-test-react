import React, { useContext, useState } from 'react';
import DinerContext from '../../store/diner-context';
import OrderContext from '../../store/order-context';
import OrderItem from './OrderItem';

const Order = (props) => {
    const orderCtx = useContext(OrderContext);
    const dinerCtx = useContext(DinerContext);
    const totalAmount = `£${orderCtx.totalAmount.toFixed(2)}`;
    const orderNumber = 42;

    const hasItems = orderCtx.items.length > 0;
    const hasEnoughItems = orderCtx.items.length >= 4 && orderCtx.items.length <= 6;
    //CONDITIONS
    //Each diner must have at least two courses and one of the courses must be a main and they cannot have more than one of the same course and no prawn cocktail and salmon fillet in same meal

    // const orderItemRemoveHandler = (id) => {
    //     orderCtx.removeItem(id);
    // };
    let order = orderCtx.items;
    let diners = orderCtx.diners;
    console.log(order);
    // const filterItems = (arr, query) => {
    //     return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
    // };
    // if (order.length) {
    //     diners.forEach((diner) => {
    //         console.log(filterItems(order, diner));
    //     });
    // }

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
                        {hasEnoughItems && <button>Finalize Order</button>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;
