import React, { useState } from 'react';
import { Button } from '../UI/Button';
import { POS } from '../UI/POS';
import DishesList from './DishesList';
import { useTheme } from 'styled-components';

const Menu = (props) => {
    const theme = useTheme();
    let menu = props.menu;
    const courses = Object.keys(menu).slice(1);
    const [selectedCourse, setSelectedCourse] = useState('starters');

    const setCourseHandler = (e) => {
        setSelectedCourse(e.target.value);
    };
    const courseButtons = courses.map((item) => (
        <li key={item}>
            {selectedCourse === item ? (
                <Button course onClick={setCourseHandler} value={item} bg={theme.colors.secondary}>
                    {item}
                </Button>
            ) : (
                <Button course onClick={setCourseHandler} value={item}>
                    {item}
                </Button>
            )}
        </li>
    ));

    return (
        <div>
            <h3>Menu</h3>
            <POS>
                <ul>{courseButtons}</ul>
            </POS>
            <POS>
                <DishesList course={selectedCourse} items={menu} />
            </POS>
        </div>
    );
};

export default Menu;
