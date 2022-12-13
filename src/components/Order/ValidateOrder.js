import React, { useContext } from 'react';
import DinerContext from '../../store/diner-context';
import OrderContext from '../../store/order-context';

const ValidateOrder = (props) => {
    const orderCtx = useContext(OrderContext);
    const dinerCtx = useContext(DinerContext);

    const diners = dinerCtx.diners;
    const items = orderCtx.items;

    const validateOrderHandler = () => {
        let map = new Map();
        items.forEach((item) => {
            if (map.has(item.diner)) {
                map.set(item.diner, [item.course, ...map.get(item.diner)]);
            } else {
                map.set(item.diner, [item.course]);
            }
        });
        console.log(map);
        const order = orderCtx.items;
        //filter order by diner
        // const dinerOrder1 = order.filter((el) => {
        //     return el.diner === dinerCtx.diner;
        // });
        // //filter dinerOrder by course

        // //if dinerOrder doesn't contain
        // if (
        //     !dinerOrder.some((el) => {
        //         return el.main;
        //     })
        // ) {
        // }
        //if doesn't have at least two courses
    };

    return <button onClick={validateOrderHandler}>Validate Order</button>;
};

export default ValidateOrder;
