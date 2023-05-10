import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LineChart from './LineChart';

const LineCharts = () => {
    // const baseUrl = 'http://127.0.0.1:5000/api/sensores'
    const baseUrl = 'https://api-sensores-redes.onrender.com/api/sensores'
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            console.log(response.data)
            setData(response.data)
        })
    }, [])

    const formatDate = (date) => {
        const dateStr = date
        const d = new Date(dateStr)

        const formatedDate = (d.getDate() + 1) + '-' + (d.getMonth() + 1) + '-' + d.getFullYear()

        return formatedDate
    }

    return (
        <>
            {data.inf ? (
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
                                // yesterday={toString(sensor.inf[0].date)}
                                yesterday={formatDate(sensor.inf[0].day)}
                                lastData={sensor.inf[0].data.values}
                                today={formatDate(sensor.inf[0].day)}
                                // today={sensor.inf[0].data.times}
                                recentData={sensor.inf[0].data.values}
                                xData={sensor.inf[0].data.times}
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