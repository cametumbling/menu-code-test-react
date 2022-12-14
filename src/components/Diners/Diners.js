import React, { useContext, useState } from 'react';
import { BsPersonFill } from 'react-icons/bs';
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
            <Button diner onClick={setDinerHandler} value={item}>
                <div style={{ display: 'flex', justifyContent: 'start' }}>
                    <BsPersonFill style={{ margin: '0 5px' }} /> {item}
                </div>
            </Button>
        </li>
    ));
    return (
        <div>
            <h3>Diners</h3>
            <ul>{dinerButtons}</ul>
        </div>
    );
};

export default Diners;
