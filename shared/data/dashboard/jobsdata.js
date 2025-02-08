
import dynamic from 'next/dynamic';
import React, { Component } from 'react';
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


//candidatePerformance
export class CandidatePerformance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [
                {
                    name: "Weekly",
                    type: "column",
                    data: [31, 11, 22, 37, 13, 22, 37, 21, 44, 22, 34, 25],
                },
                {
                    name: "Monthly",
                    type: "area",
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 23],
                },
                {
                    name: "Daily",
                    type: "line",
                    data: [30, 8, 20, 36, 15, 22, 37, 19, 44, 24, 32, 23],
                },
            ],
            options: {
                chart: {
                    height: 307,
                    type: "line",
                    stacked: false,
                    toolbar: {
                        show: false,
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 5,
                        left: 0,
                        blur: 3,
                        color: '#000',
                        opacity: 0.15
                    },
                },
                stroke: {
                    width: [0, 1, 1],
                    curve: "straight",
                },
                plotOptions: {
                    bar: {
                        columnWidth: "20%",
                    },
                },
                markers: {
                    size: [0, 0, 3],
                    colors: undefined,
                    strokeColors: "#000",
                    strokeOpacity: 0.6,
                    strokeDashArray: 0,
                    fillOpacity: 1,
                    discrete: [],
                    shape: "circle",
                    // radius: [0, 0, 2],
                    offsetX: 0,
                    offsetY: 0,
                    onClick: undefined,
                    onDblClick: undefined,
                    showNullDataPoints: true,
                    hover: {
                        size: undefined,
                        sizeOffset: 3
                    }
                },

                colors: ["rgba(255,255,255, 0.05)", "var(--primary005)", "var(--primary-color)"],

                fill: {
                    opacity: [1, 0.05, 1],
                    gradient: {
                        inverseColors: false,
                        shade: "light",
                        type: "vertical",
                        opacityFrom: 0.85,
                        opacityTo: 0.55,
                        stops: [0, 100, 100, 100],
                    },
                },
                labels: [
                    "01/01/2003",
                    "02/01/2003",
                    "03/01/2003",
                    "04/01/2003",
                    "05/01/2003",
                    "06/01/2003",
                    "07/01/2003",
                    "08/01/2003",
                    "09/01/2003",
                    "10/01/2003",
                    "11/01/2003",
                    "12/01/2003",
                ],

                grid: {
                    show: true,
                    borderColor: 'rgba(119, 119, 142, 0.08)',
                    strokeDashArray: 1,
                },

                legend: {
                    show: true,
                    position: "top",
                    horizontalAlign: "right",
                    fontSize: "11px",
                    fontFamily: "Helvetica, Arial",
                    fontWeight: 600,
                    labels: {
                        colors: '#74767c',
                    },
                    markers: {
                        width: 7,
                        height: 7,
                        strokeWidth: 0,
                        strokeColor: "#fff",
                        fillColors: undefined,
                        radius: 12,
                        customHTML: undefined,
                        onClick: undefined,
                        offsetX: 0,
                        offsetY: 0,
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    axisBorder: {
                        show: false,
                        color: 'rgba(119, 119, 142, 0.05)',
                    },
                    axisTicks: {
                        show: false,
                        color: 'rgba(119, 119, 142, 0.05)',
                    },
                    labels: {
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    }
                },
                yaxis: {
                    title: {
                        style: {
                            color: '#adb5be',
                            fontSize: '14px',
                            fontFamily: 'poppins, sans-serif',
                            fontWeight: 600,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                    },
                    labels: {
                        // formatter: function (y) {
                        //     return y.toFixed(0) + "";
                        // },
                        show: true,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    },
                    min: 0,
                },
            }
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" width={"100%"} height={307} />
        );
    }
}

//Candidateschart
export class Candidateschart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [1754, 1234],
            labels: ["Female", "Male"],
            options: {
                chart: {
                    height: 214,
                    type: 'donut',
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 5,
                        left: 0,
                        blur: 3,
                        color: '#525050',
                        opacity: 0.1
                    }
                },
                dataLabels: {
                    enabled: false,
                },

                legend: {
                    show: false,
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'round',
                    // colors: "#fff",
                    width: 0,
                    dashArray: 0,
                },
                plotOptions: {

                    pie: {
                        expandOnClick: false,
                        donut: {
                            size: '85%',
                            background: 'transparent',
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '20px',
                                    color: '#495057',
                                    offsetY: -4
                                },
                                value: {
                                    show: true,
                                    fontSize: '18px',
                                    color: undefined,
                                    offsetY: 8,
                                    formatter: function (val) {
                                        return val + "%";
                                    }
                                },
                                total: {
                                    show: true,
                                    showAlways: true,
                                    label: 'Total',
                                    fontSize: '22px',
                                    fontWeight: 600,
                                    color: '#495057',
                                }

                            }
                        }
                    }
                },
                colors: ["var(--primary-color)", "var(--primary04)"],
            }
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={"100%"} height={214} />
        );
    }
}

//Pending Request Approvals

export const Pending = [
    { id: 1, icon: "ri-global-line", title: ".Net Developer", experience: "02 Years", department: "Development", profile: "Good", vacancies: "12", date: "14.10.2020	", status: "Open", color: "primary", color1: "success" },
    { id: 2, icon: "ri-exchange-funds-line", title: " Graphic Designer", experience: "05 Years", department: "Designing", profile: "Excellent", vacancies: "24", date: "10.08.2020", status: "Closed", color: "secondary", color1: "danger" },
    { id: 3, icon: "ri-honor-of-kings-line", title: "Java Developer", experience: "0 Years", department: "Development", profile: "Excellent", vacancies: "08", date: "16.12.2020", status: "Open", color: "info", color1: "success" },
    { id: 4, icon: "ri-a-b  ", title: "QA Tester", experience: "04 Years", department: "Quality & Control", profile: "Good", vacancies: "26", date: "05.11.2020", status: "Open", color: "success", color1: "success" },
    { id: 5, icon: "ri-exchange-funds-line", title: "Graphic Designer", experience: "05 Years", department: "Designing", profile: "Excellent", vacancies: "24", date: "10.08.2020", status: "Closed", color: "danger", color1: "danger" },
    { id: 6, icon: "ri-android-line", title: "Android Developer", experience: "02 Years", department: "Development", profile: "Good", vacancies: "06", date: "05.12.2020", status: "Closed", color: "warning", color1: "danger" },
];
