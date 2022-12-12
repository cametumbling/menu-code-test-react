import React, { useContext } from 'react';
import OrderContext from '../../store/order-context';
import OrderItem from './OrderItem';

const Order = (props) => {
    const orderCtx = useContext(OrderContext);
    const totalAmount = `£${orderCtx.totalAmount.toFixed(2)}`;
    const orderNumber = 42;
    console.log(totalAmount);

    const hasItems = orderCtx.items.length > 0;
    const hasEnoughItems = orderCtx.items.length >= 4 && orderCtx.items.length <= 6; //USE CORRECT CONDITIONS

    // const orderItemRemoveHandler = (id) => {
    //     orderCtx.removeItem(id);
    // };

    const orderItems = (
        <ul>
            {orderCtx.items.map((item) => (
                <OrderItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
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
                        <div></div>
                        <button>Close</button>
                        {hasEnoughItems && <button>Finalize Order</button>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;
