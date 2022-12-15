import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { gql } from '@apollo/client';
import App from '../App';
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

const mocks = [
    {
        request: {
            query: GET_MENU,
        },
        result: {
            menu: {
                starters: [
                    {
                        id: 1,
                        name: 'Soup',
                        price: 3,
                    },
                    {
                        id: 2,
                        name: 'Pâté',
                        price: 5,
                    },
                    {
                        id: 3,
                        name: 'Bruschetta',
                        price: 4.5,
                    },
                    {
                        id: 4,
                        name: 'Prawn cocktail',
                        price: 6,
                    },
                ],
                mains: [
                    {
                        id: 5,
                        name: 'Steak',
                        price: 18,
                    },
                    {
                        id: 6,
                        name: 'Meatballs',
                        price: 11.5,
                    },
                    {
                        id: 7,
                        name: 'Salmon fillet',
                        price: 14,
                    },
                    {
                        id: 8,
                        name: 'Vegetarian lasagna',
                        price: 12,
                    },
                ],
                desserts: [
                    {
                        id: 9,
                        name: 'Sticky toffee',
                        price: 18,
                    },
                    {
                        id: 10,
                        name: 'Tiramisu',
                        price: 4.5,
                    },
                    {
                        id: 11,
                        name: 'Cheesecake',
                        price: 4,
                    },
                    {
                        id: 12,
                        name: 'Ice cream',
                        price: 3.5,
                    },
                ],
            },
        },
    },
];

it('renders without error', async () => {
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <App />
        </MockedProvider>
    );
    expect(await screen.getByTestId('loading-spinner')).toBeInTheDocument();
});
