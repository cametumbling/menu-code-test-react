import React, { useContext } from 'react';
import OrderContext from '../../store/order-context';

const Order = (props) => {
    const orderCtx = useContext(OrderContext);
    // const totalAmount = orderCtx.items.reduce((curPrice, item) => {
    //     curPrice += item.price;
    // }, 0);
    const totalAmount = `£${orderCtx.totalAmount.toFixed(2)}`;

    console.log(totalAmount);
    const hasItems = orderCtx.items.length > 0;
    const hasCorrectItems = orderCtx.items.length > 4; //USE CORRECT CONDITIONS

    const orderItems = (
        <ul>
            {orderCtx.items.map((item) => (
                <li key={item.id}>
                    <span>{item.name}</span>
                    <span>£{item.price.toFixed(2)}</span>
                </li>
            ))}
        </ul>
    );
    return (
        <>
            <header>
                <div>Order No.</div>
                <div>User</div>
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
                        {hasCorrectItems && <button>Finalize Order</button>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;
