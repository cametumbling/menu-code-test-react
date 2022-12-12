import React from 'react';

const Order = (props) => {
    const orderItems = (
        <ul>
            {[
                { id: 'c1', name: 'sushi', amount: 1, price: 1.5 },
                { id: 'c2', name: 'schnitzel', amount: 1, price: 3 },
            ].map((item) => (
                <li>item.name</li>
            ))}
        </ul>
    );
    return (
        <>
            <header>
                <div>Order No.</div>
                <div>User</div>
            </header>
            <div class="container">
                <div>
                    {orderItems}
                    <div>
                        <span>Order Total</span>
                        <span>35.00</span>
                    </div>
                    <div>
                        <button>Close</button>
                        <button>Order</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;
