import React from 'react';
import { useParams } from 'react-router-dom';


const WordPage = () => {
    const {word} = useParams();
    return (
        <div class="container p-5">
            <div class="card text-center">
                <h3>The word is: {word}</h3>
            </div>
        </div>
    );
}

export default WordPage;