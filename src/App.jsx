import React, { useState } from "react";
import WeatherSearch from "./weatherSearch"; //API
import WeatherContext from "./weatherContext"; //contexto
import DayForecast from "./components/dayForecast";
import DailyForecast from "./components/dailyForecast";
import HourlyChart from "./components/hourlyChart";

function App() {
	const [weatherData, setWeatherData] = useState(null);
	return (
		<WeatherContext.Provider value={{ weatherData, setWeatherData }}>
			<WeatherSearch />
			<DayForecast />
			<DailyForecast />
			<HourlyChart />
		</WeatherContext.Provider>
	);
}

export default App;
