import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './animal.scss';

const Animal = () => {
    let animal = window.location.href.split("=")[1];
    console.log(animal);

    return (
        <div className='page-animal'>
            <h1>{animal}</h1>
        </div>
    );
};

export default Animal;