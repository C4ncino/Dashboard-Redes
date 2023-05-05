import React, { useEffect, useState } from 'react';
import RadialBar from './RadialBar';
import axios from 'axios';
import RadialChart from './RadialChart';

const RadialCharts = () => {
    // const baseUrl = 'http://127.0.0.1:5000/api/sensores/'
    const baseUrl = 'https://api-sensores-redes.onrender.com/api/sensores/'
    const urlsData = ['1', '2', '3', '4', '5', '6']
    const urlDate = baseUrl + 'last'

    const [date, setDate] = useState()

    useEffect(() => {
        axios.get(urlDate).then((response) => {
            setDate(response.data)
        });
    }, []);

    useEffect(() => {
    }, [date]);


    return (
        <div>
            {date ? (
                <h3 className='text-center py-3 m-0'>
                    Fecha Actual: <b className='text-primary'>{date.date + ' '}</b>
                    Horario Actual: <b className='text-primary'>{date.hour}</b>
                </h3>
            ) : (
                <h3 className='text-center py-3 m-0'>
                    Haciendo Peticion al Servidor ...
                </h3>
            )}
            <div className='d-flex flex-wrap justify-content-center'>
                {urlsData.map((url, i) =>
                    <div key={i} className='d-flex flex-column justify-content-center align-items-center border border-0 mx-3 px-3 my-3' style={{ height: "375px" }}>
                        <RadialChart url={baseUrl + url} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default RadialCharts;