import React, { useContext } from 'react';
import OrderContext from '../../store/order-context';
import OrderItem from './OrderItem';

const Order = (props) => {
    const orderCtx = useContext(OrderContext);
    const totalAmount = `£${orderCtx.totalAmount.toFixed(2)}`;

    console.log(totalAmount);
    const hasItems = orderCtx.items.length > 0;
    const hasCorrectItems = orderCtx.items.length > 4; //USE CORRECT CONDITIONS
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
