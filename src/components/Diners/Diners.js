import React, { useContext, useState } from 'react';
import DinerContext from '../../store/diner-context';

const Diners = (props) => {
    const diners = props.diners;
    const dinerCtx = useContext(DinerContext);
    dinerCtx.diners = diners;
    const [selectedDiner, setSelectedDiner] = useState(diners[0]);
    const setDinerHandler = (e) => {
        setSelectedDiner(e.target.value);
    };
    dinerCtx.diner = selectedDiner;
    console.log(dinerCtx.diner);
    console.log(dinerCtx.diners);

    const dinerButtons = diners.map((item) => (
        <li key={item}>
            <button onClick={setDinerHandler} value={item}>
                {item}
            </button>
        </li>
    ));
    return (
        <div>
            <ul>{dinerButtons}</ul>
        </div>
    );
};

export default Diners;
