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

  return data.items.map(({ id, name, price }) => (
    <div key={id}>
      <h3>{name}</h3>
      {/* <img width="400" height="250" alt="location-reference" src={`${photo}`} /> */}
      <br />
      <b>About this item:</b>
      <p>{price}</p>
      <br />
    </div>
  ));
};

export default Menu;
