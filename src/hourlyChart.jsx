import React from "react";
import { useContext } from "react";
import WeatherContext from "./weatherContext";
import Chart from "react-apexcharts";

function HourlyChart() {
	const { weatherData } = useContext(WeatherContext);

	if (!weatherData) {
		return null;
	}
	// console.log(weatherData)
	const hourlyData = weatherData?.hourly;

	// console.log(hourlyData.time);
	const hours = hourlyData?.time.map((hour) => {
		const split = hour.split("T");
		// console.log(split[1]);

		return split[1];
	});
	let hoursday = hours ? hours.slice(0, 32) : [0];
	// console.log("hoursday " + hoursday);
	const seriesx = {
		name: "hours",
		// data: hoursday
		data: hourlyData.time.slice(0, 32),
	};
	// console.log(seriesx.data)
	console.log(seriesx.data);
	const seriesy = [
		{
			name: "Temp °C",
			data: hourlyData.temperature_2m.slice(0, 32),
		},
	];
	// console.log(seriesy);

	const options = {
		responsive: [
			{
				breakpoint: 407,
				options: {
					chart: {
						background:"#242424",
						height: "250px",
						width: "320px",
					},
					plotOptions: {
						bar: {
							horizontal: false,
						},
					},
					legend: {
						position: "bottom",
					},
				},
			},
		],

		chart: {
			width:  '450px',
			height: '450px',
			animations: {
				enabled: false,
			},
			background: "#242424",
			dropShadow: {
				left: 0,
				blur: 6,
			},
			foreColor: "#fff",
			fontFamily: "Roboto",
			id: "e4jrw",
			// stacked: true,
			toolbar: {
				show: false,
				tools: {
					selection: true,
					zoom: true,
					zoomin: true,
					zoomout: true,
					pan: true,
					reset: true,
				},
			},
			type: "area-datetime",
		},
		plotOptions: {
			bar: {
				borderRadius: 10,
			},
			radialBar: {
				hollow: {
					background: "#fff",
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
				colors: ["#363636"],
			},
			background: {
				borderRadius: 3,
				// borderColor: "#405667"
			},
			dropShadow: {},
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				type: "vertical",
				inverseColors: false,
				opacityFrom: 0.4,
				opacityTo: 0.6,
				colorStops: [
					{
						opacity: 0.3,
						offset: 0,
						color: "#44E8D2",
					},
					{
						opacity: 0.4,
						offset: 100,
						color: "#2D58B5",
					},
				],
			},
		},
		grid: {
			borderColor: "#6A6B6C",
			strokeDashArray: 3,
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
				top: 10,
				right: 20,
				bottom: 10,
				left: 10,
			},
		},
		legend: {
			show: false,
			floating: true,
			fontSize: 14,
			offsetX: -23,
			offsetY: 0,
			itemMargin: {
				vertical: 0,
			},
		},
		markers: {
			size: 3,
			colors: ["#A6D6EE"],
			strokeWidth: 0,
			hover: {
				size: 2,
				sizeOffset: 6,
			},
		},

		stroke: {
			lineCap: "round",
			dashArray: 2,
		},
		tooltip: {
			theme: "dark",
			marker: {
				show: false,
			},
		},

		xaxis: {
			type: "datetime",
			categories: seriesx.data,

			tickPlacement: "between",
			offsetY: 1,
			tooltip: {
				x: {
					format: "dd/MM/yy HH:mm",
				},
			},
			labels: {
				trim: true,
				// show: true,
				datetimeFormatter: {
					year: "yyyy",
					month: "MMM 'yy",
					day: "dd MMM",
					hour: "HH:mm",
				},
				style: {
					fontSize: 11,
				},
				offsetY: -1,
			},
			axisTicks: {
				color: "#1DADD9",
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
			mode: "dark",
		},
	};

	return (
		<>
			
			<Chart className="w-[40rem] sm:w-[200px] flex justify-center items-center bg-slate-50" options={options} series={seriesy} type='area'/>
		</>
	);
}

export default HourlyChart;
