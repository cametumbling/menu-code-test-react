import { createContext } from 'react';

const DinerContext = createContext({
    diner: '',
    selectDiner: (diner) => {},
    diners: [],
});

export default DinerContext;
