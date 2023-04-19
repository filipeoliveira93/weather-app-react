import React from "react";
import { useContext } from "react";
import WeatherContext from "./weatherContext";
import Chart from "react-apexcharts";

function HourlyChart() {
	const { weatherData } = useContext(WeatherContext);

	if (!weatherData) {
		return null;
	}
	const hourlyData = weatherData?.hourly;

	// console.log(hourlyData.time);
	const hours = hourlyData?.time.map((hour) => {
		const split = hour.split("T");
		// console.log(split[1]);
		// split =
		return split[1];
	});
	let hoursday = hours.slice(0, 32);
	console.log(hoursday);
	const seriesx = [
		{
			name: "hours",
			data: hours.slice(0, 32).map((hour) => hour.split(":")[0]),
		},
	];
	console.log(seriesx);
	const seriesy = [
		{
			name: "temperature",
			data: hourlyData.temperature_2m.slice(0, 32),
		},
	];
	const options = {
		chart: {
			id: "line-chart",
			type: "area",
			background: "#1d1e22",
			dropShadow: {
				enabled: true,
				top: 0,
				left: 0,
				blur: 6,
			},
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
			// background: "#ffff"
			// dropShadow: {
			// 	enabled: true,
			// 	left: 0,
			// 	blur: 6,
			// },
		},
		// theme: {
		// 	palette: "palette1", // upto palette10
		// },
		dataLabels: {
			enabled: true,
			style: {
				colors: ["#333"],
			},
			offsetX: 0,
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "dark",
				type: "vertical",
				shadeIntensity: 0.5,
				gradientToColors: ["#2eb491", "#b4912e"], // optional, if not defined - uses the shades of same color in series
				inverseColors: true,
				opacityFrom: 1,
				opacityTo: 0.4,
				stops: [0, 80, 100],
				colorStops: [],
			},
		},
		// fill: {
		// 	type: "gradient",

		// 	gradient: {
		// 		shadeIntensity: 1,
		// 		opacityFrom: 0.5,
		// 		opacityTo: 0.8,
		// 		stops: [0, 90, 30],
		// 	}
		// },
		// dataLabels: {
		// 	enabled: false,
		// },
		xaxis: {
			type: "datetime",
			tickAmount: 6,
			tickPlacement: "between",
			categories: hourlyData.time.slice(0, 32),
			tooltip: {
				x: {
					format: "dd/MM/yy HH:mm",
				},
			},
		},
		yaxis: {
			title: {
				text: "temp",
			},
		},
		stroke: {
			curve: "smooth",
		},
	};

	return <Chart options={options} series={seriesy} type='area' width={500} />;
}

export default HourlyChart;
