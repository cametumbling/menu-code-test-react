import React, { Suspense, lazy } from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/UI/GlobalStyle';
//import NewDish from './components/Menu/NewDish/NewDish';
import DinerProvider from './store/DinerProvider';
import OrderProvider from './store/OrderProvider';
import Spinner from './components/UI/Spinner';
import { Container } from './components/UI/Container';
import { Header } from './components/UI/Header';
import { Card } from './components/UI/Card';
import { Flex } from './components/UI/FlexStyle';

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
    const DINERS = ['Jill', 'Jacques'];

    const user = 'Lovely OpenTable Dev';
    const { loading, error, data } = useQuery(GET_MENU);

    if (loading) return <Spinner />;
    if (error) return <p>Error : {error.message}</p>;

    // const addDishHandler = (dish) => {
    //     setDishes((prevDishes) => {
    //         return [dish, ...prevDishes];
    //     });
    // };
    const Order = lazy(() => import('./components/Order/Order'));
    const Menu = lazy(() => import('./components/Menu/Menu'));
    const Diners = lazy(() => import('./components/Diners/Diners'));

    return (
        <ThemeProvider theme={theme}>
            <DinerProvider>
                <OrderProvider>
                    <GlobalStyle />
                    <Container>
                        <Header>
                            <h1>Menu Test</h1>
                            <img
                                alt="logo"
                                src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/211226254_10159773944875799_3677613253310959932_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pfpqZe-6p-MAX9ZD7-O&_nc_ht=scontent-lhr8-1.xx&oh=00_AfC_Tux2S5SV5gJ2GZGcaN9HdH3q_RFfZ1XdPyZ9fFnw5A&oe=639EAF74"
                            />
                        </Header>
                        <Suspense fallback={<Spinner />}>
                            <Card height="45vh">
                                <Order user={user} />
                            </Card>
                            <Flex>
                                <Card>
                                    <Menu menu={data.menu} />
                                </Card>
                                <Card height="40vh">
                                    <Diners diners={DINERS} />
                                </Card>
                            </Flex>
                        </Suspense>
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
