import React, { useContext, useState } from 'react';
import DinerContext from '../../store/diner-context';
import { Button } from '../UI/Button';

const Diners = (props) => {
    const diners = props.diners;
    const dinerCtx = useContext(DinerContext);
    dinerCtx.diners = diners;
    const [selectedDiner, setSelectedDiner] = useState(diners[0]);
    const setDinerHandler = (e) => {
        setSelectedDiner(e.target.value);
    };
    dinerCtx.diner = selectedDiner;

    const dinerButtons = diners.map((item) => (
        <li key={item}>
            <Button onClick={setDinerHandler} value={item}>
                {item}
            </Button>
        </li>
    ));
    return (
        <div>
            <ul>{dinerButtons}</ul>
        </div>
    );
};

export default Diners;
