import React, { useContext } from 'react'
import WeatherContext from './weatherContext'
import ShowIcon from './showIcon'

function dayForecast() {
    const {weatherData} = useContext(WeatherContext)
    console.log(weatherData)
    const daydata = {}
    if (weatherData != null) {
        daydata.daytemperature = weatherData.current_weather.temperature,
        daydata.weathercode = weatherData.current_weather.weathercode
        
        // console.log(daydata)
    }


return (
    <div>
        {weatherData && 
        <>
            <p>{daydata.daytemperature}</p> 
            <p>{daydata.weathercode}</p> 
            <ShowIcon weatherCode={daydata.weathercode}/>
        </>
            }
    </div>
)
        }

export default dayForecast