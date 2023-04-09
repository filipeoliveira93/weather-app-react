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
        dailyData.days = []
        for ( let date in dailyData.time) {
            let split = dailyData.time[date].split('-')

            dailyData.days.push(split[2])

        }
   } else { return null } //returns null if there is no data.

    console.log(dailyData.days)

    return (
        <div>
            {weatherData && (
               {dailyData.days.map((day) => (
                <div key={key}>
                    <h2> Dia {day}</h2>
                    <p>Probabilidade de precipitação {dailyData.precipitation_probability_max}</p>
                    <showIcon watherCode={daily}
                </div>
               ))}
            ) }
        </div>
    )
            }
    export default dailyForecast