import React, { useContext } from "react";
import WeatherContext from "../weatherContext";
import ShowIcon from "./showIcon";
import WindIcon from "/icons/wind.svg"
// import Termometer from './icons/thermometer-celsius.svg'

function dailyForecast() {
	const { weatherData } = useContext(WeatherContext);
	console.log(weatherData);
	const daydata = {};
	if (weatherData != null) {
		daydata.daytemperature = weatherData.current_weather.temperature;
		daydata.weathercode = weatherData.current_weather.weathercode;
		daydata.windspeed = `${weatherData.current_weather.windspeed} km/h`;
		daydata.maxtemp = weatherData.daily.temperature_2m_max[0];
		daydata.precipitationprop = weatherData.daily.precipitation_probability_max[0]
		daydata.mintemp = weatherData.daily.temperature_2m_min[0];


		// console.log(daydata)
	}

	return (
		<div>
			{weatherData && (
				<div className='w-[90%] h-40 mx-auto rounded-2xl p-5 bg-blue-1 m-2 grid grid-cols-2 gap-1 overflow-scroll'>
					<div className='col-start-0 col-end-2 bg-slate-300/10'>
						<p>{daydata.daytemperature} ºC</p>
						<img width='60px' height='60px' src='/icons/thermometer-celsius.svg'/>
						<p>{daydata.precipitationprop} %</p>
						<img width='60px' height='60px' src='/icons/raindrop.svg'/>
						<p>{daydata.windspeed}</p>
						<img width='40px' height='40px' src='/icons/wind.svg'/>
						<img width='60px' height='60px' src='/icons/thermometer-celsius.svg'/>
						<p>max: {daydata.maxtemp} ºC</p>
						<p>max: {daydata.mintemp} ºC</p>
					</div>
					{/* <p>{daydata.weathercode}</p>  */}
					<div className=' bg-slate-300/10'>
						<ShowIcon
							styles=' col-start-8 col-end-13   col-span-2 row-span-2 flex flex-col justify-center items-center text-center'
							width='80px'
							height='80px'
							weatherCode={daydata.weathercode}
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default dailyForecast;
