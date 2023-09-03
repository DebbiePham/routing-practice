import React from 'react';
import { useParams } from 'react-router-dom';


const ColoredWordPage = () => {
    const {word, color, bgColor } = useParams();

    const style = {
        color: color || 'blue',
        backgroundColor: bgColor || 'red',
    };

    return (
            <div class=" text-center m-5">
                <h3 style={style}>The word is: {word}</h3>
            </div>
    );
}

export default ColoredWordPage;