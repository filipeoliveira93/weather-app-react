import React, { useContext } from "react";
import WeatherContext from "./weatherContext";
import ShowIcon from "./showIcon";

function DailyForecast() {
	const { weatherData } = useContext(WeatherContext);

	if (!weatherData) {
		return null;
	}
	var dailyData = weatherData.daily;
	var hourlyData = weatherData.hourly.time
	console.log(hourlyData)

	const days = dailyData.time.map((date) => {
		const split = date.split("-");
		return split[2];
	});

	
	return (
		<div>
			{days.map((day, index) => (
				<div key={index}>
					<h2> dia {day}</h2>
					<p>Probabilidade de chuva: {dailyData.precipitation_probability_max[index]} %</p>
                    <p>máx: {dailyData.temperature_2m_max[index]} °C</p>
                    <p>min: {dailyData.temperature_2m_min[index]} °C</p>
					<ShowIcon weatherCode={dailyData.weathercode[index]} />
				</div>
			))}
		</div>
	);
}
export default DailyForecast;
