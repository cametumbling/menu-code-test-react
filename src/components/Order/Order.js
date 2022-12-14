import React, { useContext, useState } from 'react';
//import DinerContext from '../../store/diner-context';
import OrderContext from '../../store/order-context';
import OrderItem from './OrderItem';
//import ValidateOrder from './ValidateOrder';
import Modal from '../UI/Modal';

const Order = (props) => {
    const orderCtx = useContext(OrderContext);
    const totalAmount = `£${orderCtx.totalAmount.toFixed(2)}`;
    const orderNumber = 42;
    const items = orderCtx.items;
    const [error, setError] = useState(null);

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

    const validateOrderHandler = (e) => {
        e.preventDefault();
        let map = new Map();
        items.forEach((item) => {
            if (map.has(item.diner)) {
                map.set(item.diner, [item.course, ...map.get(item.diner)]);
            } else {
                map.set(item.diner, [item.course]);
            }
        });
        for (let value of map.values()) {
            let dinerCourses = value;
            console.log(dinerCourses);
            if (value.length <= 1) {
                console.log('error, each diner must order at least two courses!');
                setError({
                    title: 'Error',
                    message: 'Each diner must order at least two courses.',
                });
                return;
            } else if (!dinerCourses.includes('mains')) {
                console.log('error, each diner must order a main!');
                setError({
                    title: 'Error',
                    message: 'Each diner must order a main.',
                });
                return;
            } else {
                console.log('validation passed for this user!');
            }
        }
    };

    const errorHandler = () => {
        setError(null);
    };
    return (
        <>
            {error && <Modal title={error.title} message={error.message} onConfirm={errorHandler} />}
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
                        {/* <button>Clear</button> */}
                        {hasEnoughItems && <button onClick={validateOrderHandler}>Validate Order</button>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;
