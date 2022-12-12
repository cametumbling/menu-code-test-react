import { buildASTSchema } from 'graphql';
import { useReducer } from 'react';
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
        totalPrice: orderState.totalAmount,
        addItem: addItemToOrderHandler,
        removeItem: removeItemFromOrderHandler,
    };

    return <OrderContext.Provider value={orderContext}>{props.children}</OrderContext.Provider>;
};

export default OrderProvider;
