import React, { createContext } from 'react';

const OrderContext = React.createContext({
    items: [],
    totalPrice: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
});

export default OrderContext;
