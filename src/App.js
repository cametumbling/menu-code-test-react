import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/UI/GlobalStyle';
//import NewDish from './components/Menu/NewDish/NewDish';
import Menu from './components/Menu/Menu';
import Order from './components/Order/Order';
import DinerProvider from './store/DinerProvider';
import OrderProvider from './store/OrderProvider';
import Diners from './components/Diners/Diners';
import Spinner from './components/UI/Spinner';
import { Container } from './components/UI/Container';
import { Header } from './components/UI/Header';
import { Card } from './components/UI/Card';
import { POS } from './components/UI/POS';

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

const DINERS = ['Jill', 'Patricia'];
const theme = {
    colors: {
        primary: '#db3943',
        secondary: '#A93233',
        muted: '#808080',
        mutedText: '#c5c5c5',
    },
    mobile: '768px',
};
function App() {
    const user = 'Lovely OpenTable Dev';
    const { loading, error, data } = useQuery(GET_MENU);

    if (loading) return <Spinner />;
    if (error) return <p>Error : {error.message}</p>;

    // const addDishHandler = (dish) => {
    //     setDishes((prevDishes) => {
    //         return [dish, ...prevDishes];
    //     });
    // };

    return (
        <ThemeProvider theme={theme}>
            <DinerProvider>
                <OrderProvider>
                    <GlobalStyle />
                    <Container>
                        <Header>
                            <h1>Menu Test</h1>
                            <img src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/211226254_10159773944875799_3677613253310959932_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pfpqZe-6p-MAX9ZD7-O&_nc_ht=scontent-lhr8-1.xx&oh=00_AfC_Tux2S5SV5gJ2GZGcaN9HdH3q_RFfZ1XdPyZ9fFnw5A&oe=639EAF74" />
                        </Header>
                        <Card>
                            <Order user={user} />
                            <Diners diners={DINERS} />
                        </Card>
                        <Card>
                            <POS>
                                <Menu menu={data.menu} />
                            </POS>
                        </Card>
                    </Container>
                    {/* <NewDish onAddDish={addDishHandler} /> */}
                </OrderProvider>
            </DinerProvider>
        </ThemeProvider>
    );
}

render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
