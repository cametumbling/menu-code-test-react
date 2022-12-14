import React, { useState } from 'react';
import { Button } from '../UI/Button';
import DishesList from './DishesList';

const Menu = (props) => {
    let menu = props.menu;
    const courses = Object.keys(menu).slice(1);

    const [selectedCourse, setSelectedCourse] = useState('starters');

    const setCourseHandler = (e) => {
        setSelectedCourse(e.target.value);
    };

    const courseButtons = courses.map((item) => (
        <li key={item}>
            <Button onClick={setCourseHandler} value={item}>
                {item}
            </Button>
        </li>
    ));

    return (
        <div>
            <ul>{courseButtons}</ul>
            <DishesList course={selectedCourse} items={menu} />
        </div>
    );
};

export default Menu;
