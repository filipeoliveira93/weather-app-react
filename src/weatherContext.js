import React from 'react';

//cria um contexto
const WeatherContext = React.createContext({
    weatherData: null,
    setWeatherData: () => {}, //função vazia
});

export default WeatherContext;