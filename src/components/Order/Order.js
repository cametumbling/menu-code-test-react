import React, { useContext, useState } from 'react';
import OrderContext from '../../store/order-context';
import OrderItem from './OrderItem';

const Order = (props) => {
    const orderCtx = useContext(OrderContext);
    const totalAmount = `£${orderCtx.totalAmount.toFixed(2)}`;
    const orderNumber = 42;

    const diners = props.diners;
    const [selectedDiner, setSelectedDiner] = useState(diners[0]);
    const setDinerHandler = (e) => {
        setSelectedDiner(e.target.value);
    };
    //WHERE DO WE PASS THIS? diner={selectedDiner} or how to pass to context?
    console.log({ selectedDiner });

    const dinerButtons = diners.map((item) => (
        <li key={item}>
            <button onClick={setDinerHandler} value={item}>
                {item}
            </button>
        </li>
    ));

    const hasItems = orderCtx.items.length > 0;
    const hasEnoughItems = orderCtx.items.length >= 4 && orderCtx.items.length <= 6; //USE CORRECT CONDITIONS

    // const orderItemRemoveHandler = (id) => {
    //     orderCtx.removeItem(id);
    // };
    console.log(orderCtx.items);

    const orderItems = (
        <ul>
            {orderCtx.items.map((item) => (
                <OrderItem
                    name={item.name}
                    price={item.price}
                    key={item.id}
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
                        <ul>{dinerButtons}</ul>
                    </div>
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
