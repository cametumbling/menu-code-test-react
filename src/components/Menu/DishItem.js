import React, { useState, useContext } from 'react';
import Modal from '../UI/Modal';
import DinerContext from '../../store/diner-context';
import OrderContext from '../../store/order-context';
import { Button } from '../UI/Button';

const DishItem = (props) => {
    const orderCtx = useContext(OrderContext);
    const dinerCtx = useContext(DinerContext);
    const [error, setError] = useState(null);

    let order = orderCtx.items;
    let diner = dinerCtx.diner;

    const isCheesecake = order.some((el) => {
        if (el.name === 'Cheesecake') {
            return true;
        }
        return false;
    });
    const isPrawnCocktail = order.some((el) => {
        if (el.name === 'Prawn cocktail') {
            return true;
        }
        return false;
    });
    const isSalmonFillet = order.some((el) => {
        if (el.name === 'Salmon fillet') {
            return true;
        }
        return false;
    });

    const addToOrderHandler = (item) => {
        const dinerOrder = order.filter((el) => {
            return el.diner === dinerCtx.diner;
        });
        if (
            dinerOrder.some((el) => {
                return el.course === props.course;
            })
        ) {
            console.log('Each diner may only have one dish per course.');
            setError({
                title: 'Error',
                message: 'Each diner may only order one dish per course',
            });
            return;
        }
        if (props.name === 'Cheesecake' && isCheesecake) {
            console.log('Error! Cheesecake is sold out. :(');
            setError({
                title: 'Error',
                message: 'Cheesecake is sold out 😭',
            });
            return;
        }
        if (
            (props.name === 'Salmon fillet' && isPrawnCocktail) ||
            (props.name === 'Prawn cocktail' && isSalmonFillet)
        ) {
            console.log("Malheureusement, Pierre dit 'non!'");
            setError({
                title: 'Error',
                message: "Malheureusement, Pierre dit 'non!'",
            });
            return;
        } else {
            orderCtx.addItem({
                id: props.id,
                name: props.name,
                price: props.price,
                course: props.course,
                diner: dinerCtx.diner,
            });
        }
    };
    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
            {error && <Modal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <li>
                <Button dish value={props.id} onClick={addToOrderHandler}>
                    {props.name}
                    <p>£{props.price.toFixed(2)}</p>
                </Button>
            </li>
        </>
    );
};

export default DishItem;
