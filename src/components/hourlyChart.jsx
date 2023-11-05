import React from 'react';
import {useContext} from 'react';
import WeatherContext from '../weatherContext';
import Chart from 'react-apexcharts';

const colors = {
  'blue-1': '#202b3b',
  'blue-2': '#0b131e',
  'blue-3': '#0095ff',
  'yellow-1': '#f8d600',
  'green-1': '#14b8a6',
  'green-2': '#5eead4',
};

function HourlyChart() {
  const {weatherData} = useContext(WeatherContext);

  if (!weatherData) {
    return null;
  }
  const hourlyData = weatherData?.hourly;
  const seriesx = {
    name: 'hours',
    data: hourlyData.time.slice(0, 32),
  };
  const seriesy = [
    {
      name: 'Temp °C',
      data: hourlyData.temperature_2m.slice(0,32),
    },
  ];

  const options = {
    responsive: [
      {
        breakpoint: 407,
        options: {
          chart: {
            // background:"#242424",
            // height: "250px",
            // width: "320px",
          },
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],

    chart: {
      // width:  650,
      // height: 650,
      animations: {
        enabled: true,
      },
      background: colors['blue-1'],
      dropShadow: {
        left: 0,
        blur: 6,
      },
      foreColor: '#fff',
      fontFamily: 'Roboto',
      id: 'e4jrw',
      // stacked: true,
      toolbar: {
        show: true,
        tools: {
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
        },
      },
      type: 'area-datetime',
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
      },
      radialBar: {
        hollow: {
          background: colors['yellow-1'],
        },
        dataLabels: {
          name: {},
          value: {},
          total: {},
        },
      },
      pie: {
        donut: {
          labels: {
            name: {},
            value: {},
            total: {},
          },
        },
      },
    },
    dataLabels: {
      offsetY: -4,
      style: {
        fontWeight: 200,
        opacity: 0,
        colors: ['#363636'],
      },
      background: {
        borderRadius: 3,
        borderColor: '#405667',
      },
      dropShadow: {},
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        inverseColors: false,
        opacityFrom: 0.4,
        opacityTo: 0.6,
        colorStops: [
          {
            opacity: 0.4,
            offset: 10,
            color: colors['blue-3'],
          },
          {
            opacity: 0.4,
            offset: 100,
            color: colors['blue-3'],
          },
        ],
      },
    },
    grid: {
      borderColor: '#6A6B6C',
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: true,
        },
      },
      row: {
        colors: [
          // "#FFFFFF"
        ],
      },
      column: {},
      padding: {
        top: 5,
        right: 5,
        bottom: 10,
        left: 5,
      },
    },
    legend: {
      show: false,
      floating: true,
      fontSize: 18,
      offsetX: 23,
      offsetY: 0,
      itemMargin: {
        vertical: 0,
      },
    },
    markers: {
      size: 1,
      colors: ['#A6D6EE'],
      strokeWidth: 0,
      hover: {
        size: 4,
        sizeOffset: 6,
      },
    },

    stroke: {
      lineCap: 'smooth',
      dashArray: 0,
      color: 'red',
      width: 3,
      colors: [colors['blue-3']],
    },
    tooltip: {
      theme: 'dark',
      marker: {
        show: true,
      },
    },

    xaxis: {
      type: 'datetime',
      categories: seriesx.data,

      tickPlacement: 'between',
      offsetY: 1,
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
      labels: {
        trim: true,
        // show: true,
        datetimeFormatter: {
          year: 'yyyy',
          month: "MMM 'yy",
          day: 'dd MMM',
          hour: 'HH:mm',
        },
        style: {
          fontSize: 12,
        },
        offsetY: -1,
      },
      axisTicks: {
        color: '#9da7b4',
      },
      tickAmount: 12,
      title: {
        style: {
          fontWeight: 700,
        },
      },
    },
    yaxis: {
      tickAmount: 5,
      labels: {
        style: {},
      },
      title: {
        style: {
          fontWeight: 700,
        },
      },
    },
    theme: {
      mode: 'dark',
    },
  };

  return (
    <>
      <div
        className={` bg-blue-1 max-h-[595px]  rounded-2xl grid grid-cols-1 justify-center  items-center shadow-component`}>
        <p className='mx-5 my-2'>Próximas horas</p>
        <Chart
          className='md:w-[70%] w-[90%] mx-auto flex
          items-center justify-center p-1'
          options={options}
          series={seriesy}
          type='area'
        />
      </div>
    </>
  );
}

export default HourlyChart;
