import { createContext } from 'react';

const OrderContext = createContext({
    items: [],
    totalPrice: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
});

export default OrderContext;
