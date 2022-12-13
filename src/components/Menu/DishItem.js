import React, { useState, useContext, useEffect } from 'react';
import DinerContext from '../../store/diner-context';
import OrderContext from '../../store/order-context';

const DishItem = (props) => {
    const orderCtx = useContext(OrderContext);
    const dinerCtx = useContext(DinerContext);
    let order = orderCtx.items;

    const dinerOrder = order.filter((el) => {
        return el.diner === dinerCtx.diner;
    });

    console.log(dinerOrder);
    // useEffect(() => {
    //     dinerOrder;
    // }, [order]);

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
        const dinerOrder1 = order.filter((el) => {
            return el.diner === dinerCtx.diner;
        });
        if (props.name === 'Cheesecake' && isCheesecake) {
            console.log('Error! Cheesecake is sold out. :(');
            return;
        }
        if (
            (props.name === 'Salmon fillet' && isPrawnCocktail) ||
            (props.name === 'Prawn cocktail' && isSalmonFillet)
        ) {
            console.log("Malheureusement, Pierre dit 'non!'");
            return;
        }
        if (
            dinerOrder1.some((el) => {
                return el.course === props.course;
            })
        ) {
            console.log('Each diner may only have one dish per course.');
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

    return (
        <li>
            <button value={props.id} onClick={addToOrderHandler}>
                <h2>{props.name}</h2>
                <div>£{props.price.toFixed(2)}</div>
            </button>
        </li>
    );
};

export default DishItem;
