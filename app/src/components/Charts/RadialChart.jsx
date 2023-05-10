import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RadialBar from './RadialBar';

const RadialChart = ({ url, reRender }) => {
    const [data, setData] = useState()

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
        });

    }, [reRender]);

    return (
        <>
            {data ? (
                <>
                    <h4 className='position-relative' style={{ top: "25px" }}>{data.name}</h4>
                    <div className='m-0'>
                        <RadialBar title={data.value} value={(100 / (data.max - data.min)) * data.value - (data.min * 100 / (data.max - data.min))} suffix={data.id - 1} />
                    </div>
                    <div className='position-relative w-100 text-center' style={{ bottom: "20px" }}>
                        <div className='w-50 border-top border-2 p-2 mx-auto' ></div>
                        <p>{data.description}</p>
                    </div>
                </>
            ) : (
                <h4>Esperando ...</h4>
            )}
        </>
    );
}

export default RadialChart;