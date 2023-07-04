import React, { useContext } from "react";
import WeatherContext from "../weatherContext";
import ShowIcon from "./showIcon";
import WindIcon from "/icons/wind.svg";
// import Termometer from './icons/thermometer-celsius.svg'

let modo = 0
function dailyForecast() {
	const { weatherData } = useContext(WeatherContext);
	console.log(weatherData);
	const daydata = {};
	if (weatherData != null) {
		daydata.daytemperature = weatherData.current_weather.temperature;
		daydata.weathercode = weatherData.current_weather.weathercode;
		daydata.windspeed = `${weatherData.current_weather.windspeed} km/h`;
		daydata.maxtemp = weatherData.daily.temperature_2m_max[0];
		daydata.precipitationprop =
			weatherData.daily.precipitation_probability_max[0];
		daydata.mintemp = weatherData.daily.temperature_2m_min[0];

		// console.log(daydata)
	}
	
		return (
			<div>
			
				{weatherData &&  (
					<div className=' rounded-2xl p-5 bg-blue-1 grid grid-cols-1 gap-1 overflow-auto '>
						<p>Previsão hoje</p>
						<div className='col-start-1 col-end-10 grid grid-cols-4 grid-rows-4 gap-2 text-lg'>
							<div className='row-span-4 center-all flex-col shadow-component'>
								<img
									className='-mx-5'
									width='100px'
									height='100px'
									src='/icons/thermometer-celsius.svg'
								/>
								<p className='h-[100%] text-center w-full font-semibold text-2xl'>
									{daydata.daytemperature} ºC
								</p>
							</div>
							<div className=' row-span-2 col-start-2 row-start-1 center-all flex-col shadow-component'>
								<img
									className='-mb-2'
									width='70px'
									height='70px'
									src='/icons/thermometer-warmer.svg'
								/>
								<p className=" text-lg">{daydata.maxtemp} ºC</p>
							</div>
							<div className='row-span-2 col-start-2 row-start-3 center-all flex-col shadow-component'>
								<img
									className='-mb-2'
									width='70px'
									height='70px'
									src='/icons/thermometer-colder.svg'
								/>
								<p>{daydata.mintemp} ºC</p>
							</div>
							<div className='row-span-2 col-start-3 row-start-1 center-all flex-col shadow-component'>
								<img
									className=' -mb-3'
									width='60px'
									height='70px'
									src='/icons/wind.svg'
								/>
								<p className='text-center w-50%  -mb-3 '>
									{daydata.windspeed}
								</p>
							</div>
							<div className='row-span-2 col-start-3 row-start-3 center-all flex-col shadow-component'>
								<img
									className='-mb-8'
									width='40px'
									height='40px'
									src='/icons/raindrop.svg'
								/>
								<p className='text-center w-full   mt-3'>
									{daydata.precipitationprop} %
								</p>
							</div>
							<div className='row-span-4 col-start-4 row-start-1 center-all flex-col shadow-component'>
								<ShowIcon
									styles=' col-start-8 col-end-13   col-span-2 row-span-2 flex flex-col justify-center items-center text-center'
									width='70px'
									height='70px'
									weatherCode={daydata.weathercode}
								/>
							</div>
						</div>
					</div>
				)}
			</div>
		)}
	
		


export default dailyForecast;
