

import dynamic from 'next/dynamic';
import React, { Component} from 'react';
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


//New Event
export class NewEvent extends Component{
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [14, 12, 17, 16, 18, 15, 18, 23, 28, 44, 40, 34, 34, 22, 37, 46, 21, 35, 40, 34, 46, 55, 62, 55, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35]
            }],
            options: {
                chart: {
                    type: 'area',
                    height: 50,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 0,
                        left: 0,
                        blur: 1,
                        color: '#fff',
                        opacity: 0.05
                    }
                },
                stroke: {
                    show: true,
                    curve: 'straight',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1,
                    dashArray: 0,
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.4,
                        opacityTo: 0.1,
                        stops: [0, 90, 100],
                        colorStops: [
                            [
                                {
                                    offset: 0,
                                    color: "var(--primary02)",
                                    opacity: 1
                                },
                                {
                                    offset: 75,
                                    color: "var(--primary02)",
                                    opacity: 1
                                },
                                {
                                    offset: 100,
                                    color: "var(--primary02)",
                                    opacity: 1
                                }
                            ]
                        ]
                    }
                },
                yaxis: {
                    min: 0,
                    show: false
                },
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                },
                colors: ["var(--primary-color)"],
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="area" width={324} height={50} />

        );
    }
}

//Completed Events
export class Completedissues extends Component{
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [14, 12, 17, 16, 18, 15, 18, 23, 28, 44, 40, 34, 34, 22, 37, 46, 21, 35, 40, 34, 46, 55, 62, 55, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 50,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 0,
                        left: 0,
                        blur: 1,
                        color: '#fff',
                        opacity: 0.05
                    }
                },
                stroke: {
                    show: true,
                    curve: 'straight',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1,
                    dashArray: 0,
                },
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                },
                colors: ["var(--primary-color)"],
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" width={324} height={50} />

        );
    }
}

//Pending Events
export class PendingEvents extends Component{
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [14, 12, 17, 16, 18, 15, 18, 23, 28, 44, 40, 34, 34, 22, 37, 46, 21, 35, 40, 34, 46, 55, 62, 55, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35]
            }],
            options: {
                chart: {
                    type: 'line',
                    height: 50,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 0,
                        left: 0,
                        blur: 1,
                        color: '#fff',
                        opacity: 0.05
                    }
                },
                stroke: {
                    show: true,
                    curve: 'straight',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1,
                    dashArray: 0,
                },
                fill: {
                    type: 'solid',
                },
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                },
                colors: ["var(--primary-color)"],
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" width={324} height={50} />

        );
    }
}

//Unsolved Events
export class UnsolvedEvents extends Component{
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [14, 12, 17, 16, 18, 15, 18, 23, 28, 44, 40, 34, 34, 22, 37, 46, 21, 35, 40, 34, 46, 55, 62, 55, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35]
            }],
            options: {
                chart: {
                    type: 'area',
                    height: 50,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 0,
                        left: 0,
                        blur: 1,
                        color: '#fff',
                        opacity: 0.05
                    }
                },
                stroke: {
                    show: true,
                    curve: 'straight',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1,
                    dashArray: 0,
                },
                fill: {
                    type: 'solid',
                },
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                },
                colors: ["var(--primary-color)"],
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="area" width={324} height={50} />

        );
    }
}

//Safe Zone
export class SafeZone extends Component{
    constructor(props) {
        super(props);

        this.state = {
            series: [44, 55, 13, 43],
            options: {
                chart: {
                    height: 80,
                    width: 80,
                    type: "donut",
                },
                colors: ["rgba(255, 255, 255, 0.1)", "rgb(72, 247, 104)", "rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.1)"],
                labels: ["Team A", "Team B", "Team C", "Team D"],
                legend: {
                    show: false,
                    position: "bottom",
                },
                dataLabels: {
                    enabled: false,
                    dropShadow: {
                        enabled: false,
                    },
                },
                tooltip: {
                    enabled: false,
                }
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={80} height={80} />

        );
    }
}

//Danger Zone
export class DangerZone extends Component{
    constructor(props) {
        super(props);

        this.state = {
            series: [44, 55, 13, 43],
            options: {
                chart: {
                    height: 80,
                    width: 80,
                    type: "donut",
                },
                colors: ["rgb(253, 77, 77)", "rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.1)"],
                labels: ["Team A", "Team B", "Team C", "Team D"],
                legend: {
                    show: false,
                    position: "bottom",
                },
                dataLabels: {
                    enabled: false,
                    dropShadow: {
                        enabled: false,
                    },
                },
                tooltip: {
                    enabled: false,
                }
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={80} height={80} />

        );
    }
}

//Distance Covered
export class DistanceCovered extends Component{
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: "Distance Covered",
                    data: [
                        [1327359700000, 30.95],
                        [1327446000000, 31.34],
                        [1327532400000, 31.18],
                        [1327618800000, 31.05],
                        [1327878000000, 31.0],
                        [1327964400000, 30.95],
                        [1328050800000, 31.24],
                        [1328137200000, 31.29],
                        [1328223600000, 31.85],
                        [1328482800000, 31.86],
                        [1328569200000, 32.28],
                        [1328655600000, 32.1],
                        [1328742000000, 32.65],
                        [1328828400000, 32.21],
                        [1329087600000, 32.35],
                        [1329174000000, 32.44],
                        [1329260400000, 32.46],
                        [1329346800000, 32.86],
                        [1329433200000, 32.75],
                        [1329778800000, 32.54],
                        [1329865200000, 32.33],
                        [1329951600000, 32.97],
                        [1330038000000, 33.41],
                        [1330297200000, 33.27],
                        [1330383600000, 33.27],
                        [1330470000000, 32.89],
                        [1330556400000, 33.1],
                        [1330642800000, 33.73],
                        [1330902000000, 33.22],
                        [1330988400000, 31.99],
                        [1331074800000, 32.41],
                        [1331161200000, 33.05],
                        [1331247600000, 33.64],
                        [1331506800000, 33.56],
                        [1331593200000, 34.22],
                        [1331679600000, 33.77],
                        [1331766000000, 34.17],
                        [1331852400000, 33.82],
                        [1332111600000, 34.51],
                        [1332198000000, 33.16],
                        [1332284400000, 33.56],
                        [1332370800000, 33.71],
                        [1332457200000, 33.81],
                        [1332712800000, 34.4],
                        [1332799200000, 34.63],
                        [1332885600000, 34.46],
                        [1332972000000, 34.48],
                        [1333058400000, 34.31],
                        [1333317600000, 34.7],
                        [1333404000000, 34.31],
                        [1333490400000, 33.46],
                        [1333576800000, 33.59],
                        [1333922400000, 33.22],
                        [1334008800000, 32.61],
                        [1334095200000, 33.01],
                        [1334181600000, 33.55],
                        [1334268000000, 33.18],
                        [1334527200000, 32.84],
                        [1334613600000, 33.84],
                        [1334700000000, 33.39],
                        [1334786400000, 32.91],
                        [1334872800000, 33.06],
                        [1335132000000, 32.62],
                        [1335218400000, 32.4],
                        [1335304800000, 33.13],
                        [1335391200000, 33.26],
                        [1335477600000, 33.58],
                        [1335736800000, 33.55],
                        [1335823200000, 33.77],
                        [1335909600000, 33.76],
                        [1335996000000, 33.32],
                        [1336082400000, 32.61],
                        [1336341600000, 32.52],
                        [1336428000000, 32.67],
                        [1336514400000, 32.52],
                        [1336600800000, 31.92],
                        [1336687200000, 32.2],
                        [1336946400000, 32.23],
                        [1337032800000, 32.33],
                        [1337119200000, 32.36],
                        [1337205600000, 32.01],
                        [1337292000000, 31.31],
                        [1337551200000, 32.01],
                        [1337637600000, 32.01],
                        [1337724000000, 32.18],
                        [1337810400000, 31.54],
                        [1337896800000, 31.6],
                        [1338242400000, 32.05],
                        [1338328800000, 31.29],
                        [1338415200000, 31.05],
                        [1338501600000, 29.82],
                        [1338760800000, 30.31],
                        [1338847200000, 30.7],
                        [1338933600000, 31.69],
                        [1339020000000, 31.32],
                        [1339106400000, 31.65],
                        [1339365600000, 31.13],
                        [1339452000000, 31.77],
                        [1339538400000, 31.79],
                        [1339624800000, 31.67],
                        [1339711200000, 32.39],
                        [1339970400000, 32.63],
                        [1340056800000, 32.89],
                        [1340143200000, 31.99],
                        [1340229600000, 31.23],
                        [1340316000000, 31.57],
                        [1340575200000, 30.84],
                        [1340661600000, 31.07],
                        [1340748000000, 31.41],
                        [1340834400000, 31.17],
                        [1340920800000, 32.37],
                        [1341180000000, 32.19],
                        [1341266400000, 32.51],
                        [1341439200000, 32.53],
                        [1341525600000, 31.37],
                        [1341784800000, 30.43],
                        [1341871200000, 30.44],
                        [1341957600000, 30.2],
                        [1342044000000, 30.14],
                        [1342130400000, 30.65],
                        [1342389600000, 30.4],
                        [1342476000000, 30.65],
                        [1342562400000, 31.43],
                        [1342648800000, 31.89],
                        [1342735200000, 31.38],
                        [1342994400000, 30.64],
                        [1343080800000, 30.02],
                        [1343167200000, 30.33],
                        [1343253600000, 30.95],
                        [1343340000000, 31.89],
                        [1343599200000, 31.01],
                        [1343685600000, 30.88],
                        [1343772000000, 30.69],
                        [1343858400000, 30.58],
                        [1343944800000, 32.02],
                        [1344204000000, 32.14],
                        [1344290400000, 32.37],
                        [1344376800000, 32.51],
                        [1344463200000, 32.65],
                        [1344549600000, 32.64],
                        [1344808800000, 32.27],
                        [1344895200000, 32.1],
                        [1344981600000, 32.91],
                        [1345068000000, 33.65],
                        [1345154400000, 33.8],
                        [1345413600000, 33.92],
                        [1345500000000, 33.75],
                        [1345586400000, 33.84],
                        [1345672800000, 33.5],
                        [1345759200000, 32.26],
                        [1346018400000, 32.32],
                        [1346104800000, 32.06],
                        [1346191200000, 31.96],
                        [1346277600000, 31.46],
                        [1346364000000, 31.27],
                        [1346709600000, 31.43],
                        [1346796000000, 32.26],
                        [1346882400000, 32.79],
                        [1346968800000, 32.46],
                        [1347228000000, 32.13],
                        [1347314400000, 32.43],
                        [1347400800000, 32.42],
                        [1347487200000, 32.81],
                        [1347573600000, 33.34],
                        [1347832800000, 33.41],
                        [1347919200000, 32.57],
                        [1348005600000, 33.12],
                        [1348092000000, 34.53],
                        [1348178400000, 33.83],
                        [1348437600000, 33.41],
                        [1348524000000, 32.9],
                        [1348610400000, 32.53],
                        [1348696800000, 32.8],
                        [1348783200000, 32.44],
                        [1349042400000, 32.62],
                        [1349128800000, 32.57],
                        [1349215200000, 32.6],
                        [1349301600000, 32.68],
                        [1349388000000, 32.47],
                        [1349647200000, 32.23],
                        [1349733600000, 31.68],
                        [1349820000000, 31.51],
                        [1349906400000, 31.78],
                        [1349992800000, 31.94],
                        [1350252000000, 32.33],
                        [1350338400000, 33.24],
                        [1350424800000, 33.44],
                        [1350511200000, 33.48],
                        [1350597600000, 33.24],
                        [1350856800000, 33.49],
                        [1350943200000, 33.31],
                        [1351029600000, 33.36],
                        [1351116000000, 33.4],
                        [1351202400000, 34.01],
                        [1351638000000, 34.02],
                        [1351724400000, 34.36],
                        [1351810800000, 34.39],
                        [1352070000000, 34.24],
                        [1352156400000, 34.39],
                        [1352242800000, 33.47],
                        [1352329200000, 32.98],
                        [1352415600000, 32.9],
                        [1352674800000, 32.7],
                        [1352761200000, 32.54],
                        [1352847600000, 32.23],
                        [1352934000000, 32.64],
                        [1353020400000, 32.65],
                        [1353279600000, 32.92],
                        [1353366000000, 32.64],
                        [1353452400000, 32.84],
                        [1353625200000, 33.4],
                        [1353884400000, 33.3],
                        [1353970800000, 33.18],
                        [1354057200000, 33.88],
                        [1354143600000, 34.09],
                        [1354230000000, 34.61],
                        [1354489200000, 34.7],
                        [1354575600000, 35.3],
                        [1354662000000, 35.4],
                        [1354748400000, 35.14],
                        [1354834800000, 35.48],
                        [1355094000000, 35.75],
                        [1355180400000, 35.54],
                        [1355266800000, 35.96],
                        [1355353200000, 35.53],
                        [1355439600000, 37.56],
                        [1355698800000, 37.42],
                        [1355785200000, 37.49],
                        [1355871600000, 38.09],
                        [1355958000000, 37.87],
                        [1356044400000, 37.71],
                        [1356303600000, 37.53],
                        [1356476400000, 37.55],
                        [1356562800000, 37.3],
                        [1356649200000, 36.9],
                        [1356908400000, 37.68],
                        [1357081200000, 38.34],
                        [1357167600000, 37.75],
                        [1357254000000, 38.13],
                        [1357513200000, 37.94],
                        [1357599600000, 38.14],
                        [1357686000000, 38.66],
                        [1357772400000, 38.62],
                        [1357858800000, 38.09],
                        [1358118000000, 38.16],
                        [1358204400000, 38.15],
                        [1358290800000, 37.88],
                        [1358377200000, 37.73],
                        [1358463600000, 37.98],
                        [1358809200000, 37.95],
                        [1358895600000, 38.25],
                        [1358982000000, 38.1],
                        [1359068400000, 38.32],
                        [1359327600000, 38.24],
                        [1359414000000, 38.52],
                        [1359500400000, 37.94],
                        [1359586800000, 37.83],
                        [1359673200000, 38.34],
                        [1359932400000, 38.1],
                        [1360018800000, 38.51],
                        [1360105200000, 38.4],
                        [1360191600000, 38.07],
                        [1360278000000, 39.12],
                        [1360537200000, 38.64],
                        [1360623600000, 38.89],
                        [1360710000000, 38.81],
                        [1360796400000, 38.61],
                        [1360882800000, 38.63],
                        [1361228400000, 38.99],
                        [1361314800000, 38.77],
                        [1361401200000, 38.34],
                        [1361487600000, 38.55],
                        [1361746800000, 38.11],
                        [1361833200000, 38.59],
                        [1361919600000, 39.6],
                    ],
                },
            ],
            options: {
                chart: {
                    id: "chartD",
                    type: "area",
                    height: 320,
                    zoom: {
                        autoScaleYaxis: false,
                    },
                    toolbar: {
                        show: false,
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                colors: ["var(--primary-color)"],
                dataLabels: {
                    enabled: false,
                },
                markers: {
                    size: 0,
                    // style: "hollow",
                },
                grid: {
                    borderColor: "#f1f1f1",
                    strokeDashArray: 3,
                },
                xaxis: {
                    type: "datetime",
                    min: new Date("01 Feb 2012").getTime(),
                    axisBorder: {
                        show: true,
                        color: "rgba(119, 119, 142, 0.05)",
                        offsetX: 0,
                        offsetY: 0,
                    },
                    axisTicks: {
                        show: true,
                        borderType: "solid",
                        color: "rgba(119, 119, 142, 0.05)",
                        // width: [6],
                        offsetX: 0,
                        offsetY: 0,
                    },
                    labels: {
                        show: true,
                        rotate: -90,
                        style: {
                            fontSize: "11px",
                            fontFamily: "poppins, sans-serif",
                            fontWeight: 400,
                            cssClass: "apexcharts-xaxis-label",
                        },
                    },
                    tooltip: {
                        enabled: false,
                    },
                },
                yaxis: {
                    title: {
                        style: {
                            color: "#adb5be",
                            fontSize: "14px",
                            fontFamily: "poppins, sans-serif",
                            fontWeight: 600,
                            cssClass: "apexcharts-yaxis-label",
                        },
                    },
                    labels: {
                        formatter: function (y) {
                            return y.toFixed(0) + "";
                        },
                    },
                },
                tooltip: {
                    x: {
                        format: "dd MMM yyyy",
                    },
                },
                stroke: {
                    show: true,
                    curve: "stepline",
                    lineCap: "butt",
                    colors: undefined,
                    width: 1,
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.4,
                        opacityTo: 0.1,
                        stops: [0, 90, 100],
                        colorStops: [
                            [
                                {
                                    offset: 0,
                                    color: "var(--primary005)",
                                    opacity: 1
                                },
                                {
                                    offset: 75,
                                    color: "var(--primary005)",
                                    opacity: 1
                                },
                                {
                                    offset: 100,
                                    color: "var(--primary005)",
                                    opacity: 1
                                }
                            ]
                        ]
                    }
                },
                legend: {
                    position: "top",
                    show: true,
                },
            }
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="area" width={"100%"} height={290} />

        );
    }
}

//energy-block
export class Energyblock extends Component{
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Total Visitors',
                data: [25, 98, 56, 22, 75, 19, 86],
            }],
            options: {
                chart: {
                    height: 305,
                    type: 'radar',
                    toolbar: {
                        show: false,
                    },
                },
                labels: ['Chrome', ' Firefox', 'Edge', 'Safari', 'Opera', 'Brave', 'Vivaldi'],
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
                colors: ["#48f7c9"],
                stroke: {
                    width: 2,
                    curve: 'straight',
                },
                markers: {
                    size: 3,
                    // strokeColor: "#48f7c9",
                    colors: ['#fff'],
                    strokeWidth: 2,
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val;
                        }
                    }
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
            <ReactApexChart options={this.state.options} series={this.state.series} type="radar" width={"100%"} height={305} />

        );
    }
}

//Air-Support
export class AirSupport extends Component{
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Aircraft Availability',
                data: [44]
            }, {
                name: 'Crew Readiness',
                data: [38]
            }, {
                name: 'Fuel Status',
                data: [53]
            }, {
                name: 'Mission Capability',
                data: [15]
            }, {
                name: 'Flight Log',
                data: [26]
            }, {
                name: 'Maintenance Status',
                data: [41]
            },],
            options: {
                chart: {
                    type: 'bar',
                    height: 260,
                    toolbar: {
                        show: false,
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: '80%',
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 10,
                },
                colors: ["var(--primary-color)", "var(--primary-color)", "var(--primary-color)"],
                xaxis: {
                    categories: ["Updated Now"],
                    labels: {
                        show: true,
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
                        text: undefined
                    },
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
                tooltip: {
                    shared: false,
                    y: {
                        formatter: function (val) {
                            return val + "%";
                        }
                    }
                },
                fill: {
                    type: 'pattern',
                    opacity: 1,
                    pattern: {
                        style: ['horizontalLines', 'horizontalLines', 'horizontalLines', 'horizontalLines', 'horizontalLines', 'horizontalLines'], // string or array of strings
                        width: 6, // Adjust the width of the pattern lines
                        height: 6 // Adjust the height of the pattern lines
                    }
                },
                legend: {
                    show: false,
                }
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" width={324} height={260} />

        );
    }
}

//Time Spent
// export class TimeSpent extends Component{
//     constructor(props) {
//         super(props);

//         this.state = {
//             series: [{
//                 name: 'This Month',
//                 type: "column",
//                 data: [20, 30, 40, 20, 30, 40, 25, 35, 45, 20, 30, 40]
//             }, {
//                 name: "Last Month",
//                 type: "area",
//                 data: [40, 50, 60, 30, 40, 55, 35, 55, 65, 40, 50, 60],
//             }],
//             options: {
//                 chart: {
//                     redrawOnWindowResize: true,
//                     height: 257,
//                     type: 'bar',
//                     toolbar: {
//                         show: false
//                     },
//                 },
//                 plotOptions: {
//                     bar: {
//                         horizontal: false,
//                         columnWidth: '25%'
//                     },
//                 },
//                 dataLabels: {
//                     enabled: false
//                 },
//                 stroke: {
//                     width: [0, 1.5],
//                     curve: "straight"
//                 },
//                 legend: {
//                     show: true,
//                     position: "top",
//                     horizontalAlign: "center",
//                     fontSize: "12px",
//                     fontFamily: "Helvetica, Arial",
//                     fontWeight: 600,
//                     labels: {
//                         colors: '#9ba5b7',
//                     },

//                     markers: {
//                         width: 8,
//                         height: 8,
//                         strokeWidth: 0,
//                         strokeColor: "#fff",
//                         fillColors: ["rgba(255, 255, 255, 0.5)", 'var(--primary-color)'],
//                         radius: 2,
//                         customHTML: undefined,
//                         onClick: undefined,
//                         offsetX: 0,
//                         offsetY: 0,
//                     },
//                 },
//                 markers: {
//                     discrete: [{
//                         seriesIndex: 1,
//                         dataPointIndex: 2,
//                         fillColor: '#fff',
//                         strokeColor: 'var(--primary-color)',
//                         size: 4,
//                         shape: "circle"
//                     },
//                     {
//                         seriesIndex: 1,
//                         dataPointIndex: 5,
//                         fillColor: '#fff',
//                         strokeColor: 'var(--primary-color)',
//                         size: 4,
//                         shape: "circle"
//                     },
//                     {
//                         seriesIndex: 1,
//                         dataPointIndex: 8,
//                         fillColor: '#fff',
//                         strokeColor: 'var(--primary-color)',
//                         size: 4,
//                         shape: "circle"
//                     },
//                     {
//                         seriesIndex: 1,
//                         dataPointIndex: 11,
//                         fillColor: '#fff',
//                         strokeColor: 'var(--primary-color)',
//                         size: 4,
//                         shape: "circle"
//                     }],
//                     hover: {
//                         sizeOffset: 6
//                     }
//                 },
//                 colors: ["var(--primary-color)", 'var(--primary-color)'],
//                 yaxis: {
//                     title: {
//                         style: {
//                             color: '#adb5be',
//                             fontSize: '14px',
//                             fontFamily: 'Rajdhani',
//                             fontWeight: 600,
//                             cssClass: 'apexcharts-yaxis-label',
//                         },
//                     },
//                     labels: {
//                         formatter: function (y) {
//                             return y.toFixed(0) + "";
//                         },
//                         show: true,
//                         style: {
//                             colors: "#8c9097",
//                             fontSize: '11px',
//                             fontWeight: 600,
//                             cssClass: 'apexcharts-xaxis-label',
//                         },
//                     }
//                 },
//                 xaxis: {
//                     // type: "month",
//                     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec'],
//                     axisBorder: {
//                         show: true,
//                         color: 'rgba(119, 119, 142, 0.05)',
//                         offsetX: 0,
//                         offsetY: 0,
//                     },
//                     axisTicks: {
//                         show: true,
//                         borderType: 'solid',
//                         color: 'rgba(119, 119, 142, 0.05)',
//                         // width: 6,
//                         offsetX: 0,
//                         offsetY: 0
//                     },
//                     labels: {
//                         rotate: -90,
//                         style: {
//                             colors: "#8c9097",
//                             fontSize: '11px',
//                             fontWeight: 600,
//                             cssClass: 'apexcharts-xaxis-label',
//                         },
//                     }
//                 },
//                 fill: {
//                     type: 'gradient',
//                     gradient: {
//                         shadeIntensity: 1,
//                         opacityFrom: 0.4,
//                         opacityTo: 0.1,
//                         stops: [0, 90, 100],
//                         colorStops: [
//                             [
//                                 {
//                                     offset: 0,
//                                     color: "var(--primary-color)",
//                                     opacity: 1
//                                 },
//                                 {
//                                     offset: 75,
//                                     color: "var(--primary-color)",
//                                     opacity: 1
//                                 },
//                                 {
//                                     offset: 100,
//                                     color: "var(--primary-color)",
//                                     opacity: 1
//                                 }
//                             ],
//                             [
//                                 {
//                                     offset: 0,
//                                     color: "var(--primary005)",
//                                     opacity: 1
//                                 },
//                                 {
//                                     offset: 75,
//                                     color: "var(--primary005)",
//                                     opacity: 1
//                                 },
//                                 {
//                                     offset: 100,
//                                     color: "var(--primary005)",
//                                     opacity: 1
//                                 }
//                             ]
//                         ]
//                     }
//                 },
//                 tooltip: {
//                     shared: true,
//                     intersect: false,
//                     y: {
//                         formatter: function (y) {
//                             if (typeof y !== "undefined") {
//                                 return y.toFixed(0) + " points";
//                             }
//                             return y;
//                         },
//                     },
//                     marker: {
//                         fillColors: ['rgba(255, 255, 255, 0.5)', 'var(--primary-color)']
//                     }
//                 }
//             },
//         };
//     }
//     render() {
//         return (
//             <ReactApexChart options={this.state.options} series={this.state.series} width={"100%"} height={257} />

//         );
//     }
// }

export class TimeSpent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'This Month',
                type: "column",
                data: [20, 30, 40, 20, 30, 40, 25, 35, 45, 20, 30, 40]
            }, {
                name: "Last Month",
                type: "area",
                data: [40, 50, 60, 30, 40, 55, 35, 55, 65, 40, 50, 60],
            }],
            options: {
                chart: {
                    redrawOnWindowResize: true,
                    height: 257,
                    type: 'bar',
                    toolbar: {
                        show: false
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '25%'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [0, 1.5],
                    curve: "straight"
                },
                legend: {
                    show: true,
                    position: "top",
                    horizontalAlign: "center",
                    fontSize: "12px",
                    fontFamily: "Helvetica, Arial",
                    fontWeight: 600,
                    labels: {
                        colors: '#9ba5b7',
                    },

                    markers: {
                        width: 8,
                        height: 8,
                        strokeWidth: 0,
                        strokeColor: "#fff",
                        fillColors: ["rgba(255, 255, 255, 0.5)", 'var(--primary-color)'],
                        radius: 2,
                        customHTML: undefined,
                        onClick: undefined,
                        offsetX: 0,
                        offsetY: 0,
                    },
                },
                markers: {
                    discrete: [{
                        seriesIndex: 1,
                        dataPointIndex: 2,
                        fillColor: '#fff',
                        strokeColor: 'var(--primary-color)',
                        size: 4,
                        shape: "circle"
                    },
                    {
                        seriesIndex: 1,
                        dataPointIndex: 5,
                        fillColor: '#fff',
                        strokeColor: 'var(--primary-color)',
                        size: 4,
                        shape: "circle"
                    },
                    {
                        seriesIndex: 1,
                        dataPointIndex: 8,
                        fillColor: '#fff',
                        strokeColor: 'var(--primary-color)',
                        size: 4,
                        shape: "circle"
                    },
                    {
                        seriesIndex: 1,
                        dataPointIndex: 11,
                        fillColor: '#fff',
                        strokeColor: 'var(--primary-color)',
                        size: 4,
                        shape: "circle"
                    }],
                    hover: {
                        sizeOffset: 6
                    }
                },
                colors: ["var(--primary-color)", 'var(--primary-color)'],
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
                        },
                        show: true,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    }
                },
                xaxis: {
                    type: "category",
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec'],
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
                        rotate: -90,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.4,
                        opacityTo: 0.1,
                        stops: [0, 90, 100],
                        colorStops: [
                            [
                                {
                                    offset: 0,
                                    color: "var(--primary-color)",
                                    opacity: 1
                                },
                                {
                                    offset: 75,
                                    color: "var(--primary-color)",
                                    opacity: 1
                                },
                                {
                                    offset: 100,
                                    color: "var(--primary-color)",
                                    opacity: 1
                                }
                            ],
                            [
                                {
                                    offset: 0,
                                    color: "var(--primary005)",
                                    opacity: 1
                                },
                                {
                                    offset: 75,
                                    color: "var(--primary005)",
                                    opacity: 1
                                },
                                {
                                    offset: 100,
                                    color: "var(--primary005)",
                                    opacity: 1
                                }
                            ]
                        ]
                    }
                },
                tooltip: {
                    shared: true,
                    intersect: false,
                    y: {
                        formatter: function (y) {
                            if (typeof y !== "undefined") {
                                return y.toFixed(0) + " points";
                            }
                            return y;
                        },
                    },
                    marker: {
                        fillColors: ['rgba(255, 255, 255, 0.5)', 'var(--primary-color)']
                    }
                }
            }
        };
    }

    render() {
        return (
            <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="bar" // Specify chart type here
                width="100%"
                height={257}
            />
        );
    }
}

//civilian-population-support
export class Civilianpopulationsupport extends Component{
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Revenue',
                type: 'area',
                data: [20, 29, 37, 35, 44, 43, 50],
            },
            ],
            options: {
                chart: {
                    toolbar: {
                        show: false
                    },
                    height: 380,
                    type: 'line',
                    stacked: false,
                    sparkline: {
                        enabled: true
                    },
                },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: undefined,
                },
                xaxis: {
                    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                },
                yaxis: [
                    {
                        show: false,
                        axisTicks: {
                            show: false,
                        },
                        axisBorder: {
                            show: false,
                            color: '#4eb6d0'
                        },
                        labels: {
                            style: {
                                colors: '#4eb6d0',
                            }
                        },
                        title: {
                            text: undefined,
                        },
                        tooltip: {
                            enabled: true
                        }
                    }
                ],
                tooltip: {
                    enabled: false,
                },
                legend: {
                    show: false,
                    position: 'top',
                    offsetX: 40,
                    fontSize: '13px',
                    fontWeight: 'normal',
                    labels: {
                        colors: '#acb1b1',
                    },
                    markers: {
                        width: 10,
                        height: 10,
                    },
                },
                colors: ["var(--primary05)"],
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.4,
                        opacityTo: 0.1,
                        stops: [0, 90, 100],
                        colorStops: [
                            [
                                {
                                    offset: 0,
                                    color: "rgba(255, 255, 255, 0.05)",
                                    opacity: 1
                                },
                                {
                                    offset: 50,
                                    color: "rgba(255, 255, 255, 0.05)",
                                    opacity: 1
                                },
                                {
                                    offset: 100,
                                    color: "rgba(255, 255, 255, 0.05)",
                                    opacity: 1
                                }
                            ]
                        ]
                    }
                },
                stroke: {
                    width: [1.5],
                    curve: 'straight',
                    dashArray: [0],
                },
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" width={"100%"} height={380} />

        );
    }
}

//civilian-population
export class Civilianpopulation extends Component{
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'population',
                data: [2, 4, 3, 4, 3, 5, 5, 6.5, 6, 5, 4, 5, 8, 7, 7, 8, 8, 10, 9, 9, 12, 12,
                    11, 12, 13, 14, 16, 14, 15, 17, 19, 21
                ]
            }],
            options: {
                chart: {
                    type: 'bar',
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {
                    bar: {
                        barHeight: '100%',
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    colors: ["#fff"],
                    width: 0.2
                },
                // labels: Array.apply(null, { length: 30 }).map(function (el, index) {
                //     return index + 1;
                // }),
                xaxis: {
                    labels: {
                        show: true,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    }
                },
                colors: ["var(--primary-color)"],
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                    title: {
                        style: {
                            color: "#8c9097",
                        }
                    },
                },
                grid: {
                    position: 'back'
                },
                title: {
                    align: 'right',
                    offsetY: 30,
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#8c9097'
                    },
                },
                fill: {
                    type: 'solid',
                },
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" width={"100%"} height={320} />

        );
    }
}

//users-report
export class Usersreport extends Component{
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Total',
                data: [21, 22, 18, 15, 13, 10, 9, 7]
            }],
            options: {
                chart: {
                    height: 305,
                    type: 'bar',
                    events: {
                        click: function (chart, w, e) {
                        }
                    },
                    toolbar: {
                        show: false,
                    }
                },
                colors: ['var(--primary-color)'],
                plotOptions: {
                    bar: {
                        barHeight: '28%',
                        distributed: true,
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false,
                    position: 'bottom',
                    horizontalAlign: 'center',
                    fontWeight: 600,
                    fontSize: '11px',
                    labels: {
                        colors: '#74767c',
                    },
                    markers: {
                        width: 7,
                        height: 7,
                        strokeWidth: 0,
                        radius: 12,
                        offsetX: 0,
                        offsetY: 0
                    },
                },
                grid: {
                    borderColor: '#f1f1f1',
                    strokeDashArray: 3
                },
                xaxis: {
                    categories: [
                        ['ShadowKnight'],
                        ['PixelPioneer'],
                        ['MysticGamer'],
                        ['CyberNinja'],
                        ['QuantumWarrior'],
                        ['FrostbyteHero'],
                        ['StormSeeker'],
                        ['OmegaOracle'],
                    ],
                    labels: {
                        show: false,
                        style: {
                            fontSize: '12px'
                        },
                    }
                },
                yaxis: {
                    // offsetX: 30,
                    // offsetY: 30,
                    labels: {
                        show: true,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                        offsetY: 8,
                    }
                },
                tooltip: {
                    enabled: true,
                    shared: false,
                    intersect: true,
                    x: {
                        show: false
                    }
                },
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" width={"100%"} height={305} />

        );
    }
}

//Performance
export class Player1 extends Component{
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
            }],
            options: {
                chart: {
                    type: 'line',
                    height: 20,
                    width: 120,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 0,
                        left: 0,
                        blur: 3,
                        color: '#000',
                        opacity: 0.1
                    }
                },
                stroke: {
                    show: true,
                    curve: 'straight',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                fill: {
                    gradient: {
                        // enabled: false
                    }
                },
                tooltip: {
                    enabled: false,
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    min: 0,
                    show: false
                },
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                },
                colors: ['rgb(72, 247, 104)'],
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" width={120} height={20} />

        );
    }
}
export class Player2 extends Component{
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 31, 37, 39, 62, 51, 35, 41]
            }],
            options: {
                chart: {
                    type: 'line',
                    height: 20,
                    width: 120,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 0,
                        left: 0,
                        blur: 3,
                        color: '#000',
                        opacity: 0.1
                    }
                },
                stroke: {
                    show: true,
                    curve: 'straight',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                fill: {
                    gradient: {
                        // enabled: false
                    }
                },
                tooltip: {
                    enabled: false,
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    min: 0,
                    show: false
                },
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                },
                colors: ['rgb(255,0,0)'],
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" width={120} height={20} />

        );
    }
}
export class Player3 extends Component{
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [61, 27, 54, 43, 19, 46, 31, 37, 39, 0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 62, 51, 35, 41]
            }],
            options: {
                chart: {
                    type: 'line',
                    height: 20,
                    width: 120,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 0,
                        left: 0,
                        blur: 3,
                        color: '#000',
                        opacity: 0.1
                    }
                },
                stroke: {
                    show: true,
                    curve: 'straight',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                fill: {
                    gradient: {
                        // enabled: false
                    }
                },
                tooltip: {
                    enabled: false,
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    min: 0,
                    show: false
                },
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                },
                colors: ['rgb(72, 247, 104)'],
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" width={120} height={20} />

        );
    }
}
export class Player4 extends Component{
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [61, 27, 54, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 37, 39, 0, 45, 54, 38, 62, 51, 35, 41]
            }],
            options: {
                chart: {
                    type: 'line',
                    height: 20,
                    width: 120,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 0,
                        left: 0,
                        blur: 3,
                        color: '#000',
                        opacity: 0.1
                    }
                },
                stroke: {
                    show: true,
                    curve: 'straight',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                fill: {
                    gradient: {
                        // enabled: false
                    }
                },
                tooltip: {
                    enabled: false,
                },
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                },
                colors: ['rgb(72, 247, 104)'],
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" width={120} height={20} />

        );
    }
}
export class Player5 extends Component{
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [61, 27, 54, 37, 39, 0, 45, 54, 38, 62, 51, 35, 41, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31]
            }],
            options: {
                chart: {
                    type: 'line',
                    height: 20,
                    width: 120,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 0,
                        left: 0,
                        blur: 3,
                        color: '#000',
                        opacity: 0.1
                    }
                },
                stroke: {
                    show: true,
                    curve: 'straight',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                fill: {
                    gradient: {
                        // enabled: false
                    }
                },
                tooltip: {
                    enabled: false,
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    min: 0,
                    show: false
                },
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                },
                colors: ['rgb(255,0,0)'],
            },
        };
    }
    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" width={120} height={20} />

        );
    }
}

//Skills Achieved 

export const Skillachieved = [
    { id: 1, name: "Epic Button Masher", now: 65 },
    { id: 2, name: "Alertness Alchemist", now: 58 },
    { id: 3, name: "Resolution Wizard", now: 37 },
    { id: 4, name: "Dropdown Diviner", now: 48 },
    { id: 5, name: "Modal Maestro", now: 22 },
];
