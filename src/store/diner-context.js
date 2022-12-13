import { createContext } from 'react';

const DinerContext = createContext({
    diner: '',
    selectDiner: (diner) => {},
});

export default DinerContext;
