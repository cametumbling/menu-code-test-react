import React, { useContext, useState } from 'react';
import OrderContext from '../../store/order-context';
import DinerContext from '../../store/diner-context';
import OrderItem from './OrderItem';
import Modal from '../UI/Modal';
import { Button } from '../UI/Button';
import { Container } from '../UI/Container';

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
            message: 'Bon Appétit! 😋',
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
            <Container>
                <header>
                    <div>Order No. {orderNumber}</div>
                    <div>{props.user}</div>
                </header>
                <div>
                    {hasItems && (
                        <>
                            <div> {orderItems}</div>
                            <div>
                                <h3>Total Bill Amount</h3>
                                <h2>{totalAmount}</h2>
                            </div>

                            <div>
                                <Button onClick={onClear}>Clear</Button>
                                {hasEnoughItems && <Button onClick={validateOrderHandler}>Validate Order</Button>}
                            </div>
                        </>
                    )}
                </div>
            </Container>
        </>
    );
};

export default Order;
