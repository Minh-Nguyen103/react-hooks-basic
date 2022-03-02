import React, { useState } from 'react';
import './styles.scss';

ColorBox.propTypes = {

};



function getRandomColor() {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 5);

    return COLOR_LIST[randomIndex];

}

function ColorBox(props) {
    const [color, setColor] = useState(() => {
        return localStorage.getItem('color') || 'deeppink';
    });

    const handleBoxClick = () => {
        const newColor = getRandomColor();


        setColor(newColor);
        localStorage.setItem("color", newColor);
    }

    return (
        <div
            className='color-box'
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >

            COLOR BOX
        </div>
    );
}

export default ColorBox;