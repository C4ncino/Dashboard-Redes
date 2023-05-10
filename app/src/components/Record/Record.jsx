import React from 'react';
import LineCharts from '../Charts/LineCharts';

const Record = () => {
    return (
        <>

            <div className='bg-light-subtle bg-opacity-10'>
                <h1 className='m-3 text-center'> Historial </h1>
                <LineCharts />
            </div>
        </>
    );
}

export default Record;