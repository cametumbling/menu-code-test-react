import React, { useReducer } from 'react';
import DinerContext from './diner-context';

const defaultDinerState = {
    diner: '',
};
const dinerReducer = (state, action) => {
    if (action.type === 'SELECT') {
        const updatedDiner = state.diner(action.diner);

        return {
            diner: updatedDiner,
        };
    }
    return defaultDinerState;
};
const DinerProvider = (props) => {
    const [dinerState, dispatchDinerAction] = useReducer(dinerReducer, defaultDinerState);

    const selectDinerHandler = (diner) => {
        dispatchDinerAction({ type: 'SELECT', diner: diner });
    };

    const dinerContext = {
        diner: dinerState.diner,
        selectDiner: selectDinerHandler,
    };

    return <DinerContext.Provider value={dinerContext}>{props.children}</DinerContext.Provider>;
};

export default DinerProvider;
