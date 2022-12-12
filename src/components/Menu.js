import React, { useState } from 'react';
import DishesList from './Menu/DishesList';

const Menu = (props) => {
    let menu = props.menu;

    const [selectedCourse, setSelectedCourse] = useState('starters');

    const setCourseHandler = (e) => {
        setSelectedCourse(e.target.value);
    };

    return (
        <div>
            <button onClick={setCourseHandler} value="starters">
                Starters
            </button>
            <button onClick={setCourseHandler} value="mains">
                Mains
            </button>
            <button onClick={setCourseHandler} value="desserts">
                Desserts
            </button>
            <DishesList course={selectedCourse} items={menu} />
        </div>
    );
};

export default Menu;
