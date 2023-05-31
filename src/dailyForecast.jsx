import React, { useContext } from "react";
import WeatherContext from "./weatherContext";
import ShowIcon from "./showIcon";

function DailyForecast() {
	const { weatherData } = useContext(WeatherContext);

	if (!weatherData) {
		return null;
	}

	console.log(weatherData);
	var dailyData = weatherData.daily;
	var hourlyData = weatherData.hourly.time;
	// console.log(hourlyData);

	const days = dailyData.time.map((date) => {
		const split = date.split("-");
		const formattedDate = `${split[2]} / ${split[1]}`;
		return formattedDate;
	});

	return (
		<div className="flex flex-col  gap-2 p-2">
			{days.map((day, index) => (
				<div key={index} className="border-[1px] p-1 h-[7rem] rounded-lg border-sky-100/10 grid  grid-cols-12 grid-rows-2 gap-1">
					<h2 className=" m-auto  col-span-1 row-span-2 text-center  font-medium ">  {day}</h2>
					<div  className="my-auto   col-span-2 col-start-2 col-end-8">
					<p>
						Probabilidade de chuva: {dailyData.precipitation_probability_max[index]} %
					</p>

					</div>
					<div  className="p-1  col-span-2 col-start-2 col-end-8 row-start-2 ">
					<p>máx: {dailyData.temperature_2m_max[index]} °C</p>
					<p>min: {dailyData.temperature_2m_min[index]} °C</p>

					</div>
					<ShowIcon styles=' col-start-8 col-end-13   col-span-2 row-span-2 flex flex-col justify-center items-center text-center' width='80px' height='80px' weatherCode={dailyData.weathercode[index]} />
				</div>
			))}
		</div>
	);
}
export default DailyForecast;
