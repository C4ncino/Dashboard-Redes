import React from 'react';
import About from './About';
import data from './data.json';

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <About data={data.about} />
        </>
    );
}

export default Home;