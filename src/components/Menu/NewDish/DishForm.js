import React, { useState } from 'react';
import { Button } from '../../UI/Button';

const DishForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredPrice, setEnteredPrice] = useState(0);

    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value);
    };

    const priceChangeHandler = (e) => {
        setEnteredPrice(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const dishData = {
            name: enteredName,
            price: enteredPrice,
        };
        props.onSaveDishData(dishData);
        setEnteredName('');
        setEnteredPrice(0);
    };
    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label>Name</label>
                    <input type="text" value={enteredName} onChange={nameChangeHandler} />
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" min="0.01" step="0.01" value={enteredPrice} onChange={priceChangeHandler} />
                </div>
            </div>
            <div>
                <Button type="button" onClick={props.onCancel}>
                    Cancel
                </Button>
                <Button type="submit">Add Dish</Button>
            </div>
        </form>
    );
};

export default DishForm;
