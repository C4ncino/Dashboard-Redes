import React from 'react';
import ReactApexChart from 'react-apexcharts';

const RadialBar = ({title, per}) => {
    
    const config = {
      series: [per],
      
      options: {
          labels: [''],
          chart: {
            height: 350,
            type: 'radialBar',
            fontFamily: 'Confortaa'
          },
          fill: {
            type: 'image',
            image:{
              src : ['/images/Degradado.png'],
              width : 280,
              height : 245
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 135,
              
              dataLabels: {
                name: {
                  fontSize: '26px',
                  color: undefined,
                  offsetY: 120
                },
                value: {
                  offsetY: 0,
                  fontSize: '26px',
                  color: undefined,
                  formatter: function (val) {
                    return val + "/ 100";
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
        <>
            <ReactApexChart 
                options={config.options} 
                series={config.series} 
                type={config.options.chart.type}
                height={config.options.chart.height}
                width={config.options.chart.width}
            />
        </>
    );
}
 
export default RadialBar;