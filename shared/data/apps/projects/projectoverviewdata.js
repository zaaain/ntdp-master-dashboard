
import dynamic from 'next/dynamic';
import React from 'react';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export class Projectstatus extends React.Component{
  constructor(props) {
    super(props);

    this.state = {

      series: [70],
      options: {
        chart: {

          height: 110,
          width: 100,
          type: "radialBar",
        },
        colors: ["#00e3d2"],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "50%",
              background: "#fff"
            },
            dataLabels: {
              name: {
                offsetY: 5,
                color: "#00e3d2",
                fontSize: "10px",
                fontWeight: "400",
                show: true
              },
              value: {
                show: false,
              },
              // stroke: {
              //   lineCap: "round"
              // },
            }
          }
        },

        labels: ['7/10']
      }

    };
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={110} width={100} />
    );
  }
}