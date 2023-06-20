import React from "react";
import { useContext } from "react";
import WeatherContext from "../weatherContext";
import Chart from "react-apexcharts";

const colors = {
	"blue-1": "#202b3b",
	"blue-2": "#0b131e",
	"blue-3": "#0095ff",
	"yellow-1": "#f8d600",
	"green-1": "#14b8a6",
	"green-2": "#5eead4",
};

function HourlyChart() {
	const { weatherData } = useContext(WeatherContext);

	if (!weatherData) {
		return null;
	}
	console.log(weatherData);
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
						position: "bottom",
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
			background: colors["blue-1"],
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
					background: colors["blue-3"],
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
				borderColor: "#405667",
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
						opacity: 0.9,
						offset: 40,
						color: colors["green-1"],
					},
					{
						opacity: 0.7,
						offset: 100,
						color: colors["blue-3"],
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
			lineCap: "smooth",
			dashArray: 0,
			color: "red",
			width: 4,
			colors: [colors["green-2"]],
		},
		tooltip: {
			theme: "dark",
			marker: {
				show: true,
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
				color: "#fff",
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
			<div
				className={`w-[90%]  max-w-[40rem] bg-blue-1 mx-auto  rounded-2xl flex flex-col justify-center  items-center`}>
				<Chart
					className='py-3 px-3 max-w-[40rem] mx-auto w-[100%] min-w-[20rem]'
					options={options}
					series={seriesy}
					type='area'
				/>
			</div>
		</>
	);
}

export default HourlyChart;
