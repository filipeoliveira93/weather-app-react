import React, { useContext } from "react";
import WeatherContext from "../weatherContext";
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
		const formattedDate = [split[2], split[1]];
		return formattedDate;
	});

	return (
		<div className='flex flex-col overflow-x-auto  bg-blue-1 w-[90%]  mx-auto my-2 rounded-2xl  gap-2 p-6 h-[25rem] '>
			<h2 className='abslute font-semibold '>Previsão diária</h2>
			{days.map((day, index) => (
				<div
					key={index}
					className=' border-[1px] p-1 h-[120px] rounded-lg border-sky-100/10 grid  grid-cols-12 grid-rows-2 gap-2 '>
					<div className=' mx-2 col-span-1 row-span-2 text-center  text-xl  grid grid-rows-2  '>
						<h2 className='  m-auto w-[100%]  h-[100%] pt-5 border-b-1   font-medium border-slate-100/50 '>
							{" "}
							{day[0]}
						</h2>

						<h2 className='  m-auto w-[100%] h-[100%] border-t-2 font-light  '>
							{" "}
							{day[1]}{" "}
						</h2>
					</div>
					<div className='ml-2 my-auto   col-span-6 col-start-2 col-end-8'>
						<p>
							Probabilidade de chuva: {dailyData.precipitation_probability_max[index]}{" "}
							%
						</p>
					</div>
					<div className='ml-2 flex flex-col  col-span-2 col-start-2 col-end-8 row-start-2 text-sm '>
						<p>máx: {dailyData.temperature_2m_max[index]} °C</p>
						<p>min: {dailyData.temperature_2m_min[index]} °C</p>
					</div>
					<ShowIcon
						styles='bg-slate-200/1 col-start-8 col-end-13 px-3 row-span-2 flex flex-col justify-center items-center text-center text-sm'
						width='60px'
						height='60px'
						weatherCode={dailyData.weathercode[index]}
					/>
				</div>
			))}
		</div>
	);
}
export default DailyForecast;
