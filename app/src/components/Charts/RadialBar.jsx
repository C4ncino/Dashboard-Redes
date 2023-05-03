import React from 'react';
import ReactApexChart from 'react-apexcharts';

const RadialBar = ({ title, value, height = 350, suffix = '' }) => {

  const config = {
    series: [value],

    options: {
      labels: [title],
      chart: {
        height: height,
        width: height * 0.8,
        type: 'radialBar',
        fontFamily: 'Confortaa'
      },
      fill: {
        type: 'image',
        image: {
          src: ['/images/Degradado.png'],
          width: height * 0.83,
          height: height * 0.72
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,

          dataLabels: {
            name: {
              fontSize: '1.5em',
              color: undefined,
              offsetY: height * 0.3
            },
            value: {
              offsetY: 0,
              fontSize: '2em',
              color: undefined,
              formatter: function (val) {
                return val + suffix;
              }
            }
          }
        }
      },
      stroke: {
        dashArray: 6
      },
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
  );
}

export default RadialBar;