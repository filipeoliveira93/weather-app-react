import React, { useContext } from "react";
import WeatherContext from "../weatherContext";
import ShowIcon from "./showIcon";

function getDayName(dateStr, locale) {
  var date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "long" });
}

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
    <div className="flex flex-col overflow-y-auto shadow-component  bg-blue-1   mx-auto rounded-2xl  gap-2 p-4 h-full md:w-full ">
      <h2 className="abslute font-semibold ">Previsão diária</h2>
      <div className="grid grid-rows-7 gap-1 overflow-auto p-3 ">
        {days.map((day, index) => (
          <div className="grid grid-cols-12 grid-rows-1 h-16 shadow-component w-[100%]">
            <div className=" col-span-2 p-2 flex justify-center items-center  rounded-l-xl">
              <h2 className=" text-center font-semibold  ">
                {day[0]}
                <br></br>
                {day[1]}
              </h2>
            </div>

            <div className=" col-span-4  flex justify-center items-center  ">
              <img
                className="relative mx-1 "
                width="40px"
                height="40px"
                src="/icons/thermometer.svg"
              />
              <div className="  relative flex flex-col justify-center items-center  h-full w-full ">
                <p className="font-semibold">
                  {dailyData.temperature_2m_max[index]} °C
                </p>
                <p>{dailyData.temperature_2m_min[index]} °C</p>
              </div>
            </div>
            <div className=" col-span-2 flex justify-center items-center  ">
              <img
                className="  "
                width="35px"
                height="35px"
                src="/icons/raindrop.svg"
              />
              <p className=" text-center font-semibold ">
                {dailyData.precipitation_probability_max[index]} %
              </p>
            </div>

            <div className="col-span-4">
              <ShowIcon
                styles="flex flex-col justify-center items-center h-full"
                width="70px"
                height="70px"
                weatherCode={dailyData.weathercode[index]}
                showtext={false}
              />
            </div>
          </div>

          // <div
          // 	key={index}
          // 	className='shadow-component border-[1px] p-1 h-[120px] rounded-lg grid  grid-cols-12 grid-rows-2 gap-2 '>
          // 	<div className='shadow-component mx-2 col-span-1 row-span-2 text-center  text-xl  grid grid-rows-2  '>
          // 		<h2 className='  m-auto w-[100%]  h-[100%] pt-5 border-b-1   font-medium border-slate-100/50 '>
          // 			{" "}
          // 			{day[0]}
          // 		</h2>

          // 		<h2 className='  m-auto w-[100%] h-[100%] border-t-2 font-light  '>
          // 			{" "}
          // 			{day[1]}{" "}
          // 		</h2>
          // 	</div>
          // 	<div className='ml-2 my-auto   col-span-6 col-start-2 col-end-8'>
          // 		<p>
          // 			Probabilidade de chuva: {dailyData.precipitation_probability_max[index]}{" "}
          // 			%
          // 		</p>
          // 	</div>
          // 	<div className='ml-2 flex flex-col  col-span-2 col-start-2 col-end-8 row-start-2 text-sm '>
          // 		<p>máx: {dailyData.temperature_2m_max[index]} °C</p>
          // 		<p>min: {dailyData.temperature_2m_min[index]} °C</p>
          // 	</div>
          // 	<ShowIcon
          // 		styles='bg-slate-200/1 col-start-8 col-end-13 px-3 row-span-2 flex flex-col justify-center items-center text-center text-sm'
          // 		width='60px'
          // 		height='60px'
          // 		weatherCode={dailyData.weathercode[index]}
          // 	/>
          // </div>
        ))}
      </div>
    </div>
  );
}
export default DailyForecast;
