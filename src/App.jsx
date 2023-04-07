import React, {useState} from "react"
import WeatherSearch from "./weatherSearch" //API 
import WeatherContext from "./weatherContext" //contexto
import TodayForecast from "./dayForecast"
import DailyForecast from "./dailyForecast"


function App() {

    
    const[weatherData, setWeatherData] =useState(null)
    return (
        <WeatherContext.Provider value={{ weatherData, setWeatherData}}>
            <WeatherSearch/>
            <TodayForecast/>
            <DailyForecast/>
        </WeatherContext.Provider>
        
    )
}

export default App