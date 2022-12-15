import React from 'react';
import Menu from '../components/Menu/Menu';
import { fireEvent, screen, render } from '@testing-library/react';

const mock = {
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
};

describe('Menu', () => {
    it('displays correct courses when course button clicked', async () => {
        render(<Menu menu={mock} />);

        const clickedButton = screen.getByRole('button', { name: /Mains/i });
        fireEvent.click(clickedButton);
        const dishButton = screen.getByRole('button', { name: /Meatballs/i });
        expect(dishButton).toHaveTextContent('Meatballs');
    });
});
