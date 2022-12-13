import React, { useState, useContext } from 'react';
import DinerContext from '../../store/diner-context';
import OrderContext from '../../store/order-context';

const DishItem = (props) => {
    const orderCtx = useContext(OrderContext);
    const dinerCtx = useContext(DinerContext);

    let order = orderCtx.items;
    let diner = dinerCtx.diner;
    //let doesit = Object.fromEntries(Object.entries(order).filter(([key]) => key.includes('name')));

    // const doesit = order.filter((obj) => {
    //     return obj.name === 'Cheesecake';
    // });
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
        if (props.name === 'Cheesecake' && isCheesecake) {
            console.log('Error! Cheesecake is sold out. :(');
        }
        if (
            (props.name === 'Salmon fillet' && isPrawnCocktail) ||
            (props.name === 'Prawn cocktail' && isSalmonFillet)
        ) {
            console.log("Malheureusement, Pierre dit 'non!'");
        } else {
            orderCtx.addItem({
                id: props.id,
                name: props.name,
                price: props.price,
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

// const [selectedItem, setSelectedItem] = useState('');
// const setItemHandler = (e) => {
//     setSelectedItem(e.target.value);
//     props.onAddItemToOrder(selectedItem);
// };

// const isCheesecake = order.some((el) => {
//     if (el.name === 'Cheesecake') {
//         return true;
//     }
//     return false;
// });
//console.log(isCheesecake);
// let order = orderCtx.items;
// let diner = dinerCtx.diner;
//if the item we're trying to add to the order includes cheesecake
//check if cheesecake has already been ordered
//if it has, then show an error
//otherwise add it to the order
