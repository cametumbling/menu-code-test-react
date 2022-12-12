import OrderContext from './order-context';

const OrderProvider = (props) => {
    const addItemToOrderHandler = (item) => {};
    const removeItemFromOrderHandler = (item) => {};

    const orderContext = {
        items: [],
        totalPrice: 0,
        addItem: addItemToOrderHandler,
        removeItem: removeItemFromOrderHandler,
    };

    return <OrderContext.Provider value={orderContext}>{props.children}</OrderContext.Provider>;
};

export default OrderProvider;
