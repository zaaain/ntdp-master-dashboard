import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const Analyticswebsite = () => {
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);

  // Static Data for Industries
  const industriesData = [
    {
      name: "Industries",
      data: [
        { x: "IT Solutions", y: 105 },
        { x: "FinTech", y: 63 },
        { x: "Enterprise Software", y: 58 },
        { x: "E-commerce/Retail", y: 53 },
        { x: "EdTech", y: 46 }
      ]
    }
  ];

  useEffect(() => {
    const chartOptions = {
      chart: {
        id: 'industries-bar-chart',
        height: 300,
        type: 'bar',
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 1000
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
          columnWidth: "20%",
          borderRadius: 0
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      colors: ["var(--primary-color)"], // Same color scheme maintained
      markers: {
        size: 0
      },
      xaxis: {
        categories: industriesData[0].data.map(item => item.x),
        labels: {
          show: true,
          rotate: -45, // Labels tilted for better visibility
          style: {
            fontSize: '12px'
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        max: 120, // Adjusted to fit the highest value
        labels: {
          show: true
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      legend: {
        show: false
      }
    };

    setOptions(chartOptions);
    setSeries([{ name: "Industries", data: industriesData[0].data.map(item => item.y) }]);
  }, []);

  return (
    <div>
      <Chart options={options} series={series} type="bar" width={"100%"} height={300} />
    </div>
  );
};



//Ecommerce Website Traffic
export const WebsiteTraffic = () => {
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([{ data: [] }]);
  const TICKINTERVAL = 86400000;
  const XAXISRANGE = 777600000;

  function getDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    const newData = [];
    while (i < count) {
      var x = baseval + i * TICKINTERVAL;
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      newData.push({
        x, y
      });
      i++;
    }

    // Ensure data length is exactly 20
    if (newData.length > 20) {
      return newData.slice(newData.length - 20);
    }
    return newData;
  }

  function getNewSeries(baseval, yrange) {
    var newDate = baseval + TICKINTERVAL;
    const newData = [...series[0].data];
    const updatedData = newData.map((item, index) => {
      if (index < newData.length - 10) {
        // Reset the x and y of the data which is out of drawing area
        // to prevent memory leaks
        return { x: newDate - XAXISRANGE - TICKINTERVAL, y: 0 };
      }
      return item;
    });
    updatedData.push({
      x: newDate,
      y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    });

    // Ensure data length is capped at 20
    return updatedData.slice(-20);
  }

  useEffect(() => {
    const initialDate = new Date('11 Feb 2023 GMT').getTime();
    const initialData = getDayWiseTimeSeries(initialDate, 20, { min: 10, max: 90 });

    const chartOptions = {
      series: [{
        data: initialData
      }],
      chart: {
        id: 'realtime',
        height: 300,
        type: 'bar',
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 1000
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
          borderRadius: 4
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
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
      xaxis: {
        type: 'datetime',
        range: XAXISRANGE,
        labels: {
          show: true,
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
      yaxis: {
        max: 100,
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
    };

    setOptions(chartOptions);
    setSeries([{ data: initialData }]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSeries = getNewSeries(series[0].data.slice(-1)[0].x, { min: 10, max: 90 });
      setSeries([{ data: newSeries }]);
    }, 1000);

    return () => clearInterval(interval);
  }, [series]);

  return (
    <div>
      <Chart options={options} series={series} type="bar" width={"100%"} height={300} />
    </div>
  );
};

