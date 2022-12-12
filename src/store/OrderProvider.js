import React, { useReducer } from 'react';
import OrderContext from './order-context';

const defaultOrderState = {
    items: [],
    totalAmount: 0,
};

const orderReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    if (action.type === 'REMOVE') {
        const existingOrderItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingItem = state.items[existingOrderItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems = state.items.filter((item) => item.id !== action.id);

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    return defaultOrderState;
};

const OrderProvider = (props) => {
    const [orderState, dispatchOrderAction] = useReducer(orderReducer, defaultOrderState);

    const addItemToOrderHandler = (item) => {
        dispatchOrderAction({ type: 'ADD', item: item });
    };

    const removeItemFromOrderHandler = (id) => {
        dispatchOrderAction({ type: 'REMOVE', id: id });
    };

    const orderContext = {
        items: orderState.items,
        totalAmount: orderState.totalAmount,
        addItem: addItemToOrderHandler,
        removeItem: removeItemFromOrderHandler,
    };

    return <OrderContext.Provider value={orderContext}>{props.children}</OrderContext.Provider>;
};

export default OrderProvider;
