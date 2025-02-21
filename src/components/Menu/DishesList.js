import React from 'react';
import DishItem from './DishItem';

const DishesList = (props) => {
    if (props.items.length === 0) {
        return <p>Found no menu items.</p>;
    }
    let course = props.course;
    return (
        <ul>
            {props.items[course].map((dish, index) => (
                <DishItem key={index} id={dish.id} name={dish.name} price={dish.price} course={course} />
            ))}
        </ul>
    );
};

export default DishesList;
