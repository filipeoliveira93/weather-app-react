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
	const seriesx =	{
			name: "hours",
			data: hourlyData.time.slice(0, 32)
			
		}
	
	console.log(seriesx.data);
	const seriesy = [
		{
			name: "temperature",
			data: hourlyData.temperature_2m.slice(0, 32),
		},
	];
	// console.log(seriesy);

	const options = {
		chart: {
			id: "line-chart",
			type: "area",
			background: "#1d1e22",
			dropShadow: {
				enabled: true,
				top: 0,
				left: 0,
				blur: 2,
			},
		},
			xaxis: {
				type: 'datetime',
				categories: seriesx.data,
			
				tickPlacement: "between",
				// categories: hourlyData.time.slice(0, 32),
				// tooltip: {
				// 	x: {
				// 		format: "dd/MM/yy HH:mm",
				// 	},
				// },
				labels: {
					show: true,
					datetimeFormatter: {
						year: 'yyyy',
						month: 'MMM \'yy',
						day: 'dd MMM',
						hour: 'HH:mm'
					  },
					  style: {
						colors: ['red', 'red'],
						fontSize: '12px',
						fontFamily: ' sans-serif',
						fontWeight: 400,
						cssClass: 'apexcharts-xaxis-label',
					},
				}
			},

		
	}
	return (
		<>
			<Chart options={options} series={seriesy} type='area' />
		</>
	);
}

export default HourlyChart;
