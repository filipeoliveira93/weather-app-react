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

	console.log(hourlyData.time);

	const seriesx = [
		{
			name: "hours",
			data: hourlyData?.time.map((hour) => {
				const split = hour.split("T");
				console.log(split[1]);
				return split[1];
			}),
		},
	];
	const seriesy = [
		{
			name: "temp",
			data: hourlyData.temperature_2m,
		},
	];
	const options = {
		chart: {
			id: "line-chart",
			toolbar: {
				show: true,
			},
		},
		xaxis: {
			categories: seriesx,
		},
		yaxis: {
			title: {
				text: "temp",
			},
		},
	};

	return <Chart options={options} series={seriesy} />;
}

export default HourlyChart;
