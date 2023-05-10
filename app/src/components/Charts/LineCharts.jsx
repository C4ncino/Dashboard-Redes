import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LineChart from './LineChart';
import dataS from './lineChartsData.json';

const LineCharts = () => {
    // const baseUrl = 'http://127.0.0.1:5000/api/sensores'
    const baseUrl = 'https://api-sensores-redes.onrender.com/api/sensores'
    const [data, setData] = useState([])
    data.length
    useEffect(() => {
        // axios.get(baseUrl).then((response) => {
        //     console.log(response.data)
        //     setData(response.data)
        // })

        setData(dataS)
        console.log(dataS)
    }, [])

    const formatDate = (date) => {
        const dateStr = date
        const d = new Date(dateStr)

        const formatedDate = (d.getDate() + 1) + '-' + (d.getMonth() + 1) + '-' + d.getFullYear()

        return formatedDate
    }

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

                                max={sensor.max}
                                min={sensor.min}

                                xtitle='Tiempo'
                                ytitle={sensor.description + ' en ' + sensor.suffix}

                                yesterday={formatDate(sensor.inf[sensor.inf.length - 2].day)}
                                lastData={sensor.inf[sensor.inf.length - 2].data.values}

                                today={formatDate(sensor.inf[sensor.inf.length - 1].day)}
                                recentData={sensor.inf[sensor.inf.length - 1].data.values}

                                xData={sensor.inf[sensor.inf.length - 1].data.times}
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