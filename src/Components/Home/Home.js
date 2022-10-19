import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Carousels from './Carousels';

const Home = () => {
    return (
        <div>
            <Carousels></Carousels>
        </div>
    );
};

export default Home;