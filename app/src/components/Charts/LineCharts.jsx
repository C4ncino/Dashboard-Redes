import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LineChart from './LineChart';

const LineCharts = () => {
    const baseUrl = 'https://api-sensores-redes.onrender.com/api/sensores'
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            console.log(response.data)
            setData(response.data)
        })
    }, [])

    return (
        <>
            {data ? (
                <div className='d-flex flex-row flex-wrap justify-content-center mx-3' style={{ gap: '2rem' }}>
                    {data.map((sensor, i) =>
                        <div key={i} className=''>
                            <h3 className='mx-auto text-center'>{sensor.name}</h3>
                            <LineChart
                                title=''
                                height={250}
                                width={360}
                                xtitle='Tiempo'
                                ytitle={sensor.description + ' en ' + sensor.suffix}
                                recentData={[]}
                                lastData={[]}
                                xData={[]}
                            />
                        </div>
                    )}
                </div>
            ) : (
                <h3 className='pt-3'>Esperando al Servidor ...</h3>
            )}
        </>
    );
}

export default LineCharts;