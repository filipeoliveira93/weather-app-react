import React, { useContext } from 'react'
import WeatherContext from './weatherContext'
import ShowIcon from './showIcon'

function dailyForecast() {
    const {weatherData} = useContext(WeatherContext)
    // console.log(weatherData)
    var dailyData = {}
    if (weatherData != null) {
        dailyData = weatherData.daily
        dailyData.precipitation_probability_max
        for (date in dailyData.time) {
            dailyData.time.spl
        }
           
    }
    console.log(dailyData)

    return (
        <div>
            {weatherData && (
                <p>deu bom ein</p>
            ) }
        </div>
    )
            }
    export default dailyForecast