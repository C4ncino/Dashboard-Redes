import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = ({ title, height, width }) => {

    const config = {

        series: [{
            name: 'Sales',
            data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
        }, {
            name: 'Sales',
            data: [5, 8, 1, 8, 30, 15, 20, 6, 2, 8, 9, 9, 3, 4, 7, 21, 27, 25]
        }
        ],
        options: {
            chart: {
                height: height,
                width: width,
                type: 'line',
            },
            stroke: {
                width: 5,
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
                tickAmount: 10,
                labels: {
                    formatter: function (value, timestamp, opts) {
                        return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                    }
                }
            },
            title: {
                text: title,
                align: 'left',
                style: {
                    fontSize: "16px",
                    color: '#666'
                }
            },
            fill: {
                colors: ['#0400ff'],
                type: 'solid',
            },
            yaxis: {
                min: -10,
                max: 40
            }
        },


    };



    return (
        <div id="chart">
            <ReactApexChart
                options={config.options}
                series={config.series}
                type={config.options.chart.type}
                height={config.options.chart.height}
                width={config.options.chart.width}
            />
        </div>
    )

}

export default LineChart;