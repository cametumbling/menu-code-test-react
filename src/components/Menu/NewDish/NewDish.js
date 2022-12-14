import React, { useState } from 'react';
import { Button } from '../../UI/Button';
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
            {!isEditing && <Button onClick={startEditingHandler}>Add New Dish</Button>}
            {isEditing && <DishForm onSaveDishData={saveDishDataHandler} onCancel={stopEditingHandler} />}
        </div>
    );
};

export default NewDish;
