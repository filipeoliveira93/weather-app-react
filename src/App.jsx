import React, {useState} from 'react';
import WeatherSearch from './components/weatherSearch'; //API
import WeatherContext from './weatherContext'; //contexto
import DayForecast from './components/dayForecast';
import DailyForecast from './components/dailyForecast';
import HourlyChart from './components/hourlyChart';

function App() {
    const [weatherData, setWeatherData] = useState(null);
    return (
        <WeatherContext.Provider
            className='h-[100%]'
            value={{weatherData, setWeatherData}}>
            <WeatherSearch />

            <div className='md:flex py-5 md:w-[100%] md:h-[80vh] md:mx-auto md:justify-center md:items-center grid grid-cols-1 w-[90%] mx-auto gap-[15px]'>
                <div className='md:h-[100%] md:w-[50%] grid gap-[15px]  '>
                    <DayForecast className='md:max-h-1/2 shadow-component' />
                    <HourlyChart className='md:max-h-1/2 ' />
                </div>
                <div className='md:h-full'>
                    <DailyForecast className='' />
                </div>
            </div>
        </WeatherContext.Provider>
    );
}

export default App;
