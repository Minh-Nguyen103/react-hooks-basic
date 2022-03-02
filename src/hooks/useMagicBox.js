import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

function randomColor(currentColor) {
    const COLOR_LIST = ['red', 'green', 'yellow'];
    const indexCurrentColor = COLOR_LIST.indexOf(currentColor);
    let indexRandomColor = indexCurrentColor

    while(indexCurrentColor === indexRandomColor) {
        indexRandomColor = Math.trunc(Math.random() * COLOR_LIST.length);

    }

    return COLOR_LIST[indexRandomColor];


}


function useMagicBox() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');

    useEffect(() => {
        const colorInterval = setInterval(() => {        
            const newColor = randomColor(colorRef.current);
            colorRef.current = newColor;

            setColor(newColor);
        }, 1000);

        return ()=> {
            clearInterval(colorInterval);
        }
    }, [])
    return color;
}

export default useMagicBox;