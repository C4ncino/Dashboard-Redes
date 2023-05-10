import React from 'react';
import RadialCharts from '../Charts/RadialCharts';

const Live = () => {
    return (
        <>
            <div className='bg-light-subtle bg-opacity-10'>
                <h1 className='my-3 text-center'>Datos en tiempo Real</h1>
                <RadialCharts />
            </div>
        </>
    );
}

export default Live;