import React, { Component, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


export const RealtimeChart = () => {

    const [chartData, setChartData] = useState({
        series: [{
            name: 'population',
            data: [8, 5, 6, 4, 3, 8, 5, 6, 4, 3, 8, 5, 6, 4, 3]
        }],
        options: {
            chart: {
                id: 'realtime',
                height: 300,
                type: 'bar',
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                        speed: 500
                    }
                },
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: "30%",
                    borderRadius: 4,
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                // linecap:'rounded'

            },
            colors: ["var(--primary-color)"],
            markers: {
                size: 0
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    type: "vertical",
                    shadeIntensity: 0.5,
                    inverseColors: false,
                    gradientToColors: ["rgb(0, 227, 210)"],
                    opacityFrom: 1,
                    opacityTo: 0,
                    stops: [0, 90, 100]
                }
            },
            // xaxis: {
            //   type: 'datetime',
            //   labels: {
            //     show: true,
            //   },
            //   axisBorder: {
            //     show: false,
            //   },
            //   axisTicks: {
            //     show: false,
            //   },
            //   crosshairs: {
            //     show: false,
            //   }
            // },
            yaxis: {
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                crosshairs: {
                    show: false,
                }
            },
            legend: {
                show: false
            },

        },
    });

    const getRandomNumber = (_min, _max) => {
        // implementation of getRandomNumber function
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const newArray = [];
            for (let i = 0; i < 5; i++) {
                newArray.push(getRandomNumber(3, 8));
            }
            setChartData((prevData) => ({
                ...prevData,
                series: [{
                    ...prevData.series[0],
                    data: newArray
                }]
            }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <ReactApexChart options={chartData.options} series={chartData.series} type="radar" height={268} />
    );
};



//VIEWS BY BROWSER
export class Viewbysource extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Call',
                data: [80, 50, 30, 40, 100, 20],
            }, {
                name: 'Email',
                data: [20, 30, 40, 80, 20, 80],
            }, {
                name: 'Website',
                data: [44, 76, 78, 13, 43, 10],
            }],
            options: {
                chart: {
                    height: 268,
                    type: 'radar',
                    dropShadow: {
                        enabled: true,
                        blur: 1,
                        left: 1,
                        top: 1
                    }
                },
                plotOptions: {
                    radar: {
                        size: 80,
                        polygons: {
                            fill: {
                                colors: ['var(--primary005)', 'var(--primary01)']
                            },
                        }
                    }
                },
                title: {
                    align: 'left',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
                colors: ["#00ffbe", "#48f768", "#00e3d2"],
                stroke: {
                    width: 1.5
                },
                fill: {
                    opacity: 0.05
                },
                markers: {
                    size: 0
                },
                legend: {
                    show: true,
                    fontSize: "12px",
                    position: 'bottom',
                    horizontalAlign: 'center',
                    fontWeight: 500,
                    offsetX: 0,
                    offsetY: 10,
                    labels: {
                        colors: '#9ba5b7',
                    },
                    markers: {
                        width: 7,
                        height: 7,
                        strokeWidth: 0,
                        strokeColor: '#fff',
                        fillColors: undefined,
                        radius: 12,
                        offsetX: 0,
                        offsetY: 0
                    },
                },
                xaxis: {
                    categories: ['2019', '2020', '2021', '2022', '2023', '2024']
                },
                yaxis: {
                    tickAmount: 7,
                    labels: {
                        formatter: function (val, i) {
                            if (i % 5 === 0) {
                                return val;
                            }
                        }
                    }
                }
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="radar" width={"100%"} height={268} />

        );
    }
}

//users-repor

export class Userreport extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        series: [
          {
            name: "Actual Spending",
            type: "bar",
            data: [
              { x: "Relocate", y: 0 },
              { x: "Techcrew", y: 0.02 },
              { x: "Boost", y: 3.22 },
              { x: "Empowering Accelerators", y: 7.25 },
              { x: "Next Era", y: 9.10 },
              { x: "MVP Lab", y: 10.75 },
              { x: "Lendtech", y: 100.00 },
            ],
          },
          {
            name: "Budgeted Spending",
            type: "bar",
            data: [
              { x: "Relocate", y: 50.00 },
              { x: "Techcrew", y: 11.00 },
              { x: "Boost", y: 10.00 },
              { x: "Empowering Accelerators", y: 16.00 },
              { x: "Next Era", y: 28.00 },
              { x: "MVP Lab", y: 30.00 },
              { x: "Lendtech", y: 200.00 },
            ],
          },
        ],
        options: {
          chart: {
            toolbar: {
              show: true,
            },
            height: 370,
            type: "bar",
            events: {
              mounted: (chart) => {
                chart.windowResizeHandler();
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: [1.5, 1.5],
            show: true,
            curve: ["smooth", "smooth"],
          },
          grid: {
            borderColor: "#f3f3f3",
            strokeDashArray: 3,
          },
          xaxis: {
            labels: {
              style: {
                fontSize: "12px",
                fontWeight: "bold",
              },
            },
            axisBorder: {
              color: "rgba(119, 119, 142, 0.05)",
            },
          },
          yaxis: {
            labels: {
              style: {
                fontSize: "12px",
                fontWeight: "bold",
              },
            },
          },
          legend: {
            show: true,
            position: "top",
          },
          markers: {
            size: 0,
          },
          colors: ["var(--primary-color)", "rgb(0, 227, 210)"],
          plotOptions: {
            bar: {
              columnWidth: "35%",
              borderRadius: 0,
              horizontal: true, // Horizontal bar chart
              barHeight: "70%", // Adjusting bar height for better visibility
            },
          },
        },
      };
    }
  
    render() {
      return (
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width={"100%"}
          height={357}
        />
      );
    }
  }
  





//visitors-source
export class Visitorsource extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                // Organic Search
                {
                    name: 'Organic Search',
                    data: [
                        {
                            x: '2023',
                            y: [
                                new Date(200, 2, 4).getTime(),
                                new Date(280, 2, 4).getTime()
                            ]
                        },
                        {
                            x: '2022',
                            y: [
                                new Date(180, 3, 21).getTime(),
                                new Date(289, 2, 4).getTime()
                            ]
                        }
                    ]
                },
                // Direct
                {
                    name: 'Direct',
                    data: [
                        {
                            x: '2023',
                            y: [
                                new Date(280, 2, 4).getTime(),
                                new Date(390, 2, 4).getTime()
                            ]
                        },
                        {
                            x: '2022',
                            y: [
                                new Date(289, 3, 21).getTime(),
                                new Date(420, 2, 4).getTime()
                            ]
                        }
                    ]
                },
                // Referral
                {
                    name: 'Referral',
                    data: [
                        {
                            x: '2023',
                            y: [
                                new Date(390, 2, 4).getTime(),
                                new Date(560, 2, 4).getTime()
                            ]
                        },
                        {
                            x: '2022',
                            y: [
                                new Date(420, 3, 21).getTime(),
                                new Date(590, 2, 4).getTime()
                            ]
                        }
                    ]
                },
                // Social
                {
                    name: 'Social',
                    data: [
                        {
                            x: '2023',
                            y: [
                                new Date(560, 2, 4).getTime(),
                                new Date(900, 2, 4).getTime()
                            ]
                        },
                        {
                            x: '2022',
                            y: [
                                new Date(590, 3, 21).getTime(),
                                new Date(780, 2, 4).getTime()
                            ]
                        }
                    ]
                },
                // Email
                {
                    name: 'Email',
                    data: [
                        {
                            x: '2023',
                            y: [
                                new Date(900, 2, 4).getTime(),
                                new Date(960, 2, 4).getTime()
                            ]
                        },
                        {
                            x: '2022',
                            y: [
                                new Date(780, 3, 21).getTime(),
                                new Date(1020, 2, 4).getTime()
                            ]
                        }
                    ]
                },
                // Paid Search
                {
                    name: 'Paid Search',
                    data: [
                        {
                            x: '2023',
                            y: [
                                new Date(960, 2, 4).getTime(),
                                new Date(1240, 2, 4).getTime()
                            ]
                        },
                        {
                            x: '2022',
                            y: [
                                new Date(1020, 3, 21).getTime(),
                                new Date(1104, 2, 4).getTime()
                            ]
                        }
                    ]
                },
            ],
            options: {
                chart: {
                    height: 300,
                    type: 'rangeBar',
                    toolbar: {
                        show: false,
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        barHeight: '25%',
                        rangeBarGroupRows: true
                    }
                },
                stroke: {
                    show: true,
                    colors: ["transparent"],
                    width: 10,
                },
                colors: [
                    "var(--primary-color)", "var(--primary08)", "var(--primary06)", "var(--primary04)", "var(--primary02)",
                    "var(--primary005)"
                ],
                grid: {
                    borderColor: '#f2f5f7',
                },
                xaxis: {
                    type: 'datetime',
                    labels: {
                        show: false,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    }
                },
                yaxis: {
                    labels: {
                        show: true,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                    }
                },
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                    height: 50,
                    offsetX: 0,
                    offsetY: 20,
                    markers: {
                        width: 5,
                        height: 5
                    },
                },
            }
        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="rangeBar" width={"100%"} height={300} />
        );
    }
}

//revenue
export class Revenue extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'This Week',
                data: [44, 42, 57, 86, 58, 55, 70],
            }, {
                name: 'Last Week',
                data: [34, 22, 37, 56, 21, 35, 60],
            }],
            options: {
                chart: {
                    type: 'area',
                    height: 268,
                    toolbar: {
                        show: false,
                    }
                },
                grid: {
                    borderColor: '#f1f1f1',
                    strokeDashArray: 3
                },
                colors: ["var(--primary-color)", "rgb(0, 227, 210)"],
                plotOptions: {
                    bar: {
                        colors: {
                            ranges: [{
                                from: -100,
                                to: -46,
                                color: '#ebeff5'
                            }, {
                                from: -45,
                                to: 0,
                                color: '#ebeff5'
                            }]
                        },
                        columnWidth: '25%',
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    show: true,
                    width: 2,
                    curve: "straight",
                },
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                    offsetX: 0,
                    offsetY: 15,
                    height: 30,
                    markers: {
                        width: 5,
                        height: 5
                    },
                },
                yaxis: {
                    title: {
                        style: {
                            color: '#adb5be',
                            fontSize: '14px',
                            fontFamily: 'Rajdhani',
                            fontWeight: 600,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                    },
                    labels: {
                        formatter: function (y) {
                            return y.toFixed(0) + "";
                        }
                    }
                },
                xaxis: {
                    type: 'category',
                    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    axisBorder: {
                        show: true,
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0,
                    },
                    axisTicks: {
                        show: true,
                        borderType: 'solid',
                        color: 'rgba(119, 119, 142, 0.05)',
                        // width: 6,
                        offsetX: 0,
                        offsetY: 0
                    },
                    labels: {
                        rotate: -90
                    }
                }
            }
        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="area" width={"100%"} height={278} />
        );
    }
}
//SESSIONS BY DEVICE
export class SessionSource extends Component {
    constructor(props) {
        super(props);

        const local = 691;
        const global = 90;
        const total = local + global;

        this.state = {
            series: [local, global], // Local & Global Data
            labels: ["Local", "Global"], // Labels
            options: {
                chart: {
                    height: 312,
                    type: 'donut',
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    show: true,
                    position: 'bottom',
                    horizontalAlign: 'center',
                    markers: {
                        width: 8,
                        height: 8,
                        radius: 12,
                    },
                    formatter: (seriesName, opts) => {
                        const index = opts.seriesIndex;
                        return `<b style="font-size:18px;">${this.state.labels[index]} - ${this.state.series[index]}</b>`;

                    }
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'round',
                    width: 0,
                },
                plotOptions: {
                    pie: {
                        expandOnClick: false,
                        donut: {
                            size: '90%',
                            background: 'transparent',
                            labels: {
                                show: true,
                                name: {
                                    show: true, // Show "Total" inside circle
                                    fontSize: '18px',
                                    color: '#fff',
                                    offsetY: -4
                                },
                                value: {
                                    show: true, // Show Total value
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    color: '#fff',
                                    offsetY: 8,
                                    formatter: function () {
                                        return total;
                                    }
                                },
                                total: {
                                    show: true,
                                    showAlways: true,
                                    label: 'Total',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                    color: '#fff',
                                    formatter: function () {
                                        return total;
                                    }
                                }
                            }
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    custom: ({ seriesIndex, w }) => {
                        return `<div style="padding: 5px; background: #000; color: #fff; border-radius: 4px;">
                            <b>${w.globals.labels[seriesIndex]}</b>: ${w.globals.series[seriesIndex]}
                        </div>`;
                    }
                },
                // colors: ["var(--primary-color)", "var(--primary06)"], // Maintain existing colors
                colors: ["#007bff", "#a855f7"], // ✅ Blue & Yellow Colors Applied
            }
        };
    }

    render() {
        return (
            <ReactApexChart 
                options={this.state.options} 
                series={this.state.series} 
                type="donut" 
                width={"100%"} 
                height={350} 
            />
        );
    }
}



//VISITORS BY CHANNEL

export const Visitors = [
    { id: 1, icon: "search-2", data: "Organic Search", sessions: "782", bounce: "32.09%", avg: "0 hrs : 0 mins : 32 secs", target: "578", pages: "1.5", color: "primary" },
    { id: 2, icon: "globe", data: "Direct", sessions: "882", bounce: "39.38%", avg: "0 hrs : 2 mins : 45 secs	", target: "278", pages: "3.2", color: "secondary" },
    { id: 3, icon: "share-forward", data: "Referral", sessions: "322", bounce: "22.67%", avg: "0 hrs : 38 mins : 28 secs", target: "782", pages: "1.4", color: "danger" },
    { id: 4, icon: "reactjs", data: "Social", sessions: "389", bounce: "25.11%", avg: "0 hrs : 12 mins : 29 secs	", target: "622", pages: "1.6", color: "warning" },
    { id: 5, icon: "mail", data: "Email", sessions: "378", bounce: "23.79%", avg: "0 hrs : 14 mins : 27 secs	", target: "142", pages: "2.5", color: "success" },
    { id: 6, icon: "bank-card", data: "Paid Search", sessions: "488", bounce: "28.77%", avg: "0 hrs : 16 mins : 28 secs	", target: "178", pages: "2.9", color: "info" },
];
