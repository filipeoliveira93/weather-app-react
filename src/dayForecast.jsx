import React, { useContext } from 'react'
import WeatherContext from './weatherContext'

function dayForecast() {
    const {weatherData} = useContext(WeatherContext)


if (!weatherData) {
    return (<div>Loading...</div>)
}

return (
    <div>
        {weatherData && 
            <p>{JSON.stringify(weatherData, null)}</p> 
            }
    </div>
)
        }

export default dayForecast