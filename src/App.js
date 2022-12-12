import React, { useState } from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import NewDish from './components/NewDish/NewDish';
import Menu from './components/Menu';
import Order from './components/Order/Order';
import OrderProvider from './store/OrderProvider';

const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
});

const GET_MENU = gql`
    {
        menu {
            starters {
                id
                name
                price
            }
            mains {
                id
                name
                price
            }
            desserts {
                id
                name
                price
            }
        }
    }
`;

function App() {
    const [dishes, setDishes] = useState(data);

    const { loading, error, data } = useQuery(GET_MENU);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    //if (data) return <pre>{JSON.stringify({ data }, undefined, 2)}</pre>;

    // const addDishHandler = (dish) => {
    //     setDishes((prevDishes) => {
    //         return [dish, ...prevDishes];
    //     });
    // };

    return (
        <OrderProvider>
            <h1>Menu Test</h1>
            <Order />
            <Menu menu={data.menu} />
            {/* <NewDish onAddDish={addDishHandler} /> */}
        </OrderProvider>
    );
}

render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
