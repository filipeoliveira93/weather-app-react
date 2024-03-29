import React from "react";

function showIcon({ weatherCode, width, height, styles, showtext }) {
  const weatherIcons = {
    0: ["☀️", "Céu limpo", "clear-day"],
    1: ["🌤️", "Limpo com nuvens", "partly-cloudy-day"],
    2: ["⛅️", "Parcialmente nublado", "partly-cloudy-day"],
    3: ["☁️", "Nublado", "cloudy", "overcast"],
    45: ["🌫️", "Névoa", "mist"],
    48: ["🌫️", "Névoa", "mist"],
    51: ["🌧️", "Chuvisco Fraco", "partly-cloudy-day-rain"],
    53: ["🌧️", "Chuvisco Moderado", "partly-cloudy-day-rain"],
    55: ["🌧️", "Chuvisco Intenso", "partly-cloudy-day-rain"],
    56: ["🌧️", "Chuva congelante Fraca", "partly-cloudy-day-rain"],
    57: ["🌧️", "Chuva congelante Intensa", "rain"],
    61: ["🌧️", "Chuva Fraca", "rain"],
    63: ["🌧️", "Chuva Moderada", "rain"],
    65: ["🌧️", "Chuva Forte", "rain"],
    66: ["🌨️", "Chuva Congelante Fraca", "sleet"],
    67: ["🌨️", "Chuva Congelante Forte", "sleet"],
    71: ["❄️", "Neve Fraca", "snow"],
    73: ["❄️", "Neve Moderada", "snow"],
    75: ["❄️", "Neve Forte", "snow"],
    77: ["❄️", "Granizo", "hail"],
    80: ["🌧️", "Chuva Fraca", "rain"],
    81: ["🌧️", "Chuva Moderada", "rain"],
    82: ["🌧️", "Chuva Forte", "thunderstorms-day-rain"],
    85: ["❄️", "Neve Fraca", "snow"],
    86: ["❄️", "Neve Forte", "snow"],
    95: ["🌩️", "Trovoadas", "thunderstorms-rain"],
    96: ["🌩️", "Trovoadas com granizo Fraco", "thunderstorms-rain"],
    99: ["🌩️", "Trovoadas com granizo Forte", "thunderstorms-rain"],
  };
  const weatherData = weatherIcons[weatherCode] || [];
  let src = weatherData[2] ? `/icons/${weatherData[2]}.svg` : "";
  let weatherdescription = weatherData[1] ? weatherData[1] : "";

  return (
    <div className={styles}>
      <img
        className=""
        width={width}
        height={height}
        src={src}
        alt="Weather icon"
      />
      {showtext && <p>{weatherdescription}</p>}
    </div>
  );
}
export default showIcon;
