import React, { useEffect, useState } from 'react';
import DishItem from './DishItem';

const DishesList = (props) => {
    //There is only one piece of cheesecake
    // const [cheesecake, setCheesecake] = useState(cheesecake);
    // const checkIfCheesecake = () => {
    //     let orderItems = orderCtx.items;
    //     if (orderItems.includes('cheesecake')) {
    //         setCheesecake(!cheesecake);
    //     }
    // };
    //this is done in a super hacky way, you would want to have the amount of items in the
    // useEffect(() => {
    //     checkIfCheesecake();
    //     if (!cheesecake) {
    //         let desserts = props.items.desserts;
    //         const index = desserts.indexOf('cheesecake');
    //         desserts.splice(index, 1);
    //     }
    // });
    if (props.items.length === 0) {
        return <p>Found no menu items.</p>;
    }
    let course = props.course;
    return (
        <ul>
            {props.items[course].map((dish) => (
                <DishItem id={dish.id} name={dish.name} price={dish.price} />
            ))}
        </ul>
    );
};

export default DishesList;
