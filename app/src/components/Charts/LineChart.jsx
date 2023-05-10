import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = ({ title = '', height, width, xtitle = '', ytitle = '', recentData, lastData, xData, today, yesterday, min, max }) => {

    const config = {

        series: [
            {
                name: today,
                data: recentData
            }, {
                name: yesterday,
                data: lastData
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
                categories: xData,
                labels: {
                    style: {
                        fontFamily: 'Confortaa',
                    },
                    formatter: function (value, timestamp, opts) {
                        return opts.dateFormatter(new Date(timestamp), 'mm:ss')
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
                min: 10,
                max: 100,
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
        <ReactApexChart
            options={config.options}
            series={config.series}
            type={config.options.chart.type}
            height={config.options.chart.height}
            width={config.options.chart.width}
        />
    )

}

export default LineChart;