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
    <div className="flex flex-col overflow-y-auto   bg-blue-1   mx-auto rounded-2xl  gap-2 p-4 md:h-[100%] h-[35vh] shadow-component ">
      <h2 className=" ">Previsão diária</h2>
      <div className=" overflow-auto p-3 h-full flex flex-col items-start gap-2 ">
        {days.map((day, index) => (
          <div className="grid grid-cols-12 grid-rows-1 h-16 w-full gap-1 items-center shadow-component">
            <div className=" col-span-2 p-2 flex justify-center items-center  rounded-l-xl">
              <h2 className=" text-left  ">
                {day[0]}
                <br></br>
                {day[1]}
              </h2>
            </div>

            <div className=" col-span-4  flex justify-center items-center  ">
              <img
                className="relative mx-1 "
                width="35px"
                height="35px"
                src="/icons/thermometer.svg"
              />
              <div className="  relative flex md:pr-5 flex-col justify-center items-end  h-full w-full ">
                <p className="text-right ">
                  {dailyData.temperature_2m_max[index]} °C
                </p>
                <p>{dailyData.temperature_2m_min[index]} °C</p>
              </div>
            </div>
            <div className=" col-span-2 flex justify-center items-center  ">
              <img
                className="  "
                width="30px"
                height="30px"
                src="/icons/raindrop.svg"
              />
              <p className=" text-center ">
                {dailyData.precipitation_probability_max[index]} %
              </p>
            </div>

            <div className="col-span-4">
              <ShowIcon
                styles="flex flex-col justify-center items-center h-full"
                width="60px"
                height="60px"
                weatherCode={dailyData.weathercode[index]}
                showtext={false}
              />
            </div>
          </div>

         
        ))}
      </div>
    </div>
  );
}
export default DailyForecast;
