import React from 'react';
import RadialBar from './RadialBar';
import LineChart from './LineChart';

const Charts = () => {

    return (
        <>
            <div className='d-flex flex-row flex-wrap g-4'>
                {/* <RadialBar title='' value={100} suffix='cm' /> */}
                <LineChart title='[Inserte un titulo]' width={500} height={300} xtitle='hola' />
            </div>
        </>
    );
}

export default Charts;