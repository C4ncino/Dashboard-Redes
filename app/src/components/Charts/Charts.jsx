import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RadialBar from './RadialBar';
import LineChart from './LineChart';

const Charts = () => {
    const url = 'https://api-sensores-redes.onrender.com/api/sensores'
    const [data, setData] = useState([])

    useEffect(() => {
        console.log("Getting Data...")

        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
            console.log("Done")
        });

    }, []);

    return (
        <>
            <div className='d-flex flex-row flex-wrap g-4 w-100'>
                <RadialBar title='' value={100} suffix='cm' />
                <LineChart title='[Inserte un titulo]' width={500} height={300} xtitle='' ytitle='' />
            </div>
        </>
    );
}

export default Charts;