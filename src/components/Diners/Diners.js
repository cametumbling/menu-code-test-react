import React, { useContext, useState } from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { Button } from '../UI/Button';
import DinerContext from '../../store/diner-context';
import { useTheme } from 'styled-components';

const Diners = (props) => {
    const theme = useTheme();
    const diners = props.diners;
    const dinerCtx = useContext(DinerContext);
    dinerCtx.diners = diners;
    const [selectedDiner, setSelectedDiner] = useState(diners[0]);

    const setDinerHandler = (e) => {
        setSelectedDiner(e.target.value);
    };
    dinerCtx.diner = selectedDiner;
    console.log(selectedDiner);

    const dinerButtons = diners.map((item, index) => (
        <li key={index}>
            {/* <Button onClick={setDinerHandler} value={item} diner>
                <div style={{ display: 'flex', justifyContent: 'start' }}>
                    <BsPersonFill style={{ margin: '0 5px' }} /> {item}
                </div>
            </Button> */}
            {selectedDiner === item ? (
                <Button diner onClick={setDinerHandler} value={item} bg={theme.colors.secondary}>
                    <BsPersonFill style={{ margin: '0 5px', padding: '3 0 0 0' }} />
                    {item}
                </Button>
            ) : (
                <Button onClick={setDinerHandler} value={item} diner>
                    <BsPersonFill style={{ margin: '0 5px', padding: '3 0 0 0' }} />
                    {item}
                </Button>
            )}
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
