import React from 'react';
import { useParams } from 'react-router-dom';


const NumberPage = () => {
    const {number} = useParams();

    return (
        <div class="container p-5">
            <div class="card text-center">
                <h3>The number is : {number} </h3>
            </div>
        </div>
    );
}

export default NumberPage;