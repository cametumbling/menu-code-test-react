import React, { useContext, useState } from 'react';
import OrderContext from '../../store/order-context';
import DinerContext from '../../store/diner-context';
import OrderItem from './OrderItem';
import Modal from '../UI/Modal';

const Order = (props) => {
    const orderCtx = useContext(OrderContext);
    const dinerCtx = useContext(DinerContext);
    const totalAmount = `£${orderCtx.totalAmount.toFixed(2)}`;
    const orderNumber = 42;
    const items = orderCtx.items;
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [confirm, setConfirm] = useState(null);

    const hasItems = orderCtx.items.length > 0;
    const hasEnoughItems = orderCtx.items.length >= 4 && orderCtx.items.length <= 6;

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
        setSuccess({
            title: 'Success!',
            message: 'You will enjoy a delicious meal.',
        });
        return;
    };

    const errorHandler = () => {
        setError(null);
    };
    const submitHandler = () => {
        //in future, POST order etc
        setSuccess(null);
        orderCtx.items = [];
        orderCtx.totalAmount = 0;
        orderCtx.diner = '';
        dinerCtx.diners = [];
        dinerCtx.diner = '';
    };

    const onClear = () => {
        setConfirm(true);
    };

    const onClearHandler = () => {
        setConfirm(null);
        orderCtx.items = [];
        orderCtx.totalAmount = 0;
        orderCtx.diner = '';
        dinerCtx.diners = [];
        dinerCtx.diner = '';
    };

    return (
        <>
            {error && <Modal title={error.title} message={error.message} onConfirm={errorHandler} />}
            {success && <Modal title={success.title} message={success.message} onConfirm={submitHandler} />}
            {confirm && (
                <Modal title="Confirm" message="Are you sure you want to clear the order?" onConfirm={onClearHandler} />
            )}
            <header>
                <div>Order No. {orderNumber}</div>
                <div>{props.user}</div>
            </header>
            <div className="container">
                <div>
                    {hasItems && (
                        <>
                            <div> {orderItems}</div>
                            <div>
                                <span>Total Bill Amount</span>
                                <span>{totalAmount}</span>
                            </div>

                            <div>
                                <button onClick={onClear}>Clear</button>
                                {hasEnoughItems && <button onClick={validateOrderHandler}>Validate Order</button>}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Order;
