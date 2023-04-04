import React, {useState} from "react"
import WeatherSearch from "./weatherSearch" //API 
import WeatherContext from "./weatherContext" //contexto
import TodayForecast from "./dayForecast"


function App() {
    const[weatherData, setWeatherData] =useState(null)
    return (
        <WeatherContext.Provider value={{ weatherData, setWeatherData}}>
            <WeatherSearch/>
            <TodayForecast/>
        </WeatherContext.Provider>
    )
}

export default App