import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

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

const Menu = () => {
    const { loading, error, data } = useQuery(GET_MENU);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    if (data) return <pre>{JSON.stringify({ data }, undefined, 2)}</pre>;

    return <></>;
};

export default Menu;
