import React, { useState } from 'react';
import DishForm from './DishForm';

const NewDish = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveDishDataHandler = (enteredDishData) => {
        const dishData = {
            ...enteredDishData,
            id: Math.random().toString(),
        };
        props.onAddDish(dishData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };
    return (
        <div>
            {!isEditing && <button onClick={startEditingHandler}>Add New Dish</button>}
            {isEditing && <DishForm onSaveDishData={saveDishDataHandler} onCancel={stopEditingHandler} />}
        </div>
    );
};

export default NewDish;
