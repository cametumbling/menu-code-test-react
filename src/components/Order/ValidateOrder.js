import React, { useContext, useState } from 'react';
import OrderContext from '../../store/order-context';

const ValidateOrder = (props) => {
    let [isValid, setIsValid] = useState(true);
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
        for (let value of map.values()) {
            let dinerCourses = value;
            console.log(dinerCourses);
            if (value.length <= 1) {
                console.log('error, each diner must order at least two courses!');
                return setIsValid(!isValid);
            } else if (!dinerCourses.includes('mains')) {
                console.log('error, each diner must order a main!');
                return setIsValid(!isValid);
            } else {
                console.log('validation passed for this user!');
            }
        }
    };

    return <button onClick={validateOrderHandler}>Validate Order</button>;
};

export default ValidateOrder;
