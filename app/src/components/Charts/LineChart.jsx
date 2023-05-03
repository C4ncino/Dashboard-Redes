import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = ({ title = '', height, width, xtitle = '', ytitle = '' }) => {

    const config = {

        series: [{
            name: 'Sales',
            data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
        }, {
            name: 'Sales',
            data: [5, 8, 1, 8, 22, 15, 20, 6, 2, 8, 9, 9, 3, 4, 7, 21, 27, 25]
        }, {
            name: 'Sales',
            data: [10, 11, 12, 13, 15, 20, 21, 24, 6, 5, 3, 2, 7, 4, 7, 21, 27, 25]
        }
        ],
        options: {
            chart: {
                height: height,
                width: width,
                type: 'line',
            },
            stroke: {
                width: 4,
                curve: 'smooth',
                // colors: ['#ff0', '#00F', '#0F0']
            },
            xaxis: {
                type: 'datetime',
                categories: ['1/11/2000 15:05', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
                labels: {
                    style: {
                        fontFamily: 'Confortaa',
                    },
                    formatter: function (value, timestamp, opts) {
                        return opts.dateFormatter(new Date(timestamp), 'hh:mm')
                    }
                },
                title: {
                    text: xtitle,
                    style: {
                        fontFamily: 'Confortaa',
                    },
                },
            },
            yaxis: {
                min: -1,
                max: 35,
                labels: {
                    style: {
                        fontFamily: 'Confortaa',
                    },
                },
                title: {
                    text: ytitle,
                    style: {
                        fontFamily: 'Confortaa',
                    },
                },
            },
            title: {
                text: title,
                align: 'left',
                style: {
                    fontSize: "16px",
                    fontFamily: 'Confortaa',
                    color: '#666'
                }
            },
            theme: {
                mode: 'light',
                // palette: 'palette6',
                monochrome: {
                    enabled: true,
                    color: '#0095ff',
                    shadeTo: 'dark',
                    shadeIntensity: 0.7
                },
            },
            legend: {
                fontFamily: 'Confortaa',
            },
            noData: {
                text: 'No Data',
                style: {
                    fontSize: '1.5em',
                    fontFamily: 'Confortaa'
                }
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