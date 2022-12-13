import React, { useContext } from 'react';
import DinerContext from '../../store/diner-context';
import OrderContext from '../../store/order-context';

const ValidateOrder = (props) => {
    const orderCtx = useContext(OrderContext);
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
        map.forEach((value, key, map) => {
            let dinerCourses = map.get(key);
            console.log(dinerCourses);
            if (dinerCourses.length <= 1) {
                console.log('error, each diner must order at least two courses!');
                return false;
            } else if (!dinerCourses.includes('mains')) {
                console.log('error, each diner must order a main!');
                return false;
            } else {
                console.log('validation passed!');
                return true;
            }
        });
    };

    return <button onClick={validateOrderHandler}>Validate Order</button>;
};

export default ValidateOrder;
